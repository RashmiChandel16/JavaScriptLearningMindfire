/*Public, Private, and Protected properties/methods in JavaScript:
The main idea is "access control" — who is allowed to access something inside a class.
Property = data
Methods  = actions
Both properties and methods can have different levels of access.*/

//1. public:
//means it can be accessed from outside the class.
//In JavaScript, normal properties and methods are public by default.
class User{
    name = "Rashmi";
    greet() {
        console.log("Hello "+ this.name);
    }
}
let user1 = new User();
console.log(user1.name); //here name is public property that's why we can access it directly from outside of class.
user1.greet();  //here greet() is public method, that's why ........................................


//2. Private:
//means It can only be accessed inside the class.
//(i)Private property:
class User{
    #password = 12345;
    checkPassword(){
        console.log(this.#password);
    }
}
let user1 = new User();
console.log(user1.checkPassword());  //this will work 
console.log(user1.#password);   //but this will not work & gives error(SyntaxError: Private field '#password' must be declared in an enclosing class), bcz property is private here

/*Why do we need private?

Suppose we have a bank account:

class BankAccount {

    #balance = 1000;

    getBalance() {
        return this.#balance;
    }
}

We don't want someone outside to directly change:

account.#balance = 999999;

❌ Not allowed.

Instead, we provide controlled methods:

account.getBalance();

This is one reason private members are useful for encapsulation.

*/

//(ii)Private method:
class User{
    #validPassword(){
        console.log("password validated");
    }
    login(){
        this.#validPassword();
        console.log("login successfull");
    }

}
let user1 = new User();
//user1.#validPassword(); //this is not allowed bcz validPassword method is private
user1.login();


//Protected:
//Note: JavaScript doesn't support this as a class access modifier.(just _ naming convetion we use)
class User {
    _name = "Rashmi";
    _login() {
        console.log("Login");
    }
}
let user = new User();
console.log(user._name); //this will work
user.login(); //this will also work
//_ means:This is intended for internal/subclass use. Please don't access it directly outside the class. 
// But JavaScript does not actually prevent outside access.


/*For your Playwright framework

This becomes useful in Page Object Model.

For example:

class LoginPage {

    constructor(page) {
        this.page = page;
    }

    #passwordLocator = "#password";

    async login(username, password) {
        await this.page.locator("#username").fill(username);
        await this.page.locator(this.#passwordLocator).fill(password);
        await this.page.locator("#login").click();
    }
}

let loginPage = new LoginPage();

The test only needs:

await loginPage.login("Rashmi", "Test@123");

It doesn't need to directly access:

#passwordLocator

because it is private.
*/


/*Public members can be accessed from anywhere. 
Private members in JavaScript are created using # and can only be accessed inside the class. 
JavaScript does not have a native protected access modifier; _ is commonly used as a convention to indicate that a member is intended for internal or subclass use.*/