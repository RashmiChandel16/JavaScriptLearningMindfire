//1. Object.keys()
let student1 = {
    name: "rashmi",
    age: 28
};
console.log(Object.keys(student1));  //[ 'name', 'age' ]


//2. Object.values()
console.log(Object.values(student1)); //[ 'rashmi', 28 ]


//3. Object.entries   --> key,value pair in array
console.log(Object.entries(student1));  //[ [ 'name', 'rashmi' ], [ 'age', 28 ] ]


//4. Object.fromEntries()
let arr = [ ["name", "rashmi"], ["age", 28] ];
console.log(Object.fromEntries(arr));  //{ name: 'rashmi', age: 28 }


//5. Object.assign()
let name = {
    firstname: "rashmi",
    lastname: "chandel"
};
let address = {
    city: "Noida",
    State: "UP"
};
let employee = Object.assign({}, name, address);   //ek employee nam ka empty object leke usme upar ke 2 objs merge kr diye
console.log(employee);  /*  {
                              firstname: 'rashmi',
                              lastname: 'chandel',
                              city: 'Noida',
                              State: 'UP'
                            }
                        */

//5(ii): same kam spread operator ka use krke:
let name1 = {
    firstname: "riya",
    lastname: "rawat"
};      
let address1 ={
    city: "delhi",
    State: "delhi"
};
let employee1 = {
    ...name1,
    ...address1
} ;
console.log(employee1); //{ firstname: 'riya', lastname: 'rawat', city: 'delhi', State: 'delhi' }
console.log(employee1.city)  //dlehi           


//6. Object.create()
//Ek new object create karta hai aur specified object ko uska prototype banata h


//7. Object.hasOwn()


//8. Object.freeze() --> means existing property change/delete ni kr skte and new peoperty add ni kr skte
let studentt = {
    name: "Rashmi",
    age: 25
};
Object.freeze(studentt);
studentt.age = 30;
studentt.city = "Delhi";
delete studentt.name;
console.log(studentt);  //{ name: 'Rashmi', age: 25 }


//9. Object.seal() --> add/delete ni kr skte but modify kr skte h existing property ko
let student2 = {
    name: "Rashmi",
    age: 25
};
Object.seal(student2);
student2.age = 30;       //allowed
student2.city = "Delhi"; //not allowed
delete student2.name;    //not allowed
console.log(student2);   //{ name: 'Rashmi', age: 30 }
