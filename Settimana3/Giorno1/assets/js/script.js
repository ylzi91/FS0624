/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

console.log('+++++++++++Esercizio1+++++++++++++');

function concatStr(string1 = [], string2 = []) {
    string1 = string1.slice(0, 2);
    string2 = string2.slice(string2.length - 3, string2.length);
    let result = '';
    return result.concat(string1, string2);
}

console.log(concatStr('ciao', 'bello'));

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso 
  tra 0 e 100 (incluso).
*/
console.log('+++++++++++Esercizio2+++++++++++++');
function returRandom() {
    let arrayF = [];
    for (i = 0; i < 10; i++) {
        arrayF[i] = Math.floor(Math.random() * (100 + 1));
    }
    return arrayF;
}
console.log(returRandom());



/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

console.log('+++++++++++Esercizio3+++++++++++++');

function onlyPair(numArr = []) {
    const myArray = numArr.filter((element) => element % 2 === 0);
    return myArray;
}


let goodArray = [10, 3, 5, 4, 20, 33, 31, 21];
console.log(onlyPair(goodArray));

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log('+++++++++++Esercizio4+++++++++++++');

let sumArray = [10, 20, 30, 40];

console.log(`La sommma degli elementi dell'array è ${sumFuncion(sumArray)}`);
function sumFuncion(numArr = []) {
    let somma = 0;
    numArr.forEach((element) => {
        somma += element;
    });
    return somma;
}


/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

console.log('+++++++++++Esercizio5+++++++++++++');

console.log(`La sommma degli elementi dell'array è ${sumFuncion2(sumArray)}`);

function sumFuncion2(numArr = []) {
    return numArr.reduce((total, item) => total + item);
}



/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array 
  con tutti i valori del precedente incrementati di n
*/


console.log('+++++++++++Esercizio6+++++++++++++');

console.log(`Il risultato è ${sumNumbers(sumArray, 10)}`);

function sumNumbers(numArr = [], n = 0) {
    const sumArr = numArr.map((item) => {
        return item + n;
    });
    return sumArr;
}

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive
  stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

console.log('+++++++++++Esercizio7+++++++++++++');

const stringArray = ['ciao', 'come', 'va', 'la', 'vita', 'li'];

console.log('Array di stringhe: ' + stringArray + ' Array di numeri: ' + returnNumbers(stringArray));

function returnNumbers(strArr = []) {
    const arrInNum = strArr.map((item) => {
        return item.length;
    });
    return arrInNum;
}

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

console.log('+++++++++++Esercizio8+++++++++++++');

console.log(arrayDisp());

function arrayDisp() {
    const myNumArr = [];
    let index = 0;
    for (i = 1; i < 100; i++)
        if (i % 2 !== 0) {
            myNumArr[index] = i;
            index++;
        }
    return myNumArr;

}

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
    {
        Title: 'The Lord of the Rings: The Fellowship of the Ring',
        Year: '2001',
        imdbID: 'tt0120737',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings: The Return of the King',
        Year: '2003',
        imdbID: 'tt0167260',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings: The Two Towers',
        Year: '2002',
        imdbID: 'tt0167261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of War',
        Year: '2005',
        imdbID: 'tt0399295',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'Lords of Dogtown',
        Year: '2005',
        imdbID: 'tt0355702',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings',
        Year: '1978',
        imdbID: 'tt0077869',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1990',
        imdbID: 'tt0100054',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
        Title: 'The Lords of Salem',
        Year: '2012',
        imdbID: 'tt1731697',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
        Year: '1984',
        imdbID: 'tt0087365',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1963',
        imdbID: 'tt0057261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Infinity War',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Age of Ultron',
        Year: '2015',
        imdbID: 'tt2395427',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Endgame',
        Year: '2019',
        imdbID: 'tt4154796',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

console.log('+++++++++++Esercizio9+++++++++++++');
function oldFilm() {
    let yearOldFilm = '3000';
    let oldFilm = '';
    movies.forEach((item) => {
        if (item.Year < yearOldFilm) {
            oldFilm = item.Title;
            yearOldFilm = item.Year;
        }
    });
    return oldFilm;
}

console.log(oldFilm());

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log('+++++++++++Esercizio10+++++++++++++');


function allFilm() {
    return movies.length;
}

console.log('Film Totali: ' + allFilm());

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

console.log('+++++++++++Esercizio11+++++++++++++');

let titleArray = ['Lord of the Flies', 'Avengers: Endgame', 'Zio Peppino', 'Tre uomini e una gamba'];
console.log(filterFilm(titleArray));

function filterFilm(myArr = []) {
    console.log(myArr);
    let filteredArray = [];
    for (let i = 0; i < myArr.length; i++) {
        filteredArray = movies.map((item, index) => {
                if (item.Title === myArr[i]) {
                
                console.log('ENTRA IF');
                return item;
            }

        });
    }
    return filteredArray;
}

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

console.log('+++++++++++Esercizio12+++++++++++++');

function filterMill() {
    const arrayFilter = movies.filter((item) => {
        return item.Year > '2000';
    });
    console.log(arrayFilter);
    /*movies.forEach((item) => {
        arrayFilter.forEach((item2) => {
            if (item2 === item.Year)
                console.log(item.Title);
        })
    });*/
}
filterMill();

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

console.log('+++++++++++Esercizio13+++++++++++++');

function addYear() {
    const myYear = movies.map((item) => {
        return parseInt(item.Year);

    });
    const totYear = myYear.reduce((total, item) => total + item);
    console.log(totYear);
}

addYear();
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
