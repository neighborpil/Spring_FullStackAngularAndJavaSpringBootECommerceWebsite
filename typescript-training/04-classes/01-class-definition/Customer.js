"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}
// create instance
// let myCustomer = new Customer();
// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Diction";
let myCustomer = new Customer("margin", "Diction");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
