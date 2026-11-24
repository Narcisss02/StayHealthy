import { Router } from "express";
import { parseId, valideazaAntrenament } from "../validation.js";

const router = Router();

// Etapa 9: datele stau în memorie și se pierd la repornire
let antrenamente = [
  { id: 1, titlu: "Push Day (Piept & Umeri)", dificultate: "intens", finalizat: false, progres: 40 },
  { id: 2, titlu: "Cardio HIIT 30 min", dificultate: "mediu", finalizat: true, progres: 100 },
  { id: 3, titlu: "Stretching & Mobilitate", dificultate: "usor", finalizat: false, progres: 0 },
];
let nextId = 4;

function gasesteIndex(req, res) {
  const id = parseId(req.params.id);
  if (!id) {
    res.status(400).json({ error: "Id invalid" });
    return -1;
  }
  const index = antrenamente.findIndex((a) => a.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Antrenamentul nu există" });
  }
  return index;
}

// GET /antrenamente
router.get("/", (req, res) => {
  res.json(antrenamente);
});

// GET /antrenamente/:id
router.get("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  res.json(antrenamente[index]);
});

// POST /antrenamente
router.post("/", (req, res) => {
  const { erori, date } = valideazaAntrenament(req.body ?? {});
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }
  const antrenament = { id: nextId++, ...date };
  antrenamente.push(antrenament);
  res.status(201).json(antrenament);
});

// PATCH /antrenamente/:id
router.patch("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  const { erori, date } = valideazaAntrenament(req.body ?? {}, { partial: true });
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }
  antrenamente[index] = { ...antrenamente[index], ...date };
  res.json(antrenamente[index]);
});

// DELETE /antrenamente/:id
router.delete("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  antrenamente.splice(index, 1);
  res.status(204).end();
});

export default router;