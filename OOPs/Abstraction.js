//Abstraction means hiding the internal/complex implementation & showing only what the user needs to use.
/*Think about an ATM.

You want to withdraw ₹5,000.

You only do:

Insert card → Enter PIN → Select Withdraw → Enter amount

You don't need to know what happens internally:

Bank server communication
→ Account verification
→ Balance checking
→ Transaction processing
→ Database update
→ Cash dispenser control

You only see the necessary interface.

That is abstraction*/

//Abstraction = Hide how something works and expose only what is needed to use it.

class Car {
    start() {
        console.log("Car started");
    }
}
let car = new Car();
car.start();
/*
You simply call:

car.start();

But imagine internally start() does many things:

start() {
    // check key
    // check battery
    // check fuel
    // start engine
    // etc.
    
    console.log("Car started");
}

The person using the class doesn't need to know all these details.

They just need:

car.start();

That's abstraction.

*/


//difference between Encapsulation and Abstraction:
/*Encapsulation

Focuses on:

How do I protect/control my data and implementation?

*/

//Example:

class BankAccount {

    #balance = 1000;

    deposit(amount) {
        this.#balance += amount;
    }
}

/*
#balance is hidden from outside.

Abstraction

Focuses on:

What should the user see/use, while hiding how it works internally?

Example:

account.deposit(500);

The user doesn't need to know how the balance is updated internally.

Easy memory trick:

Encapsulation → Protect/Control

Abstraction → Hide complexity
*/


//Real life example:
class Payment {
    pay(amount) {
        this.#validateAmount(amount);
        this.#connectToBank();
        this.#processPayment(amount);

        console.log("Payment successful");
    }
    #validateAmount(amount) {
        console.log("Validating amount...");
    }
    #connectToBank() {
        console.log("Connecting to bank...");
    }
    #processPayment(amount) {
        console.log("Processing ₹" + amount);
    }
}
//Now user only does:
let payment = new Payment();
payment.pay(500);
/*Output:
Validating amount...
Connecting to bank...
Processing ₹500
Payment successful

The important point is:

The user doesn't call:

payment.#validateAmount();
payment.#connectToBank();
payment.#processPayment();

Those are internal details.

The user only needs:

payment.pay(500);

This is abstraction.
*/



/*How does abstraction work in JavaScript?

JavaScript doesn't have a special abstract keyword like some other languages.

We commonly achieve abstraction using:

Classes
Methods
Private fields/methods (#)
Public methods that expose only the required functionality

*/

//For example:

class LoginPage {

    #enterUsername() {
        console.log("Entering username");
    }

    #enterPassword() {
        console.log("Entering password");
    }

    login() {
        this.#enterUsername();
        this.#enterPassword();
        console.log("Login successful");
    }
}

//Outside:

let loginPage = new LoginPage();

loginPage.login();

/*The test doesn't need to know:

How username is entered
How password is entered
Which locators are used
What happens internally

It just says:

loginPage.login();
*/



/*This is especially useful in Playwright

This is where abstraction becomes very useful for your automation framework.

Instead of writing this in every test:

await page.locator("#username").fill("Rashmi");
await page.locator("#password").fill("Test@123");
await page.locator("#login").click();

*/

//Create a Page Object:

class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        await this.page.locator("#username").fill(username);
        await this.page.locator("#password").fill(password);
        await this.page.locator("#login").click();
    }
}

//Then your test only needs:

const loginPage = new LoginPage(page);

await loginPage.login("Rashmi", "Test@123");

/*What did we hide?

The test doesn't need to know:

#username
#password
#login
fill()
click()

Those implementation details are inside LoginPage.

The test only knows:

loginPage.login();

That's abstraction in Page Object Model.

*/



/*Interview answer

Abstraction is an OOP concept where we hide the internal implementation details and expose only the necessary functionality to the user. In JavaScript, abstraction can be achieved using classes, methods, and private fields or methods.

In Playwright->

In Page Object Model, abstraction allows tests to call methods like login() without knowing the underlying locators and Playwright implementation.

*/