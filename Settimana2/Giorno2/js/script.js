/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function piuGrande() {
    let num1 = 10;
    let num2 = 20;
    if(num1 > num2){
        console.log('primo più grande');
    }
    else {
        console.log('secondo più grande');
    }
}
piuGrande();

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
function diversoCinque(){
    let num = 4;
    if(num !== 5){
        console.log('not equal');
    }

}

diversoCinque();
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function divisibile(){
    let num = 15;
    let divisore = 3;
    let risultato = num % divisore;
    if (risultato === 0){
        console.log('numero ' + num +' divisibile per ' + divisore);
    }
    else {
        console.log('numero '+ num +' non divisibile per ' + divisore); 
    }
}
divisibile();

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function otto(){
    let num1 = 12;
    let num2 = 8;
    let add = num1 + num2;
    let sott = num1 - num2;
    if ((num1 === 8 || num2 === 8) || (add === 8 || sott === 8)){
        console.log('Qualcosa è 8');

    }
    else{
        console.log('Qualcosa non è otto');
    }
}
otto();

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile
   "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita 
  (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function scontoPer(prezzo, percentuale){
    let risultato;
    percentuale /= 100;
    risultato = prezzo * percentuale;
    risultato = prezzo - risultato;
    console.log(risultato);
    return risultato;
}

function eCommerce(){
    let totalShoppingCart = 60;
    let percentualeSconto = 50;
    if(totalShoppingCart >= 50){
        totalShoppingCart = scontoPer(totalShoppingCart, percentualeSconto);
        console.log('Spedizione Gratuita, il totale è ' + totalShoppingCart);
    }
    else {
        totalShoppingCart += 10;
        totalShoppingCart = scontoPer(totalShoppingCart, percentualeSconto);
        console.log('Il totale è ' + totalShoppingCart);
    }

}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

eCommerce();

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function ordina(){
    num1 = 30;
    num2 = 40;
    num3 = 35;
    if((num1 > num2) && (num1 > num3 )){
          if (num2 > num3){
            console.log(num1 + ' ' + num2 + ' ' + num3);
        } else {
            console.log(num1 + ' ' + num3 + ' ' + num2);
        }

}
if((num2 > num1) && (num2 > num3 )){
    if (num1 > num3){
      console.log(num2 + ' ' + num1 + ' ' + num3);
  } else {
      console.log(num2 + ' ' + num3 + ' ' + num1);
  }

}
if((num3 > num1) && (num3 > num2 )){
    if (num1 > num2){
      console.log(num3 + ' ' + num1 + ' ' + num2);
  } else {
      console.log(num3 + ' ' + num2 + ' ' + num1);
  }

}
}
ordina();

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    function verificaTipo(){
        let coso = null;
        if(typeof coso === 'number'){
            console.log('la variabile è un numero' );

        }
        else{
            console.log('la variabile è qualcosa di altro');
        }
    }
    verificaTipo();
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function pariDispari(){
    let num = 31;
    if (num % 30 === 0){
        console.log('Pari');
    } else{
        console.log('Dispari');
    }
}
pariDispari();

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 10;
  if (val < 10 && val > 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else if (val >= 10){
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }

  me.city = 'Toronto';
  console.log(me.city);
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */

  delete me.lastName;
  console.log(me);
  
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  delete me.skills[2];
  console.log(me);

  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
const myArray = [];

for(let i=0; i < 10; i++){
    myArray[i]= i + 1;

}
console.log (myArray);

  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */

  
  /* SCRIVI QUI LA TUA RISPOSTA */
  myArray[9] = 100;
  console.log(myArray);
  