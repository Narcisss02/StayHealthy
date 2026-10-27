import AntrenamentCard from "./AntrenamentCard.jsx";

export default function AntrenamentList({ antrenamente, onToggle, onDelete }) {
    
    if (antrenamente.length === 0) {
        return <p className="empty">Nu există niciun antrenament.</p>;
    }

    return (
        <ul className="item-list">
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