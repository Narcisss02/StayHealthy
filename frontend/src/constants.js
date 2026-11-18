export const DIFICULTATI = [
  { value: "usor", label: "Ușor" },
  { value: "mediu", label: "Mediu" },
  { value: "intens", label: "Intens" },
];

export const ETICHETE_DIFICULTATE = Object.fromEntries(
  DIFICULTATI.map((d) => [d.value, d.label])
);