//A js object is an entity having state(properties)and behavior(methods)
//js object have a special property called prototype. (prototype is also an object which can have its built in propertie and methods)
//we can set prototype using __proto__
//if object and prototype have same method then object's methos will be used
const student = {
    name: "Rashmi",
    marks: 95,
    printMarks: function(){
        console.log("marks = ", this.marks); //here this.marks means student.marks //in js, when we use this inside a object then that refers to the object here without this it will give refernce error that marks is not defined
    }
    /*or printMarks(){
         console.log("marks = ", this.marks);
         }
    */
};
console.log(student); //{ name: 'Rashmi', marks: 95, printMarks: [Function: printMarks] }
console.log(student.name);
console.log(student.marks);
console.log(student.printMarks());

const newStudent = {
    name: "riya"
};
newStudent.__proto__ = student ; //here we have set Student as a prototpe to newStudent object so that newStudent can access properties and methoods of student oobject
console.log(newStudent.printMarks());  //marks =  95


console.log("**************************************************************************");



//Class is a template/blueprint for creating objects.
class MyClass{
    constructor(){}
    myMethod(){}
}
let myObj = new MyClass();


class Car{
    start(){
       console.log("start")
    }                            //note: here we don't need to seperate with , like we do in object
    stopt(){
        console.log("stopt");
    }
    setBrand(brand){
        this.brandName=brand; //right brand is argument and left brand is property for this object whichever we will create  //here this means for each individual object, means for whichever object this function will be called
        console.log(this.brandName);  
    }
}
let fortuner = new Car();  //this object will have Car class's object and properties, bcz we have created obj here through Cra class
fortuner.start();
fortuner.stopt();
fortuner.setBrand("Toyota");  //Toyota
console.log(fortuner.brandName);  //Toyota

let hondaCity = new Car();
hondaCity.start();
hondaCity.stopt();


console.log("*******************************************************************************");



//constructor(){} is a special method inside a clas
//constructor is a reserve keyword
//it is automatically invoked by new
//when we create obj using new keyword, new keywork search for constructor in the class if it is not found, then js automatically create constructor(){} method for that class
//its general work is to initialize the object means, whenever a new object is getting created, at that time of creation, if you want to get some work done(for eg want to set/initialize some properties, that time we use constructor)
//we can also create our custom constructor(){}method
//whenever a object is created(at the time of initialization), at first the constructor of the class is invoked
//we can also create our own custom constructor

class Sample{
    constructor(name){
        console.log("creating new obj");
        this.name=name;
        console.log(this.name);
    }
}
let obj = new Sample("rashmi");
console.log(obj);
/*output
creating new obj
rashmi
Sample { name: 'rashmi' }
*/