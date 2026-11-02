import { useEffect, useState } from "react";
import AntrenamentList from "./components/AntrenamentList.jsx";
import { fetchAntrenamente } from "./api.js";

const GALERIE_EXERCITII = [
    {
        id: 1, titlu: "Genuflexiuni (Squats)", grupa: "Picioare & Glutei",
        imagine: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
        descriere: "Exercițiul rege pentru forța trenului inferior.",
        detalii: "Tine spatele drept, coboară până când coapsele sunt paralele cu solul."
    },
    {
        id: 2, titlu: "Împins la piept (Bench Press)", grupa: "Piept, Umeri & Triceps",
        imagine: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
        descriere: "Construiește masă musculară și forță explozivă.",
        detalii: "Plantează picioarele ferm pe sol. Menține un arc ușor în zona lombară."
    },
    {
        id: 3, titlu: "Îndreptări (Deadlift)", grupa: "Spate & Lanț posterior",
        imagine: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
        descriere: "Activează aproape toată musculatura corpului.",
        detalii: "Bara trebuie să rămână aproape de tibii. Mișcarea pornește din șold."
    },
    {
        id: 4, titlu: "Tracțiuni (Pull-ups)", grupa: "Spate & Biceps",
        imagine: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
        descriere: "Definește musculatura spatelui și oferă forma în V.",
        detalii: "Folosește o priză puțin mai lată decât umerii. Trage din coate spre podea."
    },
    {
        id: 5, titlu: "Fandări cu gantere (Lunges)", grupa: "Picioare",
        imagine: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
        descriere: "Excelent pentru izolare și echilibru unilateral.",
        detalii: "Fă un pas amplu înainte. Păstrează trunchiul vertical."
    },
    {
        id: 6, titlu: "Presă Militară (Overhead Press)", grupa: "Umeri",
        // Am schimbat imaginea spartă cu una funcțională de forță (kettlebell press/shoulder workout)
        imagine: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80", 
        descriere: "Construiește umeri masivi și forță de împingere.",
        detalii: "Strânge fesierii și abdomenul pentru a stabiliza coloana."
    }
];

const ABONAMENTE = [
    { id: "day-pass", nume: "Day Pass", pret: "35 RON", perioada: "/ ședință", beneficii: ["Acces o singură zi", "Zonă greutăți & cardio"] },
    { id: "full-fit", nume: "StayHealthy FULL", pret: "185 RON", perioada: "/ lună", popular: true, beneficii: ["Acces 24/7", "Clase incluse", "1 ședință PT"] },
    { id: "vip-pro", nume: "Beast VIP", pret: "290 RON", perioada: "/ lună", beneficii: ["Acces 24/7 + invitat", "Plan nutrițional", "Saună inclusă"] }
];

// Mesaje motivaționale dinamice
const COACH_QUOTES = [
    "Nu te opri când ești obosit, oprește-te când ai terminat!",
    "Disciplina bate motivația în fiecare zi.",
    "Corpul tău poate duce mult mai mult decât crede mintea ta.",
    "Scuzele nu ard calorii. Fă-o să conteze!",
    "Nu există scurtături. Doar muncă grea și repetiții."
];

function ExercitiuCard({ ex }) {
    const [expandat, setExpandat] = useState(false);
    return (
        <article className="exercise-card" onClick={() => setExpandat(!expandat)}>
            <div className="exercise-img-wrapper">
                <img src={ex.imagine} alt={ex.titlu} loading="lazy" />
                <span className="muscle-tag">{ex.grupa}</span>
            </div>
            <div className="exercise-info">
                <h3>{ex.titlu}</h3>
                <p>{ex.descriere}</p>
                <div className="expand-indicator">{expandat ? "▲ Ascunde Detalii" : "▼ Vezi Execuția Corectă"}</div>
                {expandat && (
                    <div className="exercise-details-extended">
                        <strong>Tips & Tricks:</strong> {ex.detalii}
                    </div>
                )}
            </div>
        </article>
    );
}

