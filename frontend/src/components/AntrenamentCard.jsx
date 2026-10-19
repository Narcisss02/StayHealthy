const ETICHETE_DIFICULTATE = { usor: "Ușor", mediu: "Mediu", intens: "Intens" };

export default function AntrenamentCard({ antrenament }) {
    return (
        <li className={antrenament.finalizat ? "item-card done" : "item-card"}>
            <div>
                <h3>{antrenament.titlu}</h3>
                <span className={`badge badge-${antrenament.dificultate}`}>
                    {ETICHETE_DIFICULTATE[antrenament.dificultate]}
                </span>
            </div>
            <span className="status">{antrenament.finalizat ? "Finalizat" : "Planificat"}</span>
        </li>
    );
}