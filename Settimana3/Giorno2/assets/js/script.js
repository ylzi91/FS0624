/* ESERCIZIO 1
      Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
   */
const title = document.getElementsByTagName('h1')[0];
console.log(title);
const changeTitle = function () {
    title.innerText = 'Titolo nuovo';
}

changeTitle();

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
    title.className = 'myHeading';
}

addClassToTitle();

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/
figlioDiv = document.querySelectorAll('div p');
console.log(figlioDiv);

const changePcontent = function () {
    figlioDiv.forEach(element => {
        element.innerHTML = 'Bellissimo tutto!!';
    });
}

changePcontent();

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il
valore https://www.google.com
*/
const aAccaTre = document.querySelectorAll('a:not(footer a)');

const changeUrls = function () {
    aAccaTre.href = 'https://www.google.com';
    aAccaTre.innerText = 'Vai a Google';
}
changeUrls();
/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const aggiungiLi = document.getElementById('secondList');
console.log(aggiungiLi);
const addToTheSecond = function () {
    aggiungiLi.innerHTML += '<li>Ciao</li>';
}
addToTheSecond();

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const insFirstDiv = document.getElementsByTagName('div')[0];

const addParagraph = function () {
    insFirstDiv.innerHTML += '<p>Sono un paragrafo aggiunto</p>';
}
addParagraph();

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const firsList = document.getElementById('firstList');

const hideFirstUl = function () {
    firsList.style.visibility = 'hidden';
}
// hideFirstUl();

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const greenUl = document.querySelectorAll('ul');

const paintItGreen = function () {
    greenUl.forEach((element) => {
        element.style.backgroundColor = 'green';
    })
}
paintItGreen();

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const title2 = document.querySelector('h1');
console.log(title2);

const makeItClickable = function () {
    title2.addEventListener('click', function () {
        let myString = title2.textContent;
        let strinInChar = myString.split('');
        strinInChar.pop(strinInChar.length);
        strinInChar = strinInChar.toString();
        strinInChar = strinInChar.replaceAll(',', '');
        console.log(strinInChar);

        title2.innerText = strinInChar;
    })
}

makeItClickable();

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const myFooter = document.querySelector('footer');
const myA = document.querySelector('footer a');

const revealFooterLink = function () {
    myFooter.addEventListener('click', function () {
        window.alert(myA.href);
    })
}

revealFooterLink();

/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

let store = [{
    nome: 'telefono',
    quantita: 10,
    prezzo: 200,
    immagine: 'immagine1'
},

{
    nome: 'telecomado',
    quantita: 5,
    prezzo: 20,
    immagine: 'immagine2'

},
{
    nome: 'tv',
    quantita: 15,
    prezzo: 400,
    immagine: 'immagine3'

},
];

const myThead = ['Nome','Quanita','Prezzo', 'Immagine'];

const myTable = document.getElementById('tableArea');


const generateTable = function () { 

    myTable.innerHTML = '<table><thead><tr></tr></thead><tbody></tbody></table>';
    const poinTr = myTable.querySelector('tr');
    const pointTbody = myTable.querySelector('tbody');
    console.log(poinTr);
    myThead.forEach((element) => {
        poinTr.innerHTML += `<th>${element}</th>`;
    });

    store.forEach((element) => {
        const tdName = document.createElement('td');
        tdName.innerText = element.nome;
        const tdQuantity = document.createElement('td');
        tdQuantity.innerText = element.quantita;
        const tdPrice = document.createElement('td');
        tdPrice.innerText = element.prezzo;
        const tdImagine = document.createElement('td');
        tdImagine.innerText = element.immagine;
        const myTr = document.createElement ('tr');
        myTr.appendChild(tdName);
        myTr.appendChild(tdQuantity);
        myTr.appendChild(tdPrice);
        myTr.appendChild(tdImagine);
        pointTbody.appendChild(myTr);
    });
   /* const trUser = document.createElement ('tr');
    const tHeadUser = document.createElement ('thead');
    const tableUser = document.createElement ('table');
    trUser.appendChild(thName);
    tHeadUser.appendChild(trUser);
    tableUser.appendChild(tHeadUser);
    myTable.appendChild(tableUser); */
}
generateTable();

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function (object = [{}]) {
 }

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () { }

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () { }
