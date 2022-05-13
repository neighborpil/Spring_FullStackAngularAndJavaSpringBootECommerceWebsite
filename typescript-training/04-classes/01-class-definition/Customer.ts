class Customer {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
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