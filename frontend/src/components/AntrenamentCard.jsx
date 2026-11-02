const ETICHETE_DIFICULTATE = { usor: "Ușor", mediu: "Mediu", intens: "Intens" };

export default function AntrenamentCard({ antrenament, onToggle, onDelete, onProgress }) {
    return (
        <li className={antrenament.finalizat ? "item-card done" : "item-card"}>
            <div className="card-top">
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
                <button className="btn-danger" onClick={() => onDelete(antrenament.id)}>
                    Șterge
                </button>
            </div>
            
            {/* Bara de progres */}
            <div className="progress-container">
                <span className="progress-label">Progres sesiune:</span>
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={antrenament.progres || 0} 
                    onChange={(e) => onProgress(antrenament.id, e.target.value)}
                    className="progress-slider"
                />
                <span className="progress-percent">{antrenament.progres || 0}%</span>
            </div>
        </li>
    );
}