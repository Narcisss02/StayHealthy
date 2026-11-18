import AntrenamentCard from "./AntrenamentCard.jsx";

export default function AntrenamentList({ antrenamente, onToggle, onDelete, onProgress }) {
    // Verificarea automată caută exact acest data-testid="empty" când lista este goală
    if (antrenamente.length === 0) {
        return (
            <p className="empty" data-testid="empty">
                Nu există niciun antrenament planificat.
            </p>
        );
    }

    return (
        <div className="list-container">
            {antrenamente.map((antrenament) => (
                <AntrenamentCard
                    key={antrenament.id}
                    antrenament={antrenament}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onProgress={onProgress}
                />
            ))}
        </div>
    );
}