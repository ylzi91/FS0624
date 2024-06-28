
const insertTask = document.getElementById('insertTask');
const addTask = document.getElementById('addTask');
const addedTasks = document.getElementById('addedTasks');
const arrayTask = [];
window.addEventListener('load', init());
function init() {
}

addTask.addEventListener('click', function (e) {
    e.preventDefault();
    if (checkInput() === false) {
        return;
    } else {
        insertArray();
        writeTask();
    }

});


function checkInput() {
    if (insertTask.value === '') {
        return false;
    } else return true;
}

function insertArray() {
    arrayTask.push(insertTask.value);
}


function writeTask() {
    addedTasks.innerHTML = '';
    for (i = 0; i < arrayTask.length; i++) {
        let newP = document.createElement('p');
        newP.setAttribute('onclick', `barP(p${i})`);
        newP.setAttribute('id', `p${i}`);
        newP.innerText = arrayTask[i];
        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.setAttribute('class', 'mybutton');
        deleteBtn.setAttribute('onclick', `deleteTask(${i})`);
        deleteBtn.innerText = 'Elimina';

        addedTasks.appendChild(newP);
        addedTasks.appendChild(deleteBtn);
    }
}

function barP(index) {

    if (index.style.textDecoration === 'line-through') {
        index.style.textDecoration = 'none';

    } else {
        index.style.textDecoration = 'line-through';

    }


}


function deleteTask(index) {
    arrayTask.splice(index, 1);
    writeTask();
}

