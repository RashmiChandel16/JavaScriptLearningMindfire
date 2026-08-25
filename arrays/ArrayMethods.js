//push: modifies the original array
let fruits = ["Apple", "Banana"];
fruits.push("Mango","orange"); //returns new length agar ise console kra le
console.log(fruits) //[ 'Apple', 'Banana', 'Mango', 'orange' ]

//unshift(): modifies the original array
let arr = [20, 30];
arr.unshift(10); //returns new legth
console.log(arr); //[ 10, 20, 30 ]

//pop: modifies the original array
let Arr = [10, 20, 30];
let result = Arr.pop(); 
console.log(Arr); //[ 10, 20 ]
console.log(result); //returns the removed element

//shift(): modifies the original array
let array = [10, 20, 30];
let reslt = array.shift(); 
console.log(array); //[ 20, 30 ]
console.log(reslt); //returns the removed element


//splice(): modifies the original array
//can add/remove/replace elements anywhere in an array.
//it returns array containing the removed elements.

//remove element using splice()
let arry = [10, 20, 30, 40];
arry.splice(1, 1); // //[ 20 ]:agar ise console kraye to ye kata gya array dega
console.log(arry); //splice vala kat ke baki ka array dega//[ 10, 30, 40 ]

//add elements using splice()
let arr1 = [10, 30];
arr1.splice(1, 0, 20); //1 se start, 0 means remove ek b ni, add 20: isliye 1 se hi add hona start
console.log(arr1); //[ 10, 20, 30 ]

//replace elements using splice()
let arr2 = [10, 20, 30];
arr2.splice(1, 1, 200); //1 se start, remove 1 element, add 200 from 1
console.log(arr2); //[ 10, 200, 30 ]


//slice(): *does not modify the original array*
//It extracts a portion of an array and returns a new array.
let arr3 = [10, 20, 30, 40];
let result1 = arr3.slice(1, 3);
let result2 = arr3.slice(1); //**imp ye alag h, jaise hmne creating array me dekha ki slice() array ki copy create kr deta h, vaise hi slice(1) mtlb array ki copy create krega index 1 se
console.log(arr3) //will give the original array
console.log(result1); //kata gya part dega na ki bcha hua //[ 20, 30 ]
console.log(result2); // [ 20, 30, 40 ] 


//indexOf()
let arr4 = [10, 20, 30, 40];
console.log(arr4.indexOf(20))  //1
console.log(arr4.indexOf(60))  //-1 Note: agar element exist hi ni krta us case me index -1 dega


//includes()
let arr5 = [10, 20 ,30, 40]
console.log(arr5.includes(20)); //true


//find(): First matching element find
const arryy = [10, 20, 30, 20, 50]
const resul = arryy.find(num=> num > 15);
console.log(resul); //20

//findIndex() first matching element ka index return karta hai.
const arryyy = [10, 20, 30, 20, 50]
const resull = arryyy.findIndex(num=> num > 15);
console.log(resull); //20


//join()  --> existing array ko modify ni krega
//ye method array ke sabhi elements ko , lgake ek string me coonvert kr deta h
const myArr = [1, 2, 3];
const newArr = myArr.join();
console.log(newArr); //1,2,3--> this is a single string
console.log(typeof(newArr)); //string


//concat(): push krke new array return krta h, existing array modify ni krta
const theoryMarks = [30, 40, 50];
const totalNo = theoryMarks.concat(60, 70);
console.log(totalNo); //[ 30, 40, 50, 60, 70 ]

//spread method: doesn't modify existing array
const arry1 = [1, 2, 3]
const arry2 =  [4, 5]
const newArry = [...arry1, ...arry2];
console.log(newArry); //[1, 2, 3, 4, 5]


//flat(): array ke andar array vali situation me alag-alag kaise kre
//modifies original array
const myMarks = [40, [50, 60], 70]
console.log(myMarks.flat()); //[ 40, 50, 60, 70 ]


//reverse(): modifies original array
const arr6 = [1, 2, 3];
arr6.reverse();
console.log(arr6); //[ 3, 2, 1 ]


//sort(): modifies original array
const arr7 = [2, 1, 3];
arr7.sort();
console.log(arr7); //[ 1, 2, 3 ]











