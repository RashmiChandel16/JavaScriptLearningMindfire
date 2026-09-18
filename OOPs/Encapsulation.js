//we use encapsulation for protecting/hiding the data.
//we use encapsulation to give access-control, means the person who have proper access, that can only control data using methods.
//this is used for "data security" and access-control purpose.
/*Encapsulation
      ↓
Data + methods together
      +
Controlled access

#private is one way JavaScript provides stronger encapsulation.


        ATM
 ┌─────────────────┐
 │  Bank Balance   │  ← Data
 │                 │
 │  withdraw()     │  ← Method
 │  deposit()      │  ← Method
 │  checkBalance() │  ← Method
 └─────────────────┘
          ↑
     controlled access

*/

class BankAccount{
    constructor(balance){
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
    withdraw(amount){
        this.balance-=amount;
    }
    checkBalance(){
        return this.balance;
    }
}
const myAccount = new BankAccount(500);
console.log(myAccount.balance);
myAccount.deposit(700);
console.log(myAccount.balance);
myAccount.withdraw(200);
console.log(myAccount.balance);
console.log(myAccount.checkBalance());
myAccount.balance = 50000;
console.log(myAccount.balance);  //here we can directly change the account balance from outside of the class so make it private so that it can be accessed through the methods only

/*
we have put:

this.balance

and its related methods:

deposit()
checkBalance()

inside the same class.

BankAccount
│
├── balance
├── deposit()
└── checkBalance()

this is first basic idea of encapsulation:

To bundle Related data and functions in a unit (class).

but here the problem is

that we can access from outside also

account.balance = 999999;

And:

console.log(account.balance);

this is allowed.

means balance is public.

If we want to prevent anyone from directly changing the balance from outside, we can use # in javascript
*/
class BankAccount{
    #balance;
    constructor(balance){
        this.#balance=balance;
    }
    deposit(amount){
        this.#balance+=amount;
    }
    withdraw(amount){
        this.#balance-=amount;
    }
    checkBalance(){
        return this.#balance;
    }
}
const myAccount = new BankAccount(500);
console.log(myAccount.checkBalance()); //500
myAccount.#balance = 999999;//this will give error bcz we can access #balance through class methods only
console.log(myAccount.#balance);  //this will also give error bcz we can access #balance through class methods only(SyntaxError: Private field '#balance' must be declared in an enclosing class)

/*So we can understand Encapsulation in two parts
Part 1 — Bundle together
class BankAccount {

    balance;

    deposit() {}

    withdraw() {}

}

Data + methods together.

Part 2 — Control access
#balance

Private data.

Outside world directly cannot access */

//eg2
class Student{
    #marks;
    constructor(marks){
        this.#marks=marks;
    }
    getMarks(){
        return this.#marks;
    }
    addMarks(marks){
        this.#marks+=marks;
    }
}
let student1 = new Student(50);
console.log(student1.getMarks());  //50
student1.addMarks(20);
console.log(student1.getMarks());  //70
/*student1.#marks = 100;
❌ Not allowed.
Because we want the class to control how marks are changed.
*/

