class LoginPage {
    username = "Rashmi";
    login() {
        console.log("Login successful");
    }
}
let loginPage = new LoginPage();
console.log(loginPage.username); //Rashmi
loginPage.login();  //Login successful


class LoginPage{
    constructor(){
        console.log("constructer called");
    }
    username = "Rashmi";
    login(){
        console.log("login successfull");
    }

}
let loginPage = new LoginPage();  //constructor is automatically called when an object is created.
/*output 
constructer called
*/


//Constructor with Data --> This is where "this" concept comes in.
class LoginPage{
    constructor(username){
        this.username=username;   
/*means:object's username = received username , so the object becomes approximately:
{
    username: "Rashmi"
}
*/
    }
}
let loginPage = new LoginPage("Rashmi");
console.log(loginPage.username);  //Rashmi


//Multiple Objects:
class User{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log("Hello " + this.name);
    }
}
let user1 = new User("Rashmi");
let user2 = new User("Riya");
user1.greet(); //Hello Rashmi
user2.greet(); //Hello Riya


//Playwright-style class:
class LoginPage{
    constructor(page){
        this.page=page;
    }
    async login(username, password){
        console.log("Login with:", username, password);
    }
}
const loginPage = new LoginPage("My Page");
await loginPage.login("rs1", "ww");



//page: Playwright Page object that Playwright provides to your test.
//await means:"Wait for this Playwright operation to complete before moving to the next line."
/*Playwright actions like:
await this.page.locator("#username").fill(username);
are asynchronous operations. Playwright needs to perform the browser action, so the operation returns a Promise.
Fill username
     ↓
wait until completed
     ↓
Fill password
     ↓
wait until completed
     ↓
Click Login
     ↓
wait until completed
Without await:

this.page.locator("#username").fill(username);
this.page.locator("#password").fill(password);
this.page.locator("#login").click();

you are not explicitly waiting for each Promise to settle before moving on.

constructor(page) {
    this.page = page;
}

does not need async/await.

Why?

Because:

this.page = page;

is just assigning a value. There is no asynchronous operation.

But this:

async login(username, password) {
    await this.page.locator("#username").fill(username);
}

needs async/await because Playwright's action is asynchronous.

Class              → organizes code
Constructor        → receives/stores page
async              → allows await inside method
await              → waits for async Playwright operation

await              → waits for async Playwright operation

So async/await and OOP are separate concepts, but they are commonly used together in a Playwright Page Object.*/
