//Same method name, but different behavior depending on the object.
class Animal{
    sound(){
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal{
    sound(){
        console.log("Dog barks");
    }
}
class Cat extends Animal{
    sound(){
        console.log("Cat meows");
    }
}
let dog = new Dog();
let cat = new Cat();
dog.sound();
cat.sound();
//here Both objects use the same method name but they behave differently. This is polymorphism.

/*Note: this is called "Method Overriding"--> bcz Dog overrides sound method from Animal.
When a child class provides its own version of a method that already exists in the parent class, it is called method overriding.*/

/*
Why is this useful?

Imagine your application supports:

Credit Card
UPI
Net Banking
PayPal

Instead of remembering different method names:

card.makeCardPayment();
upi.makeUPIPayment();
netBanking.makeBankPayment();

we can have the same method:

pay()

Then:

card.pay();
upi.pay();
netBanking.pay();

Each object knows how it should perform pay().

This makes code easier to maintain and extend.

*/
//Eg:
class Payment{
    pay(){
        console.log("make payement");
    }
}
class CardPayment extends Payment{
    pay(){
        console.log("make card payment");
    }
}
class UpiPayment extends Payment{
    pay(){
        console.log("make upi payement");
    }
}
let card = new CardPayment();
let upi = new UpiPayment();
card.pay();
upi.pay();
/*Here:
extends → Inheritance
sound() in child → Method overriding
Same sound() behaving differently → Polymorphism
*/


/*Interview Answer:
Polymorphism means one interface or method can have different behaviors depending on the object using it. 
In JavaScript, it is commonly achieved through method overriding in inheritance.
Encapsulation → Protect data
Abstraction   → Hide complexity
Inheritance   → Reuse/extend code
Polymorphism  → Same method, different behavior*/