export default function App() {
    const [antrenamente, setAntrenamente] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tema, setTema] = useState("dark");
    const [pagina, setPagina] = useState("acasa");
    const [abonamentSelectat, setAbonamentSelectat] = useState("StayHealthy FULL");
    const [titluNou, setTitluNou] = useState("");
    const [dificultateNoua, setDificultateNoua] = useState("mediu");
    
    // State pentru citatul curent al coach-ului
    const [quoteIndex, setQuoteIndex] = useState(0);

    // Efect pentru fetch-ul datelor
    useEffect(() => {
        let ignore = false;
        async function load() {
            try {
                const data = await fetchAntrenamente();
                if (!ignore) setAntrenamente(data);
            } catch (err) {
                if (!ignore) setError(err.message);
            } finally {
                if (!ignore) setLoading(false);
            }
        }
        load();
        return () => { ignore = true; };
    }, []);

    // Efect pentru rotația mesajelor motivaționale o dată la 5 secunde
    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % COACH_QUOTES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    function handleToggle(id) {
        setAntrenamente((prev) =>
            prev.map((a) => (a.id === id ? { ...a, finalizat: !a.finalizat, progres: !a.finalizat ? 100 : 0 } : a))
        );
    }

    function handleDelete(id) {
        setAntrenamente((prev) => prev.filter((a) => a.id !== id));
    }

    function handleProgress(id, valoare) {
        const progresNum = Number(valoare);
        setAntrenamente((prev) =>
            prev.map((a) =>
                a.id === id ? { ...a, progres: progresNum, finalizat: progresNum === 100 } : a
            )
        );
    }

    function handleAdd(e) {
        e.preventDefault();
        if (!titluNou.trim()) return;
        const antrenamentNou = {
            id: Date.now(),
            titlu: titluNou,
            dificultate: dificultateNoua,
            finalizat: false,
            progres: 0
        };
        setAntrenamente([...antrenamente, antrenamentNou]);
        setTitluNou("");
    }

    function handleTema() {
        const noua = tema === "dark" ? "light" : "dark";
        setTema(noua);
        document.documentElement.dataset.theme = noua;
    }

    const total = antrenamente.length;
    const planificate = antrenamente.filter((a) => !a.finalizat).length;
    const finalizate = total - planificate;

    let progressStatus = "";
    if (total === 0) progressStatus = "Nicio sesiune adăugată";
    else if (finalizate === total) progressStatus = "Sesiuni finalizate complet!";
    else progressStatus = `Ai terminat ${finalizate} din ${total} sesiuni.`;

    return (
        <div className="app-wrapper">
            <nav className="navbar">
                <div className="nav-brand" onClick={() => setPagina("acasa")}>
                    <span className="brand-red">STAY</span>HEALTHY
                </div>
                <div className="nav-links">
                    <button className={pagina === "acasa" ? "nav-btn active" : "nav-btn"} onClick={() => setPagina("acasa")}>Antrenamente</button>
                    <button className={pagina === "abonamente" ? "nav-btn active" : "nav-btn"} onClick={() => setPagina("abonamente")}>Abonamente</button>
                    <button className={pagina === "exercitii" ? "nav-btn active" : "nav-btn"} onClick={() => setPagina("exercitii")}>Exerciții</button>
                </div>
                <button className="theme-toggle" onClick={handleTema}>
                    <span className="theme-icon">{tema === "dark" ? "☀" : "🌙"}</span> {tema === "dark" ? "Light" : "Dark"}
                </button>
            </nav>

            <header className="app-header">
                <div className="hero-content">
                    <span className="hero-tag"><span className="pulse-icon">⚡</span> STAY FIT, STAY HEALTHY</span>
                    <h1>DEPĂȘEȘTE-ȚI LIMITELE</h1>
                    
                    {/* Design premium pentru bară statistici */}
                    <div className="premium-stats-bar">
                        <div className="stat-block">
                            <span className="stat-label">TOTAL SESIUNI</span>
                            <span className="stat-value">{total}</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-block">
                            <span className="stat-label">DE EFECTUAT</span>
                            <span className="stat-value highlight">{planificate}</span>
                        </div>
                    </div>

                    {/* Coach motivațional animat */}
                    <div className="coach-message animated-box">
                        <div className="coach-header">
                            <span className="coach-icon">🏋️</span> <strong>STATUS: {progressStatus}</strong>
                        </div>
                        <div className="coach-quote-container">
                            <p className="coach-quote">"{COACH_QUOTES[quoteIndex]}"</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container">
                {pagina === "acasa" && (
                    <div className="layout-grid">
                        <section className="panel side-panel">
                            <h2>ADAUGĂ SESIUNE</h2>
                            <form className="add-form" onSubmit={handleAdd}>
                                <input 
                                    type="text" 
                                    placeholder="Nume ex. Chest Day..." 
                                    value={titluNou}
                                    onChange={(e) => setTitluNou(e.target.value)}
                                    required
                                />
                                <select value={dificultateNoua} onChange={(e) => setDificultateNoua(e.target.value)}>
                                    <option value="usor">Ușor (Recovery)</option>
                                    <option value="mediu">Mediu (Hipertrofie)</option>
                                    <option value="intens">Intens (Forță / Beast)</option>
                                </select>
                                <button type="submit" className="btn-submit">➕ Adaugă la Plan</button>
                            </form>
                        </section>

                        <section className="panel main-panel">
                            <h2>PLANUL DE AZI</h2>
                            {loading && <p className="info">Se încarcă antrenamentele...</p>}
                            {error && <p className="error">Eroare API: {error}</p>}
                            {!loading && !error && (
                                <AntrenamentList
                                    antrenamente={antrenamente}
                                    onToggle={handleToggle}
                                    onDelete={handleDelete}
                                    onProgress={handleProgress}
                                />
                            )}
                        </section>
                    </div>
                )}

                {pagina === "abonamente" && (
                    <section className="panel">
                        <h2>ABONAMENTE STAYHEALTHY</h2>
                        <div className="pricing-grid">
                            {ABONAMENTE.map((ab) => (
                                <div key={ab.id} className={ab.popular ? "price-card popular" : "price-card"}>
                                    {ab.popular && <span className="popular-ribbon">POPULAR</span>}
                                    <h3>{ab.nume}</h3>
                                    <div className="price-value"><span className="amount">{ab.pret}</span> <span className="period">{ab.perioada}</span></div>
                                    <ul className="benefits-list">{ab.beneficii.map((b, idx) => <li key={idx}>✔ {b}</li>)}</ul>
                                    <button className="btn-select-plan" onClick={() => setAbonamentSelectat(ab.nume)}>
                                        {abonamentSelectat === ab.nume ? "Selectat" : "Alege"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {pagina === "exercitii" && (
                    <section className="panel">
                        <h2>CATALOG EXERCIȚII (Apăsați pe card pentru tehnică)</h2>
                        <div className="exercises-grid">
                            {GALERIE_EXERCITII.map((ex) => <ExercitiuCard key={ex.id} ex={ex} />)}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}