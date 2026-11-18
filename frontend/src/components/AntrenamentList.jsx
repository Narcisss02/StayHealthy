import AntrenamentCard from "./AntrenamentCard.jsx";
import styles from "./AntrenamentList.module.css";

export default function AntrenamentList({ antrenamente, onToggle, onDelete }) {
  if (antrenamente.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există niciun antrenament.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {antrenamente.map((antrenament) => (
        <AntrenamentCard
          key={antrenament.id}
          antrenament={antrenament}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}