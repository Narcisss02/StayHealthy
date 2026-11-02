import AntrenamentCard from "./AntrenamentCard.jsx";

export default function AntrenamentList({ antrenamente, onToggle, onDelete, onProgress }) {
    if (antrenamente.length === 0) {
        return <p className="empty">Nu există niciun antrenament planificat.</p>;
    }

    return (
        <ul className="item-list">
            {antrenamente.map((antrenament) => (
                <AntrenamentCard 
                    key={antrenament.id} 
                    antrenament={antrenament} 
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onProgress={onProgress}
                />
            ))}
        </ul>
    );
}