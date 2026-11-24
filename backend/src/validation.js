export const DIFICULTATI = ["usor", "mediu", "intens"];
const TITLU_MAX = 100;

// partial: true pentru PATCH (se verifică doar câmpurile trimise)
export function valideazaAntrenament(body, { partial = false } = {}) {
  const erori = [];
  const date = {};

  if (!partial || body.titlu !== undefined) {
    if (typeof body.titlu !== "string" || body.titlu.trim() === "") {
      erori.push("titlu este obligatoriu");
    } else if (body.titlu.trim().length > TITLU_MAX) {
      erori.push(`titlu are maximum ${TITLU_MAX} de caractere`);
    } else {
      date.titlu = body.titlu.trim();
    }
  }

  if (!partial || body.dificultate !== undefined) {
    const d = body.dificultate ?? "mediu";
    if (!DIFICULTATI.includes(d)) {
      erori.push(`dificultate trebuie să fie una din: ${DIFICULTATI.join(", ")}`);
    } else {
      date.dificultate = d;
    }
  }

  if (body.finalizat !== undefined) {
    if (typeof body.finalizat !== "boolean") {
      erori.push("finalizat trebuie să fie true sau false");
    } else {
      date.finalizat = body.finalizat;
    }
  } else if (!partial) {
    date.finalizat = false;
  }

  if (body.progres !== undefined) {
    const p = Number(body.progres);
    if (!Number.isFinite(p) || p < 0 || p > 100) {
      erori.push("progres trebuie să fie un număr între 0 și 100");
    } else {
      date.progres = p;
    }
  } else if (!partial) {
    date.progres = 0;
  }

  return { erori, date };
}

export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}