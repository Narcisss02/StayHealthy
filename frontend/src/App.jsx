import { useState } from "react";
import AntrenamentList from "./components/AntrenamentList.jsx";

const ANTRENAMENTE_INITIALE = [
    { id: 1, titlu: "Leg Day Workout", finalizat: false, dificultate: "intens" },
    { id: 2, titlu: "Morning Run 5km", finalizat: true, dificultate: "mediu" },
    { id: 3, titlu: "Yoga & Stretching", finalizat: false, dificultate: "usor" }
];

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
    const [antrenamente, setAntrenamente] = useState(ANTRENAMENTE_INITIALE);
    const [tema, setTema] = useState(temaInitiala);

    function handleToggle(id) {
        setAntrenamente((prev) =>
            prev.map((a) => (a.id === id ? { ...a, finalizat: !a.finalizat } : a))
        );
    }

    function handleDelete(id) {
        setAntrenamente((prev) => prev.filter((a) => a.id !== id));
    }

    function handleTema() {
        const noua = tema === "dark" ? "light" : "dark";
        setTema(noua);
        document.documentElement.dataset.theme = noua;
    }

    const total = antrenamente.length;
    const planificate = antrenamente.filter((a) => !a.finalizat).length;
    const finalizate = total - planificate;

    let mesajCoach = "";
    if (total === 0) {
        mesajCoach = "Nu ai niciun antrenament. Adaugă unul și hai să începem!";
    } else if (finalizate === 0) {
        mesajCoach = "Ziua abia a început, treci la treabă!";
    } else if (finalizate === total) {
        mesajCoach = "Misiune îndeplinită! Campionule, meriți o pauză.";
    } else {
        mesajCoach = "Ești pe drumul cel bun, nu te lăsa!";
    }

    return (
        <>
            <header className="app-header">
                <button
                    className="theme-toggle"
                    onClick={handleTema}
                    aria-pressed={tema === "dark"}
                >
                    {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
                </button>
                <h1>StayHealthy</h1>
                <p>Gestionează-ți antrenamentele la sală și urmărește-ți progresul.</p>
                <p className="app-count">
                    {total} antrenamente, dintre care {planificate} planificate
                </p>
                
                {/* Antrenorul Virtual */}
                <div className="coach-message">
                    💪 {mesajCoach}
                </div>
            </header>
            <main className="container">
                <section className="panel">
                    <h2>Antrenamentele mele</h2>
                    <AntrenamentList 
                        antrenamente={antrenamente} 
                        onToggle={handleToggle} 
                        onDelete={handleDelete} 
                    />
                </section>
            </main>
        </>
    );
}