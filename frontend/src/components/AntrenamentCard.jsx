import { Link } from "react-router-dom";
import { ETICHETE_DIFICULTATE } from "../constants.js";
import styles from "./AntrenamentCard.module.css";

export default function AntrenamentCard({ antrenament, onToggle, onDelete }) {
  return (
    <li
      className={antrenament.finalizat ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={antrenament.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={antrenament.finalizat}
          onChange={() => onToggle(antrenament.id)}
          aria-label={`Marchează ${antrenament.titlu}`}
          data-testid="item-toggle"
        />
        <div>
          <Link
            to={`/antrenamente/${antrenament.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {antrenament.titlu}
          </Link>
          <span className={`badge badge-${antrenament.dificultate}`}>
            Dificultate: {ETICHETE_DIFICULTATE[antrenament.dificultate]}
          </span>
        </div>
      </div>
      <button
        className="btn-danger"
        onClick={() => onDelete(antrenament.id)}
        aria-label={`Șterge ${antrenament.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}