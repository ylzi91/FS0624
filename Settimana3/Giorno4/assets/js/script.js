const bigCartel = document.getElementById('bigCartel');
const extractNumber = document.getElementById('extractNumber');
const myLabel = document.querySelector('label');
const arrayExtractNumber = [];
const allNumber = [];
let number;

function createBigCartel() {
    bigCartel.innerHTML = '';
    for (let i = 0; i < 90; i++) {
        allNumber.push(i + 1);
        let newDivNumber = document.createElement('div');
        let newSpanNumber = document.createElement('span');
        newDivNumber.classList.add('cellStyle');
        newSpanNumber.innerText = i + 1;
        newDivNumber.appendChild(newSpanNumber);
        bigCartel.appendChild(newDivNumber);
    }


}

let myNumber = 0;
function randomExcract() {
    myNumber = Math.floor(Math.random() * 90) + 1;
    arrayExtractNumber.push(myNumber);
    for (i = 0; i < arrayExtractNumber.length - 1; i++)
        if (arrayExtractNumber[i] === myNumber) {
            myNumber = Math.floor(Math.random() * 90) + 1;
            arrayExtractNumber.pop();
            arrayExtractNumber.push(myNumber);
        }
 
}
function printExtract() {
    myLabel.innerText = '';

    myLabel.innerText += 'Numero estratto: ' + myNumber;
}

function signBigCartel() {
    const spanCartel = document.querySelectorAll('#bigCartel div span');
    const divCartel = document.querySelectorAll('#bigCartel div');
    for (let i = 0; i < 90; i++) {

        if (spanCartel[i].innerText == myNumber) {
            divCartel[i].classList.add('colorCell');
        }
    }

}

extractNumber.addEventListener('click', function (e) {
    e.preventDefault();
    randomExcract();
    printExtract();
    signBigCartel();

})


window.addEventListener('load', init());
function init() {
    createBigCartel();
}