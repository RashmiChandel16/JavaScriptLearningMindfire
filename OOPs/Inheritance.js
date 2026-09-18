//Inheritance means one class can reuse the properties and methods of another class.
//The main reason to use Inheritance is "code reuse"
//it connects with polymorphism, constructors, and super

//1. Single Inheritance: One parent → one child
class Animal{
    eat(){
        console.log("eating");
    }
    sleep(){
        console.log("sleeping");
    }
}
class Dog extends Animal{
    bark(){
        console.log("barking");
    }
}
let dog = new Dog();
dog.eat();
dog.sleep();
dog.bark();
//We didn't have to rewrite eat() and sleep() inside Dog. That's the main benefit.


//2. Multilevel Inheritance: Grandparent → Parent → Child (Child can user properties & methods of parent and grand parent both)
class Animal{
    eat(){
        console.log("eating");
    }
}
class Mammal extends Animal{
    walk(){
        console.log("walking");
    }
}
class Dog extends Mammal{
    bark(){
        console.log("barking");
    }
}
let dog = new Dog();
dog.eat();
dog.walk();
dog.bark();


//3. Hierarchical Inheritance: One parent → multiple children
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}
class Cat extends Animal {
    meow() {
        console.log("Cat is meowing");
    }
}
let dog = new Dog();
let cat = new Cat();
dog.eat();
dog.bark();
cat.eat();
cat.meow();


//4. Multiple Inheritance: One child → multiple parents
//Note: JavaScript doesn't support this, but this functionality can be achieved using mixins(a way to add functionality from one object into another object, without using class inheritance.)
const Camera = {
    takePhoto() {
        console.log("Taking photo");
    }
};
const Phone = {
    makeCall() {
        console.log("Making call");
    }
};
const Smartphone = {
    ...Camera,
    ...Phone
};
Smartphone.takePhoto();
Smartphone.makeCall();

/*class BasePage {
    // common methods
}

class LoginPage extends BasePage {
    // login-specific methods
}

This is commonly used to share common Page Object functionality.*/

//super: is used inside a child class to access the parent class.
//Note: it is used inside a child class(either inside child constructor(super()) or child method(super.method()))

//1. if we are wrting constructor inside child class then inside that constructor super() must be mention otherwise it will give error
class Employee {
    constructor(){
        console.log("hi");
    }
    work() {
        console.log("Working");
    }
}
class Manager extends Employee {
}
const manager = new Manager();
manager.work();
//the above code will work bcz we have written constructor in parent class, but the below code will give error if we don't write super() inside child constructor
class Employee {
    work() {
        console.log("Working");
    }
}
class Manager extends Employee {
    constructor(){
        super();
        console.log("hi");
    }
}
const manager = new Manager();
manager.work();

//Note:constructor doesn't work as inheriting normal methods
class Employee {
    constructor() {
        console.log("Employee constructor");
    }
}
class Manager extends Employee {
    constructor() {
        super();    //this is necessray(Because when a child class has its own constructor, it must call the parent constructor using:super();)
        console.log("Manager constructor");
    }
}
const manager = new Manager();


//1.(i) super() with parameters:
class Employee {
    constructor(name) {
        this.name = name;
    }
}
class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
}
const manager = new Manager("Rashmi", "QA");
console.log(manager.name);  //Rashmi
console.log(manager.department);   //QA


//2. super.method() — calling parent method
//usecase: suppose we want both parent and child behavior
class Employee {
    work() {
        console.log("Employee is working");
    }
}
class Manager extends Employee {
    work() {
        super.work();
        console.log("Manager is managing");
    }
}
const manager = new Manager();
manager.work();

//Eg: this.method() vs super.method()
class Employee {
    work() {
        console.log("Employee working");
    }
}
class Manager extends Employee {
    work() {
        console.log("Manager working");
    }
    test() {
        this.work();
        super.work();
    }
}
const manager = new Manager();
manager.test();

