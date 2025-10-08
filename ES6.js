
const diakok = [
    { nev: "Anna", jegyek: [5, 4, 5, 3], kor: 17, osztaly: "12.A" },
    { nev: "Bence", jegyek: [2, 3, 3, 2], kor: 18, osztaly: "12.B" },
    { nev: "Csilla", jegyek: [4, 4, 5, 5], kor: 17, osztaly: "12.A" },
    { nev: "Dávid", jegyek: [3, 2, 4, 3], kor: 18, osztaly: "12.B" },
    { nev: "Emese", jegyek: [5, 5, 5, 4], kor: 17, osztaly: "12.A" }
];

const atlagok = diakok.map(diak => {
    const atlag = diak.jegyek.reduce((osszeg, jegy) => osszeg + jegy, 0) / diak.jegyek.length;
    return { nev: diak.nev, atlag: atlag };
});
console.log("Diákok átlagai:", atlagok);

const legjobbDiakok = atlagok.filter(diak => diak.atlag >= 4.5);
console.log("Legjobb diákok (átlag >= 4.5):", legjobbDiakok);

const bence = diakok.find(diak => diak.nev === "Bence");
console.log("Bence jegyei:", bence.jegyek.join(", "));

const vanMinden5os = diakok.some(diak => diak.jegyek.every(jegy => jegy === 5));
console.log("Van-e olyan diák, akinek minden jegye 5-ös?", vanMinden5os ? "Igen" : "Nincs");

const vanBukott = diakok.some(diak => diak.jegyek.includes(2));
console.log("Van-e olyan diák, akinek legalább egy bukásra áll (2-es jegy)?", vanBukott ? "Igen" : "Nincs");

const [elsoDiak] = diakok;
const { nev: elsoNev, kor: elsoKor, jegyek: elsoJegyek } = elsoDiak;
console.log(`Első diák adatai - Név: ${elsoNev}, Kor: ${elsoKor}, Jegyek: ${elsoJegyek.join(", ")}`);




















































/*Alapstruktúra létrehozása
Hozzon létre egy tömböt diakok neven, és tárolja benne a tanulók adatait
objektumként! A jegyek külön tömböt alkossanak az objektumben!
nev: Anna, jegyek: 5, 4, 5, 3, kor: 17, osztaly: 12.A
nev: Bence, jegyek: 2, 3, 3, 2, kor: 18, osztaly: 12.B
nev: Csilla, jegyek: 4, 4, 5, 5, kor: 17, osztaly: 12.A
nev: Dávid, jegyek: 3, 2, 4, 3, kor: 18, osztaly: 12.B
nev: Emese, jegyek: 5, 5, 5, 4, kor: 17, osztaly: 12.A

Átlagok kiszámítása
Készítsen egy új tömböt, amely minden tanuló nevét és átlagát tartalmazza az
alábbi formában:

{ nev: "Anna", atlag: 4.25 }
Használja a megfelelő E6 metódusokat!
Csak a legjobb tanulók
Szűrje ki azokat a tanulókat, akiknek az átlaguk legalább 4,5!
Az eredmény legyen új tömb, amely az előző lépés átlagait használja.
Keresés
Keresse meg a "Bence" nevű diákot, és írasd ki a jegyeit!
Ellenőrzés
• Van-e olyan tanuló, akinek mindegyik jegye 5-ös?
• Van-e olyan, aki legalább egy bukásra áll (2-es jegy)?
Destrukturálás
Válassza szét az első tanuló adatait külön változókba: nev, kor, jegyek.
Új tanuló hozzáadása
Adj hozzá egy új tanulót (pl. Fanni), de ne módosítsd az eredeti tömböt!
Készíts új tömböt a megfelelő E6 operátor használatával.

Jegyek frissítése
Készítsen új listát, ahol minden diák jegyeit +1-gyel növeli meg (de 5 fölé ne
menjen!).
Átlag szerinti rendezés
Rendezd a tanulókat átlag szerint csökkenő sorrendbe!
Osztályonkénti csoportosítás
Készítsen egy objektumot, amely kulcsként az osztályokat tartalmazza ("12.A",
"12.B"), és értékként az oda járó tanulók tömbjét.
Használja a reduce-ot objektum építésére.
Bónusz feladat – kombinált destrukturálás
Írjon egy függvényt atlagKiir(diak) néven, amely destrukturálja a nev és
jegyek mezőket, majd kiszámolja és kiírja a tanuló átlagát.*/