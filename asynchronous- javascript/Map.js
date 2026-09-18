//A Map is a JavaScript collection used to store data in key-value pairs.
//set() → store
//get() → retrieve
//Map allows unique keys, but values can be duplicated.
let user = new Map();
user.set("name", "Rashmi");
user.set("age", 28);
user.set("city", "Noida");
user.set("201", "Pincode");
console.log(user);
/* Map(4) {
  'name' => 'Rashmi',
  'age' => 28,
  'city' => 'Noida',
  '201' => 'Pincode'
} */

//Creating Map with initial values:
let user = new Map([
    ["name", "Rashmi"],
    ["age", 28],
    ["city", "Noida"]
]);
console.log(user.get("name")); //Rashmi


//has()
let user = new Map();
user.set("name", "Rashmi");
user.set("age", 25);
console.log(user.has("name")); //true


//delete()
console.log(user.delete("age"));
console.log(user);   //Map(1) { 'name' => 'Rashmi' }


//clear() Removes everything from the Map
user.clear();
console.log(user);  //Map(0) {}


//size
let user = new Map();
user.set("name", "Rashmi");
user.set("age", 25);
console.log(user.size); //2


//Map keys must be unique
let map = new Map();
map.set("name", "Rashmi");
map.set("name", "Priya");
console.log(map.get("name"));  //Priya (value overwrites)


//Map can have object/function/number....as a key

//Object as a Map key:
let person = {
    name: "Rashmi"
};
let map = new Map();
map.set(person, "Employee");
console.log(map.get(person));


//difference b/w Map and objects??? imp
//See more and do some practical examples

/*Suppose you want to store a person's information.

With an Object:

let user = {
    name: "Rashmi",
    age: 25
};

That's fine.

But sometimes you need a dedicated key-value collection, especially when:

keys can be numbers, objects, functions, etc.
you frequently add/remove entries
you need to check whether a key exists
you need the number of entries
you want convenient Map methods

That's where Map is useful.
*/
