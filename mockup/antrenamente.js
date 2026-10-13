const antrenamente = [
    { id: 1, titlu: "Leg Day Workout", finalizat: false, dificultate: "intens" },
    { id: 2, titlu: "Morning Run 5km", finalizat: true, dificultate: "mediu" },
    { id: 3, titlu: "Yoga & Stretching", finalizat: false, dificultate: "usor" }
];

const DIFICULTATI = ["usor", "mediu", "intens"];

function listeazaTitluri(lista) {
    return lista.map((a) => a.titlu);
}

function numaraPlanificate(lista) {
    return lista.filter((a) => !a.finalizat).length;
}

function cautaDupaTitlu(lista, text) {
    return lista.filter((a) => a.titlu.toLowerCase().includes(text.toLowerCase()));
}

function nextId(lista) {
    return lista.reduce((max, a) => Math.max(max, a.id), 0) + 1;
}

function adaugaAntrenament(lista, titlu, dificultate = "mediu") {
    const titluCurat = titlu.trim();
    
    if (titluCurat === "") {
        console.log("Eroare validare: Titlul nu poate fi gol.");
        return lista;
    }
    
    if (!DIFICULTATI.includes(dificultate)) {
        console.log(`Eroare validare: Dificultate invalidă '${dificultate}'.`);
        return lista;
    }
    
    const antrenamentNou = {
        id: nextId(lista),
        titlu: titluCurat,
        finalizat: false,
        dificultate: dificultate
    };
    
    return [...lista, antrenamentNou];
}
function comutaFinalizat(lista, id) {
    return lista.map((a) => 
        a.id === id ? { ...a, finalizat: !a.finalizat } : a
    );
}

function stergeAntrenament(lista, id) {
    return lista.filter((a) => a.id !== id);
}
console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(antrenamente).join(", "));
console.log("Planificate:", numaraPlanificate(antrenamente));
console.log("Căutare 'run':", listeazaTitluri(cautaDupaTitlu(antrenamente, "run")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaAntrenament(antrenamente, "Antrenament piept", "intens");
console.log("Lista nouă:", listaNoua.length, "antrenamente");
console.log("Originalul a rămas cu:", antrenamente.length, "antrenamente");

console.log("--- Modificare și ștergere ---");
listaNoua = comutaFinalizat(listaNoua, 1);
console.log("După bifarea id 1, planificate:", numaraPlanificate(listaNoua));
listaNoua = stergeAntrenament(listaNoua, 3);
console.log("După ștergerea id 3:", listeazaTitluri(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaAntrenament(listaNoua, "   ", "usor");
adaugaAntrenament(listaNoua, "Ciclism", "extrem");