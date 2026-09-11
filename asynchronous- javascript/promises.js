//Promise is an object that represents the result of an asynchronous operation that will be available in the future.
/*              Promise
                   ↓
                Pending
                   ↓
          ┌────────┴────────┐
          ↓                 ↓
       resolve()          reject()
          ↓                 ↓
     Fulfilled           Rejected
          ↓                 ↓
       .then()           .catch()
          └────────┬────────┘
                   ↓
               .finally()     

new Promise()  → Create a Promise

resolve()      → Success

reject()       → Failure

.then()        → Handle success

.catch()       → Handle failure

.finally()     → Run in both cases

.then().then() → Promise chaining

Promise.all()  → Wait for all

async/await    → Cleaner way to handle Promises 

A Promise represents a future result. resolve means success, reject means failure, .then() handles success, and .catch() handles failure. */

let promise = new Promise((resolve, reject) => {
       //asynchronous work
});
/*when we create a promise, js gives us 2 functions: 1. resolve --> success/fulfilled
                                                     2. reject --> failure/rejected    */


//Example:
let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Task completed");
    }
    else{
        reject("Task failed");
    }
});
//nothing will print:
//--------now how to get the promise result???------------
//.then() runs when the Promise is successfully fulfilled.
//.cathc() handles the rejected promise.
promise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});


//.then() runs when the Promise is successfully fulfilled:
let promise = new Promise((resolve, reject) => {
    resolve("hello");
});
promise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});


//.cathc() handles the rejected promise:
let promise = new Promise((resolve, reject) => {
    reject("something went wrong");
});
promise.catch((error) => {
    console.log(error);
});


//.finally() runs whether the Promise succeeds or fails:
let promise = new Promise((resolve, reject) => {
    resolve("success");      //if we had writeen reject("something went wrong"); then it would be handled by the catch block
});
promise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("finished");
});

//*Rememeber This*
//Why do we need Promises?
//Consider an asynchronous task:
console.log("start");
setTimeout(() => {
    console.log("Data Received");
}, 2000);
console.log("end");
/* output of the code is start
                         end
                         Data Received, bcz js doesn't wait for thr 2secs*/
/*Promises give us a clean way to say:
When this operation succeeds, do this. If it fails, do that. */
//Simple asynchronous Promise example:
console.log("start");
let promise = new Promise((resolve, reject) => {
    setTimeout((resolve) => {
        console.log("data received");
    }, 2000);
});
promise.then((result) => {
    console.log(result);
});
console.log("end");
//this also gives the same result
/* Start
  ↓
Promise created
  ↓
Timer starts
  ↓
JavaScript continues
  ↓
End
  ↓
2 seconds later
  ↓
resolve("Data received")
  ↓
.then()
  ↓
Data received */


//There are 2 different ways of creating an already resolved promise:
//1.
let promise = new Promise((resolve, reject) => {
    resolve("success");
});      //this is full/normal way of creating a promise
//2.
let promise = Promise.resolve(10);  //this a shorcut of creating a promise that is already successfull
//this means Create a Promise that is already fulfilled with the value 10.
//3.
//Same way you can directly create a rejected promise(as we created fulfilled promise baoove)
let promise = Promise.reject("Failed");
promise.catch((error) => {
    console.log(error);
});

//Promise Chaining: you can attach multiple .then() methods
//Whatever you return from one .then() becomes the input for the next .then().
let promise = Promise.resolve(10);
promise
.then((result) => {
    console.log(result);
    return result+5;
})
.then((result) => {
    console.log(result);
    return result*2;
})
.then((result) => {
    console.log(result);
});


//Promise.all()   :   Promise.all() succeeds only when all Promises succeed.
//Promise.all() takes multiple Promises, starts/observes them together, and returns one Promise that fulfills when all of them fulfill. If any one rejects, the combined Promise rejects.let p1 = Promise.resolve("A");
//Multiple Promises ko ek saath handle karta hai aur tab result deta hai jab saare Promises fulfill ho jaate hain.
let p2 = Promise.resolve("B");
let p3 = Promise.resolve("C");
//You want to wait for all three:
Promise.all([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });
//check using set timeout???    

//Promise.allSettled()   :    waits for all Promises, whether they succeed or fail.
Promise.allSettled([p1, p2, p3]);
//Useful when you want the result of every operation.


//Promise.race()   :    Promise.race() returns the result of the first Promise that settles.
Promise.race([p1, p2, p3]);
/*"Settles" means either:
Fulfilled
OR
Rejected
Whichever happens first wins. */





