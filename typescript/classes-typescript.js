"use strict";
class Customer {
    constructor(theFrist, theLast) {
        this._name = theFrist;
        this._lastName = theLast;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let newCustomer = new Customer("Nikola", "Puskarevic");
newCustomer.lastName = "NewLastName";
console.log(newCustomer.name + newCustomer.lastName);
