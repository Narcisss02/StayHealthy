const ETICHETE_DIFICULTATE = { usor: "Ușor", mediu: "Mediu", intens: "Intens" };

export default function AntrenamentCard({ antrenament, onToggle, onDelete }) {
    return (
        <li className={antrenament.finalizat ? "item-card done" : "item-card"}>
            <label className="task-main">
                <input
                    type="checkbox"
                    checked={antrenament.finalizat}
                    onChange={() => onToggle(antrenament.id)}
                />
                <div>
                    <h3>{antrenament.titlu}</h3>
                    <span className={`badge badge-${antrenament.dificultate}`}>
                        {ETICHETE_DIFICULTATE[antrenament.dificultate]}
                    </span>
                </div>
            </label>
            <button
                className="btn-danger"
                onClick={() => onDelete(antrenament.id)}
                aria-label={`Șterge ${antrenament.titlu}`}
            >
                Șterge
            </button>
        </li>
    );
}