export default function AntrenamentCard({ antrenament, onToggle, onDelete, onProgress }) {
    return (
        <div 
            className={`item-card ${antrenament.finalizat ? "done" : ""}`}
            data-testid="item" 
            data-id={antrenament.id}
        >
            <div className="item-header">
                <input
                    type="checkbox"
                    checked={antrenament.finalizat}
                    onChange={() => onToggle(antrenament.id)}
                    data-testid="item-toggle"
                />
                
                <div className="item-info">
                    <h3 data-testid="item-title">{antrenament.titlu}</h3>
                    <span className={`badge badge-${antrenament.dificultate}`}>
                        {antrenament.dificultate}
                    </span>
                </div>

                <button
                    className="btn-danger"
                    onClick={() => onDelete(antrenament.id)}
                    data-testid="item-delete"
                >
                    Șterge
                </button>
            </div>

            <div className="progress-container">
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={antrenament.progres || 0}
                    onChange={(e) => onProgress(antrenament.id, e.target.value)}
                    disabled={antrenament.finalizat}
                />
                <span className="progress-text">{antrenament.progres || 0}%</span>
            </div>
        </div>
    );
}