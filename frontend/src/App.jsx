import "./App.css";

const antrenamente = [
  { id: 1, titlu: "Leg Day Workout", finalizat: false, dificultate: "intens" },
  { id: 2, titlu: "Morning Run 5km", finalizat: true, dificultate: "mediu" },
  { id: 3, titlu: "Yoga & Stretching", finalizat: false, dificultate: "usor" }
];

export default function App() {
  const planificate = antrenamente.filter((a) => !a.finalizat).length;

  return (
    <>
      <header className="app-header">
        <h1>StayHealthy</h1>
        <p>Gestionează-ți antrenamentele la sală și urmărește-ți progresul.</p>
        <p className="app-count">
          {antrenamente.length} antrenamente, dintre care {planificate} planificate
        </p>
      </header>
      
      <main className="container">
        <section className="panel">
          <h2>Antrenamentele mele</h2>
          
          <pre>{JSON.stringify(antrenamente, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}