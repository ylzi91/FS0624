
class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    compareAge(us2 = {}) {
        if (this.age > us2.age) {
            console.log(this.firstName + ' è più vecchio di ' + us2.firstName);
        }
        else {
            console.log(us2.firstName + ' è più vecchio di ' + this.firstName);
        }
    }
}

const u1 = new User('Mario', 'Rossi', 44, 'Napoli');
const u2 = new User('Maria', 'Verdi', 50, 'Roma');

u1.compareAge(u2);


//Esercizio 2
class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = [_petName];
        this.ownerName = _ownerName;
        this.species = [_species];
        this.breed = [_breed];
    }
}
const pets = [];
const myUl = document.getElementsByClassName('list-group')[0];
let thiIs = false;
document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
    e.preventDefault();
    myUl.innerHTML = '';
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    if (pets.length === 0) {
        pets.push(new Pet(petName, ownerName, species, breed));
        thiIs = true;
    }
    else if (pets.length > 0) {

        for (i = 0; i < pets.length; i++) {
            if (ownerName === pets[i].ownerName) {
                pets[i].species.push(species);
                pets[i].breed.push(breed);
                pets[i].petName.push(petName);
                thiIs = true;
                i = pets.length;
            }
            else {
                thiIs = false;
            }

        }


    }


    if (thiIs === false) {
        pets.push(new Pet(petName, ownerName, species, breed));
    }

    console.log(pets);



  

    for (i = 0; i < pets.length; i++) {
        newLi = document.createElement('li');
        newLi.classList.add('list-group-item');
        newLi.innerText = `${pets[i].ownerName}`;
        newUl = document.createElement('ul');
        newLi2 = document.createElement('li');
        newLi2.innerText = `${pets[i].species} ${pets[i].petName} ${pets[i].breed}`;
        newUl.appendChild(newLi2);
        newLi.appendChild(newUl);
        myUl.appendChild(newLi);
    }
    console.log(pets.length);
})







