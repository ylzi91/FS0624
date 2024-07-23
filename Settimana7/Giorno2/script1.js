
const text1 = document.getElementById('text1');
const btn1 = document.getElementById('btn1');
const main = document.getElementsByTagName('main')[0];
const listName = document.getElementById('listName');

const arrayStor = JSON.parse(localStorage.getItem('myName'));
const arrayName = arrayStor ? arrayStor : [];
console.log(arrayName);
console.log(arrayStor);



const showArray = function (array = []) {
    
    listName.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        myDiv = document.createElement('div');
        myDiv.classList.add('mt-4', 'bg-info', 'p-4', 'text-center');
        mySpan = document.createElement('span');
        mySpan.innerText = array[i];
        delBtn = document.createElement('button');
        delBtn.classList.add('btn', 'btn-danger', 'ms-5');
        delBtn.setAttribute('onclick', `delItem(${i})`);
        delBtn.innerText = 'Elimina';
        myDiv.appendChild(mySpan);
        myDiv.appendChild(delBtn);
        listName.appendChild(myDiv);
    }

}


const createName = function () {
    if (text1) {
        arrayName.push(text1.value);
        localStorage.setItem('myName', JSON.stringify(arrayName));
        showArray(arrayName);
    }
}

const delItem = function (index){
    arrayName.splice(index, 1);
    localStorage.setItem('myName', JSON.stringify(arrayName));
    showArray(arrayName);
}

if (arrayStor)
    showArray(arrayStor);
btn1.addEventListener('click', createName);

