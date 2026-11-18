import { useState } from "react";
import styles from "./AbonamentePage.module.css";

const ABONAMENTE = [
  { id: "day-pass", nume: "Day Pass", pret: "35 RON", perioada: "/ ședință", beneficii: ["Acces o singură zi", "Zonă greutăți & cardio"] },
  { id: "full-fit", nume: "StayHealthy FULL", pret: "185 RON", perioada: "/ lună", popular: true, beneficii: ["Acces 24/7", "Clase incluse", "1 ședință PT"] },
  { id: "vip-pro", nume: "Beast VIP", pret: "290 RON", perioada: "/ lună", beneficii: ["Acces 24/7 + invitat", "Plan nutrițional", "Saună inclusă"] }
];

export default function AbonamentePage() {
  const [abonamentSelectat, setAbonamentSelectat] = useState("StayHealthy FULL");

  return (
    <div className={styles.container}>
      <section className="panel">
        <h2>ABONAMENTE STAYHEALTHY</h2>
        <div className={styles.grid}>
          {ABONAMENTE.map((ab) => (
            <div key={ab.id} className={ab.popular ? `${styles.card} ${styles.popular}` : styles.card}>
              {ab.popular && <span className={styles.ribbon}>POPULAR</span>}
              <h3>{ab.nume}</h3>
              <div className={styles.priceValue}>
                <span className={styles.amount}>{ab.pret}</span>{" "}
                <span className={styles.period}>{ab.perioada}</span>
              </div>
              <ul className={styles.benefits}>
                {ab.beneficii.map((b, idx) => <li key={idx}>✔ {b}</li>)}
              </ul>
              <button className={styles.selectBtn} onClick={() => setAbonamentSelectat(ab.nume)}>
                {abonamentSelectat === ab.nume ? "Selectat" : "Alege"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}