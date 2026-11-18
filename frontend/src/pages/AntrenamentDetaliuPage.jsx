import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAntrenament } from "../api.js";
import { ETICHETE_DIFICULTATE } from "../constants.js";
import styles from "./AntrenamentDetaliuPage.module.css";

export default function AntrenamentDetaliuPage() {
  const { id } = useParams();
  const [antrenament, setAntrenament] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchAntrenament(id)
      .then((data) => {
        if (!ignore) {
          setAntrenament(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });
    return () => { ignore = true; };
  }, [id]);

  if (loading) {
    return <p className="info" data-testid="loading">Se încarcă...</p>;
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Antrenamentul nu a putut fi încărcat: {error}
        </p>
        <Link to="/">Înapoi la listă</Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>Înapoi la listă</Link>
      <h2 className={antrenament.finalizat ? styles.done : undefined} data-testid="detail-title">
        {antrenament.titlu}
      </h2>
      <dl className={styles.fields}>
        <dt>Dificultate</dt>
        <dd>
          <span className={`badge badge-${antrenament.dificultate}`}>
            {ETICHETE_DIFICULTATE[antrenament.dificultate]}
          </span>
        </dd>
        <dt>Status</dt>
        <dd>{antrenament.finalizat ? "Finalizat" : "Planificat"}</dd>
        <dt>ID</dt>
        <dd>{antrenament.id}</dd>
      </dl>
    </section>
  );
}