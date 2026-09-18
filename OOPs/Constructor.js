//A constructor is a special method inside a class that *runs automatically* when we create an object.
//A class can have only one constructor.


//1. default constructor: 
//If you don't write a constructor at all, JavaScript provides a default constructor automatically (effectively a no-argument constructor).
class User {
}
let user = new User();


//2. constructor without parameter:
class User {
    constructor() {
        this.name="ram";
        console.log("Constructor called");
    }
}
let user = new User();   //Constructor called
console.log(user.name);  //ram


//3. constructor with single parameter:
class User{
    constructor(name){
        this.name=name;
    }
}
let user1 = new User("rashmi");
let user2 = new User("riya");
console.log(user1.name);  //rashmi
console.log(user2.name);  //riya


//4. constructor with multiple parameters:
class User{
    constructor(name, age){
        this.name=name;                    /*Constructor → Initialize
                                             Method      → Perform action*/
        this.age=age;
    }
    greet(){
        console.log("Hello " + this.name);
    }
}
let user = new User("Rashmi", 28);
console.log(user.age);  //28
user.greet();  //Hello Rashmi



//Playwright example: will see it later:
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
const loginPage = new LoginPage(page);

/*What happens?

new LoginPage(page)
        ↓
constructor(page)
        ↓
this.page = page

So the Playwright page object gets stored inside the LoginPage object.

Then later:

this.page.locator(...)

works because the constructor stored the page.*/

