import { useState } from "react";
import { DIFICULTATI } from "../constants.js";
import styles from "./TaskForm.module.css";

const TITLU_MAX = 100;

export default function TaskForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [dificultate, setDificultate] = useState("mediu");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Titlul este obligatoriu.";
    if (t.length > TITLU_MAX) return `Titlul are maximum ${TITLU_MAX} de caractere.`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }
    setEroare("");
    setTrimite(true);

    try {
      await onAdd({ titlu: titlu.trim(), dificultate, finalizat: false });
      setTitlu("");
      setDificultate("mediu");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Titlu
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: Sesiune Yoga"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>
      <label>
        Dificultate
        <select
          value={dificultate}
          onChange={(e) => setDificultate(e.target.value)}
          data-testid="form-dificultate"
        >
          {DIFICULTATI.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
      </label>
      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}
      <button type="submit" className="btn" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă"}
      </button>
    </form>
  );
}