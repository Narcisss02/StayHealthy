import { useState } from "react";
import styles from "./ExercitiiPage.module.css";

const GALERIE_EXERCITII = [
  {
    id: 1, titlu: "Genuflexiuni (Squats)", grupa: "Picioare & Glutei",
    imagine: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
    descriere: "Exercițiul rege pentru forța trenului inferior.",
    detalii: "Ține spatele drept, coboară până când coapsele sunt paralele cu solul."
  },
  {
    id: 2, titlu: "Împins la piept (Bench Press)", grupa: "Piept, Umeri & Triceps",
    imagine: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    descriere: "Construiește masă musculară și forță explozivă.",
    detalii: "Plantează picioarele ferm pe sol. Menține un arc ușor în zona lombară."
  },
  {
    id: 3, titlu: "Îndreptări (Deadlift)", grupa: "Spate & Lanț posterior",
    imagine: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    descriere: "Activează aproape toată musculatura corpului.",
    detalii: "Bara trebuie să rămână aproape de tibii. Mișcarea pornește din șold."
  },
  {
    id: 4, titlu: "Tracțiuni (Pull-ups)", grupa: "Spate & Biceps",
    imagine: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
    descriere: "Definește musculatura spatelui și oferă forma în V.",
    detalii: "Folosește o priză puțin mai lată decât umerii. Trage din coate spre podea."
  },
  {
    id: 5, titlu: "Fandări cu gantere (Lunges)", grupa: "Picioare",
    imagine: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
    descriere: "Excelent pentru izolare și echilibru unilateral.",
    detalii: "Fă un pas amplu înainte. Păstrează trunchiul vertical."
  },
  {
    id: 6, titlu: "Presă Militară (Overhead Press)", grupa: "Umeri",
    imagine: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    descriere: "Construiește umeri masivi și forță de împingere.",
    detalii: "Strânge fesierii și abdomenul pentru a stabiliza coloana."
  }
];

function ExercitiuCard({ ex }) {
  const [expandat, setExpandat] = useState(false);
  return (
    <article className={styles.card} onClick={() => setExpandat(!expandat)}>
      <div className={styles.imgWrapper}>
        <img src={ex.imagine} alt={ex.titlu} loading="lazy" />
        <span className={styles.muscleTag}>{ex.grupa}</span>
      </div>
      <div className={styles.info}>
        <h3>{ex.titlu}</h3>
        <p>{ex.descriere}</p>
        <div className={styles.expandIndicator}>
          {expandat ? "▲ Ascunde Detalii" : "▼ Vezi Execuția Corectă"}
        </div>
        {expandat && (
          <div className={styles.detailsExtended}>
            <strong>Tips & Tricks:</strong> {ex.detalii}
          </div>
        )}
      </div>
    </article>
  );
}

export default function ExercitiiPage() {
  return (
    <div className={styles.container}>
      <section className="panel">
        <h2>CATALOG EXERCIȚII (Apăsați pe card pentru tehnică)</h2>
        <div className={styles.grid}>
          {GALERIE_EXERCITII.map((ex) => (
            <ExercitiuCard key={ex.id} ex={ex} />
          ))}
        </div>
      </section>
    </div>
  );
}