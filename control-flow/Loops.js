//Loop ka use kisi code ko bar-bar execute karne ke liye hota  jab tak given condition satisfy hoti h
/*Main loops:
  for
  while
  do...while
  for...of
  for...in
  */

//for loop
//used to execute a block of code when we generally know how many times we want to execute it
//(when no of iterations is known or cane be determined in advance)
//entry controlled loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//even no from 1-20
for(let i =1; i<=20; i++){
    if(i%2 === 0){
    console.log(i);
    }
}
          //or
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//while Loop
//while loop executes code as long as the specified condition is true.
//entry controlled loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

//do...while Loop
//executes the code at least once, even if the condition is false.
//exit-cntrolled loop
let j=10;
do{
    console.log(j);
    j++;
} while(i<=5);

//for...of
//is used to iterate over iterable values such as: *Arrays*, *Strings*, Sets, Maps
let fruits = ["Apple", "Mango", "Banana"];
for(let fruit of fruits){
    console.log(fruit);
}

let name = "Rashmi";
for(let char of name){
    console.log(char);
}

//Note: obj ke liye hm for in use krte h, but agar for of use krna ho to aise krenge: 
let obj = {
    name: "Rashmi",
    company: "Mindfire"
};
for(let key of Object.keys(obj)){
   console.log(key);               /*name
                                     company*/
}
for(let value of Object.values(obj)){
    console.log(value);           /*Rashmi
                                   Mindfire*/
}


//for...in
//is generally used to iterate over the *keys* of an *object*.
let employee = {
    name: "Rashmi",
    age: 28,
    city: "Kanpur"
};
for (let key in employee) {
    console.log(key);
    console.log(employee[key]); //agar values iterate krvani ho to aise likhe
}

//Note: agar array ke liye for..in use kre to index dega bcz ye key deta h
let heroes = ["thor","shktim","spiderm"]
for(let index in heroes){
    console.log(index);       //this will give 0 1 2
}

//break
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

//continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

//Nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}


