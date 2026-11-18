// frontend/src/components/TaskForm.jsx
import { useState } from "react";

const DIFICULTATI = [
    { value: "usor", label: "Ușor (Recovery)" },
    { value: "mediu", label: "Mediu (Hipertrofie)" },
    { value: "intens", label: "Intens (Forță / Beast)" }
];

const TITLU_MAX = 100;

export default function TaskForm({ onAdd }) {
    const [titlu, setTitlu] = useState("");
    const [dificultate, setDificultate] = useState("mediu");
    const [eroare, setEroare] = useState("");
    const [trimite, setTrimite] = useState(false);

    function valideaza() {
        const t = titlu.trim();
        if (t === "") return "Numele antrenamentului este obligatoriu.";
        if (t.length > TITLU_MAX) return `Numele are maximum ${TITLU_MAX} de caractere.`;
        return "";
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const mesaj = valideaza();
        if (mesaj) {
            setEroare(mesaj);
            return;
        }

        setEroare("");
        setTrimite(true);

        try {
            await onAdd({ titlu: titlu.trim(), dificultate, finalizat: false, progres: 0 });
            setTitlu("");
            setDificultate("mediu");
        } catch (err) {
            setEroare(err.message);
        } finally {
            setTrimite(false);
        }
    }

    return (
        <form className="add-form" onSubmit={handleSubmit} noValidate data-testid="form">
            <label>Nume Antrenament</label>
            <input
                type="text"
                placeholder="Ex. Chest Day..."
                value={titlu}
                onChange={(e) => setTitlu(e.target.value)}
                maxLength={TITLU_MAX}
                aria-invalid={Boolean(eroare)}
                data-testid="form-titlu"
            />
            
            <label>Dificultate</label>
            <select
                value={dificultate}
                onChange={(e) => setDificultate(e.target.value)}
                data-testid="form-dificultate"
            >
                {DIFICULTATI.map((d) => (
                    <option key={d.value} value={d.value}>
                        {d.label}
                    </option>
                ))}
            </select>
            
            {eroare && (
                <p className="error" data-testid="form-error">
                    {eroare}
                </p>
            )}
            
            <button type="submit" className="btn-submit" disabled={trimite} data-testid="form-submit">
                {trimite ? "Se salvează..." : "➕ Adaugă la Plan"}
            </button>
        </form>
    );
}