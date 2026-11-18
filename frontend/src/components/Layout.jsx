import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function navClass({ isActive }) {
  return isActive ? `${styles.navBtn} ${styles.active}` : styles.navBtn;
}

export default function Layout() {
  const [tema, setTema] = useState("dark");

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navBrand}>
          <span className={styles.brandRed}>STAY</span>HEALTHY
        </Link>

        <div className={styles.navLinks} data-testid="nav">
          <NavLink to="/" end className={navClass}>Antrenamente</NavLink>
          <NavLink to="/abonamente" className={navClass}>Abonamente</NavLink>
          <NavLink to="/exercitii" className={navClass}>Exerciții</NavLink>
          <NavLink to="/despre" className={navClass}>Despre</NavLink>
        </div>

        <button className={styles.themeToggle} onClick={handleTema}>
          <span>{tema === "dark" ? "☀" : "🌙"}</span> {tema === "dark" ? "Light" : "Dark"}
        </button>
      </nav>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>StayHealthy — Proiect Tehnologii Web</footer>
    </div>
  );
}