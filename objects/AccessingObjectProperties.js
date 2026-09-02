//1. Dot Notation:
let student = {
    name: "Rashmi",
    "first name": "miss",
    age: 28
};
console.log(student.name);
console.log(student.age);


//2. Bracket Notation []
//Agar key me space/special char ho to . notation kam ni krega(line4)
console.log(student["name"]);
console.log(student["age"]);
console.log(student["first name"]);

//Note: bracket notation kab useful hai? Jab key variable mein stored ho.
//Dynamic Property Access.
let key = "name";
let employee = {
    [key]: "Rashmi",
    age: 28
};
console.log(employee.key); //undefined
console.log(employee.age); //28
console.log(employee[key]); //Rashmi   console.log(employee[key])--> JS variable key ki value search krega, console.log(employee.key)-->ye key nnam ki property search krega

//Property Name as Number:
let obj = {
    1: "one",
    2: "two"
};
console.log(obj[1]); //one //or console.log(obj["1"]); b likh skte h


//3. Accessing Nested Object:
let employee1 = {
    name: "Rashmi",
    address: {
        city: "Kanpur",
        state: "UP"
    }
};
console.log(employee1.address.state); //UP
//or console.log(employee1["address"]["state"]);  
//or console.log(student.address["city"]);
//or console.log(student["address"].city);


//4. Accessing Array inside Object:
let student1 = {
    name: "Rashmi",
    subjects: ["js", "css", "html"]
};
console.log(student1.subjects[0]); //js


//5. Object inside Array:
let students = [
    {name: "Rashmi", age: 28}, 
    {name: "Riya", age: 26}
];
console.log(students[0].name); //Rashmi


//5. Accessing Function inside object:
let employeee = {
    name: "ankit",
    greet: function(){
        console.log("hello");
    }
};
employeee.greet(); //hello


//6. Accessing All Keys:
let resident = {
    name: "Rajni",
    age: 41
};
console.log(Object.keys(resident));  //[ 'name', 'age' ]    isne sari keys ka array de diya


//7. Accessing All values:
console.log(Object.values(resident));  //[ 'Rajni', 41 ]    isne sari values ka array de diya


//8. Accessing keys+values together
console.log(Object.entries(resident));  //[ [ 'name', 'Rajni' ], [ 'age', 41 ] ]   key value pair ka array


//9. Access Properties using for...in
let colleague = {
    name: "Parth",
    age: 26
};
for(let key in colleague){
    console.log(key);          //name
                               //age                               
}

//agar value chahiye to:
for(let key in colleague){
    console.log(colleague[key]);  //Parth      //. nahi use kiya balki [] use kiya bcz key variable h yha
                                  //26
}


//10. Check Property Exists — in
console.log("name" in colleague);  //true (in check krega ki kya ye property object me available h ya ni uske according true ya flase dega)


//11. hasOwn(): ye check krta h ki property, object ki apni prperty h ya ni
console.log(Object.hasOwn(colleague, "age"));  //true

//Note: difference b/w (in and hasOwn)--> dono hi check krte h ki property, object me exist krti h ya ni, lekin, in ye b dekhta h ki property agar object me exist ni krti, to khi uske prototype me exist to ni krti, in dono jagah check krta h



//12. Object Destructuring: means, Object property ko variable mein directly extract kar sakte ho.
/*concept: let name = student.name;
           let age = student.age;
           iski jagah hm----> let { name, age } = student; likh skte h
*/
let stuudent = {
    name: "Rashmi",
    age: 25
};
let { name, age } = stuudent;
console.log(name);  //Rashmi
console.log(age);   //25

//Destructuring with Different Variable Name:
let sstudent = {
    name: "Rashmi"
};
let { name: studentName } = sstudent;
console.log(studentName);