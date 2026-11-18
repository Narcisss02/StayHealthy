import { useEffect, useState } from "react";
import AntrenamentList from "../components/AntrenamentList.jsx";
import TaskForm from "../components/TaskForm.jsx";
import { createAntrenament, deleteAntrenament, fetchAntrenamente, updateAntrenament } from "../api.js";
import styles from "./AntrenamentePage.module.css";

const COACH_QUOTES = [
  "Nu te opri când ești obosit, oprește-te când ai terminat!",
  "Disciplina bate motivația în fiecare zi.",
  "Corpul tău poate duce mult mai mult decât crede mintea ta.",
  "Scuzele nu ard calorii. Fă-o să conteze!",
  "Nu există scurtături. Doar muncă grea și repetiții."
];

export default function AntrenamentePage() {
  const [antrenamente, setAntrenamente] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchAntrenamente();
        if (!ignore) setAntrenamente(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => { ignore = true; };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % COACH_QUOTES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  async function handleAdd(antrenamentNou) {
    const creat = await createAntrenament(antrenamentNou);
    setAntrenamente((prev) => [...prev, creat]);
  }

  async function handleToggle(id) {
    const antrenament = antrenamente.find((a) => a.id === id);
    try {
      const finalizatNou = !antrenament.finalizat;
      const progresNou = finalizatNou ? 100 : 0;
      const actualizat = await updateAntrenament(id, { finalizat: finalizatNou, progres: progresNou });
      setAntrenamente((prev) => prev.map((a) => (a.id === id ? actualizat : a)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleProgress(id, valoare) {
    const progresNum = Number(valoare);
    try {
      const actualizat = await updateAntrenament(id, { progres: progresNum, finalizat: progresNum === 100 });
      setAntrenamente((prev) => prev.map((a) => (a.id === id ? actualizat : a)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteAntrenament(id);
      setAntrenamente((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  const total = antrenamente.length;
  const planificate = antrenamente.filter((a) => !a.finalizat).length;
  const finalizate = total - planificate;

  let progressStatus = "";
  if (total === 0) progressStatus = "Nicio sesiune adăugată";
  else if (finalizate === total) progressStatus = "Sesiuni finalizate complet!";
  else progressStatus = `Ai terminat ${finalizate} din ${total} sesiuni.`;

  return (
    <>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>
            <span className={styles.pulseIcon}>⚡</span> STAY FIT, STAY HEALTHY
          </span>
          <h1>DEPĂȘEȘTE-ȚI LIMITELE</h1>

          <div className={styles.statsBar}>
            <div className={styles.statBlock}>
              <span className={styles.statLabel}>TOTAL SESIUNI</span>
              <span className={styles.statValue}>{total}</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statBlock}>
              <span className={styles.statLabel}>DE EFECTUAT</span>
              <span className={`${styles.statValue} ${styles.highlight}`}>{planificate}</span>
            </div>
          </div>

          <div className={styles.coachMessage}>
            <div className={styles.coachHeader}>
              <span className={styles.coachIcon}>🏋️</span> <strong>STATUS: {progressStatus}</strong>
            </div>
            <div className={styles.coachQuoteContainer}>
              <p className={styles.coachQuote}>"{COACH_QUOTES[quoteIndex]}"</p>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.grid}>
          <section className="panel">
            <h2>ADAUGĂ SESIUNE</h2>
            <TaskForm onAdd={handleAdd} />
          </section>

          <section className="panel">
            <h2>PLANUL DE AZI</h2>
            {loading && <p className="info" data-testid="loading">Se încarcă antrenamentele...</p>}
            {error && <p className="error" data-testid="error">Eroare API: {error}</p>}
            {!loading && (
              <AntrenamentList
                antrenamente={antrenamente}
                onToggle={handleToggle}
                onDelete={handleDelete}
                onProgress={handleProgress}
              />
            )}
          </section>
        </div>
      </div>
    </>
  );
}