/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function esempio() {
    let numero = 20;
    let nome = 'Giorgio';
    let bool = true;
    let niente = null;
    let indefinito;
    console.log(numero + nome + bool + niente + indefinito);

}
esempio();

// nella righe sopra ho assegnato della variabili. Sono come delle scatole in cui possiamo mettere all'interno
//delle cose. Nelle prime tre in ogni scatola c'è qualcosa, ad esempio il numero 20, nella seconda una parola
// cioè Giorgio e così via. Nella quarta scatola non c'è nulla e nell'ultima è chiusa e non so ancora cosa ci sia.



/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function mioNome() {
    myName = 'Yuri';
    console.log(myName);
}
mioNome();



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function somma() {
    let risultato = 12 + 20;
    return risultato;
}
console.log(somma());


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function assegnazioneUno() {
    let x = 12;
    console.log(x);
}
assegnazioneUno();

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function riassegna() {
    myName = 'Lenzi';
    const nonRiassgnabile = 150;
    // nonRiassgnabile = 130; <--- non si può fare!
    console.log(myName + nonRiassgnabile);
}
riassegna();

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function sottrazione() {
    let x = 12;
    let sottrazione = x - 4;
    return sottrazione;
}
console.log(sottrazione());

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function ultimo() {
    let name1 = 'john', name2 = 'John';
    name1 = name1.toLowerCase(); // Togliendo queste due riga diventa falso!
    name2 = name2.toLowerCase();
    console.log(name1 + name2);

    const confronto = (name1 === name2) ? 'Questo è vero' : 'Questo è falso';
    return confronto;
}
console.log(ultimo());