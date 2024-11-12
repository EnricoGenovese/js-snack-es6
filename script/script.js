"use strict",

    console.clear();

// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// Array di oggetti biciclette; i parametri degli oggetti sono nome e peso.

const bicycles = [
    {
        name: 'Mountain Bike',
        weight: 15,
    },
    {
        name: 'Road Bike',
        weight: 9,
    },
    {
        name: 'Hybrid Bike',
        weight: 12,
    },
    {
        name: 'Cruiser Bike', 
        weight: 18,

    },
    {
        name: 'BMX Bike',
        weight: 10,
    },
    {
        name: 'Electric Bike',
        weight: 23,
    },
    {
        name: 'Folding Bike', 
        weight: 11,

    },
    {
        name: 'Racing Bike',
        weight: 7,
    },
    {
        name: 'Touring Bike',
        weight: 15,
    },
    {
        name: 'Fat Bike',
        weight: 16,
    }
];

// Ciclo per determinare la bici più leggera confrontando i parametri peso di ogni oggetto "bicicletta"
// con il parametro peso tutti di gli altri oggetti.

// 1 - Dicharare una varaibile per immagazzinare l'oggetto con il parametro peso più basso; iniziando 
//     dalla prima (indice[0] dell'array biciclette).

let lighterOne = bicycles[0];
// console.log(lighterOne);

// 2 - In un ciclo for, iterare tutti gli oggetti bicicletta dell'array per indice, e con una condizione
//     di if confrontare il peso dell'oggetto iterato con quello presente nella varaibile del più leggero. 

for(let i = 0; i < bicycles.length; i++) {
    if(bicycles[i].weight < lighterOne.weight) {
        lighterOne = bicycles[i];
    }
    
}
console.log(lighterOne);

// 3- Stampare in pagina il nome e il peso della bici più leggera

const exOne = document.getElementById("snack1");
let lighterBike = `La bici con il peso minore è: ${lighterOne.name}, con un peso di ${lighterOne.weight} kg`

exOne.innerHTML = lighterBike;


// Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
// e stampiamo tutto in console.






// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.