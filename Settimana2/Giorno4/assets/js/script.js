/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('++++++++Esercizio1++++++++++');

function area(l1, l2) {
    return l1 * l2;
}

console.log(area(5, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('++++++++Esercizio2++++++++++');

function crazySum(intero1 = 0, intero2 = 0) {
    if (intero1 !== intero2) {
        return intero1 + intero2

    } else
        return (intero1 + intero2) * 3;

}
console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('++++++++Esercizio3++++++++++');

function crazyDiff(num = 0) {
    console.log(Math.abs(num - 19));
    if (num > 19)
        return Math.abs(num - 19) * 3;
    return;

}
console.log(crazyDiff(1));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è 
 compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('++++++++Esercizio4++++++++++');

function boundary(n = 0) {
    if (n === 400 || n > 20 && n <= 100)

        return true;

    else
        return false;
}

console.log(boundary(30));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia
  già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('++++++++Esercizio5++++++++++');


function epify(myString = '') {
    if (myString.indexOf('Epicode') === -1)
        return myString.replace('', 'Epicode ');
    else
        return myString;
}

console.log(epify('Epicode è un bellissimo corso'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare
che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */


console.log('++++++++Esercizio6++++++++++');

function check3and7(numPos) {
    if (numPos > 0) {
        if (numPos % 3 === 0 && numPos % 7 === 0)
            return 'Multiplo sia di 3 che di 7'
        if (numPos % 7 === 0)
            return 'Solo Multiplo di 7';
        else if (numPos % 3 === 0)
            return 'Solo Multiplo di 3';
        else
            return 'Ne multiplo di 3 ne di 7';
    }
    else
        return 'Serve numero positivo grazie';

}

console.log(check3and7(-5));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come
  parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('++++++++Esercizio7++++++++++');

function reverseString(myString = '') {
    let arrayString = [];
    let arrayStringCopy = myString.split('');
    let cont = 0;
    for (i = myString.length; i >= 0; i--) {

        arrayString[cont] = arrayStringCopy[i];
        // console.log(arrayString[cont]);
        // console.log(i);
        cont++;
    }
    arrayString = arrayString.toString();
    arrayString = arrayString.replaceAll(',', '');
    return arrayString;

}
console.log(reverseString('EPICODE'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('++++++++Esercizio8++++++++++');

function upperFirst(myString = '') {
    //stringInside = myString.split('');
    let stringInside = '';
    stringInside = myString.split('');
    stringInside[0] = stringInside[0].replace(stringInside[0], stringInside[0].toUpperCase());
    console.log(stringInside);
    for (let i = 1; i < myString.length; i++) {
        if (stringInside[i] === ' ') {
            stringInside[i + 1] = stringInside[i + 1].replace(stringInside[i + 1], stringInside[i + 1].toUpperCase());
        }
    }
    stringInside = stringInside.toString();
    stringInside = stringInside.replaceAll(',', '');
    return stringInside;
}
console.log(upperFirst('oggi è proprio una bella giornata'));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova
stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('++++++++Esercizio9++++++++++');

function cutString(myString = '') {
    let newString = '';
    newString = myString.substring(1, myString.length - 1);
    return newString;

}
console.log(cutString('Ciao a tutti'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente
n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('++++++++Esercizio10++++++++++');

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function giveMeRandom(n) {
    const myArray = [];
    for (i = 0; i < n; i++) {
        myArray.push(getRandomInt(10));
    }
    return myArray;
}

console.log(giveMeRandom(50));



// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom")
  e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('++++++++EXTRA1++++++++++');

function checkArray(myArray) {
    let somma = 0
    for (i = 0; i < myArray.length; i++) {
        if (myArray[i] > 5)
            console.log(myArray[i]);
        somma += myArray[i];
    }
    return somma;
}
arrayRandom = giveMeRandom(50);
console.log(checkArray(giveMeRandom(50)))
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
