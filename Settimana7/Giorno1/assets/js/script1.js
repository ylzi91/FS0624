
class User {
    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    compareAge(us2 = {}){
        if( this.age > us2.age){
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