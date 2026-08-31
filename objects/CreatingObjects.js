//21line
//name, age, course are key/properties and Rashmi, 25 JvaScript these are values
let student = {
    name: "Rashmi",
    age: 25,
    course: "JavaScript"
};
console.log(student);  //{ name: 'Rashmi', age: 25, course: 'JavaScript' }


//new Object() ka use krke:
let employee = new Object();
employee.name = "Rashmi";
employee.depart = "IT";
employee.age = 28;
console.log(employee);  //{ name: 'Rashmi', depart: 'IT', age: 28 }


//Note: difference?? -> 
// let student = {};   and    let student = new Object();   dono empty object create krte h    mostly {} use hota h
// let student = {};  me object ka prototype Object.prototype hota h


//Object.create() ka use krke:
//Object.create() creates a new object using another object as its prototype, so the new object can access properties and methods from that object
let member = Object.create(null); //Object.create(null) me prototype ni hota(Ek completely plain object bana jiska koi prototype connection ni ho)
member.name = "riya";
member.age = 27;
console.log(member);  //[Object: null prototype] { name: 'riya', age: 27 }

//Object.create() mtlb ek naya object banao, aur batao ki us object ko kis dusre object se properties/methods mil sakti hain
let person = {
    name: "rashmi",
    greet: function(){
        console.log("hello");
    }
}
let studentt = Object.create(person);  //ye prototype ke sath h //ab student ko person se properties/methods access karne ka connection mil gaya.
console.log(studentt.name); //Rashmi (yha studentt ka khud ka name ni h to vo person ka le lega)
studentt.greet();  //hello


//Constructor Function ka use krke--- doubt???
//purane js code me objects create karne ke liye constructor functions use hote the.
function Stuudent(name, age) {
    this.name = name;
    this.age = age;
}
let student1 = new Stuudent("Rashmi", 25);
let student2 = new Stuudent("Aman", 22);
console.log(student1);
console.log(student2);
//1. New empty object banata hai
//2. this ko us object se bind karta hai
//3. Constructor function execute karta hai
//4. Object return karta hai


//ES6 Class ka use krke:
//Modern JS me classes use kar sakte h
class Employee {         //Class khud object nahi h, hm bs class define kr rhe
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let employee1 = new Employee("Rashmi", 25);  //object isse create ho rha
let employee2 = new Employee("Aman", 22);
console.log(employee1);
console.log(employee2);


//Factory Function ka use krke:
//(Ek normal function jo object return kare)
function createStudent(name, age) {
    return {
        name: name,
        age: age
    };
}
let studeent1 = createStudent("Rashmi", 25);
let studeent2 = createStudent("Aman", 22);
console.log(studeent1);
console.log(studeent2);


//Object from Another Object using Object.create()
let personn = {
    greet() {
        console.log("Hello");
    }
};
let studennt = Object.create(personn);  //student ka prototype person h
studennt.name = "Rashmi";
console.log(studennt.name);
studennt.greet();


//Object from JSON
//(JSON.parse() string ko object me convert karta h jbki, JSON.stringify() object ko JSON string me convert krta h )
let jsonData = '{"name":"Rashmi","age":25}';
let sttudent = JSON.parse(jsonData);
console.log(sttudent);  //{ name: 'Rashmi', age: 25 }


//Object.assign() ka use krke:
//(Ye existing objects ki properties ko combine karke object create karta h)
let perrson = {
    name: "Rashmi"
};
let details = {
    age: 25
};
let staff = Object.assign({}, perrson, details);
console.log(staff);  //{ name: 'Rashmi', age: 25 }


//Spread Operator ka use krke:
//(very common in modern js)
let person1 = {
    name: "Rashmi"
};

let detailss = {
    age: 25
};

let studdent = {
    ...person1,
    ...detailss
};
console.log(studdent);  //{ name: 'Rashmi', age: 25 }


//Computed Property Names
//(Object banate waqt key ko variable se bhi create kar sakte h):->
let key = "name";
let sstudent = {
    [key]: "Rashmi"    //yha agar [] use ni kiya hota to: { key: 'Rashmi' }
};
console.log(sstudent);  //{ name: 'Rashmi' }
//Note: [key] krne pr, JS variable ki value ko key banata h.


//Object.fromEntries() KA USE KRKE:
//ye array ko key-value pairs means object me convert krte h
//Object.keys(): Object ki saari keys ko array mein deta h.
//Object.values(): Object ki saari values ko array mein deta h.
//Object.entries(): Object ki key + value dono ko array mein deta h.
let entries = [
    ["name", "Aman"],
    ["age", 26]
];
let worker = Object.fromEntries(entries);
console.log(worker);  //{ name: 'Aman', age: 26 }


//Object with new + Class:  doubt????
class Car {
    constructor(brand) {
        this.brand = brand;
    }
}
let car1 = new Car("Toyota");
console.log(car1);  //Car { brand: 'Toyota' }








