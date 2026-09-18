/*static means:
This property or method belongs directly to the class, not to objects created from the class.*/
class User{
    static company = "mindfire" ;
    static salary = 50000;
    static calculateSalary(){
        console.log("Emplyee's salary = ", this.salary);
    }
}
console.log(User.company);  //we didn't create an object. we are accessing static prperty directly through class
console.log(User.calculateSalary());

/*Note: we cannot call static property/method using object, we cannot access normal property/method using class
Normal  → object.method()
Static  → Class.method()*/

//Eg:
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);
    }
    static info() {
        console.log("This is User class");
    }
}
let user = new User("Rashmi");
user.greet();
User.info();


/*Use static when something belongs to the class as a whole, not to a particular object.
It is useful for shared data and utility methods that don't require object-specific data.*/