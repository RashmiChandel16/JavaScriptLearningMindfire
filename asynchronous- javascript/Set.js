//Set is a js collection that stores unique values.
//NOTE: Set does not allow duplicate values.
let numbers = new Set();
console.log(numbers); //Set(0) {}
numbers.add(10);
numbers.add(20);
numbers.add(10);
console.log(numbers); //Set(2) { 10, 20 }

//Set with initial values:
let numbers = new Set([10, 20, 30, 20]);
console.log(numbers); //Set(3) { 10, 20, 30 }

let set = new Set(["Apple", 12, null, true,  undefined]);
console.log(set); //Set(5) { 'Apple', 12, null, true, undefined }

//add(): Used to add a value.
let fruits = new Set();  //Set(3) { 'Apple', 'Mango', 'Banana' }
fruits.add("Apple");
fruits.add("Mango");
fruits.add("Banana");
console.log(fruits);
fruits.add("Apple"); //this will not be added again bcz Set takes only unique values
fruits.delete("Mango");

//delete()
console.log(fruits);  //Set(2) { 'Apple', 'Banana' }

//has()
console.log(fruits.has("Apple"));  //true

//clear()  :  Removes all values.
let setVar = new Set(["Apple", 12, null, undefined]);
setVar.clear();
console.log(setVar);  //Set(0) {}

//size
let numbers = new Set([10, 20, 30]);
console.log(numbers.size);  //3

//NOTE: Set does not have indexes  ,you can use methods or iterate through it.
let numbers = new Set([10, 20, 30]);
console.log(numbers[0]);   //undefined


//Set is iterable, we can use mentods or loop to iterate through it (but it does not have indexes)
//Loop through a Set:
//1. using for...of
let numbers = new Set([10, 20, 30]);
for(let num of numbers){
    console.log(num);
}
/*
  10
  20
  30
*/

//2. using forEach()
let numbers = new Set([10, 20, 30]);
numbers.forEach((num) => {
    console.log(num);
});

//Main Purpose of Set: to remove duplicate values from array
let numArr = [1, 2, 3, 1, 2, 2, 4, 5];
let numbers = new Set(numArr);
console.log(numbers);  //Set(5) { 1, 2, 3, 4, 5 }

//spread operator:
console.log(...numbers);     // 1 2 3 4 5
console.log([...numbers]);  //[ 1, 2, 3, 4, 5 ]

//Example: WAP to remove duplicate values from array:
let numbers = [1, 1, 2, 3, 2, 4, 5, 4];
let uniqueNum = new Set(numbers);
//console.log(...uniqueNum);    //1 2 3 4 5
console.log([...uniqueNum]);  //[ 1, 2, 3, 4, 5 ]


//Set of objects
let set = new Set();
let person1 = {
    name: "Rashmi",
};
let person2 = {
    name: "Rashmi"
};
set.add(person1);
set.add(person2);
console.log(set); //Set(2) { { name: 'Rashmi' }, { name: 'Rashmi' } }
console.log(set.size);  //2, 
//Note: here both objects have same name but different object reference, that's why unique


//CONCEPT: as we know Set constructor accepts iterables:
let set = new Set("Hello");
console.log(set);  //Set(4) { 'H', 'e', 'l', 'o' }


//convert Set to array then array to set:
//(1) using spread operator
let set = new Set([10, 20, 30 , 40]);
let arr = [...set];
console.log(arr);   //[ 10, 20, 30, 40 ]
let againSet = new Set(arr);
console.log(againSet);  //Set(4) { 10, 20, 30, 40 }

//(2) using Array.from()
let set = new Set([10,20,30,40]);
let arr = Array.from(set);
console.log(arr);  //[ 10, 20, 30, 40 ]


/*Set does NOT have these Array methods:
set.map()      ❌
set.filter()   ❌
set.reduce()   ❌
set.length     ❌
set[0]         ❌
If you want to use Array methods: */
let set = new Set([10, 20, 30]);
let result = [...set].map((num) => num*2);
console.log(result);  //[ 20, 40, 60 ]


//Prcatical Examples:

//check if duplicate values exist in an array:
let arr = [10, 20, 10, 30];
let set = new Set(arr);
if(set.size !== arr.length){
    console.log("duplicate values exist");
}
else{
    console.log("duplicate values do not exist");
}


//Find duplicate values:
let arr = [10, 20, 10, 30, 20];
let set = new Set();
let duplicateValues = new Set();
for(let num of arr){
    if(set.has(num)){
       duplicateValues.add(num)
    }
    else{
        set.add(num);
    }
}
console.log(set); //Set(3) { 10, 20, 30 }
console.log(duplicateValues);  //Set(2) { 10, 20 }
console.log([...duplicateValues]);  // [ 10, 20 ]













