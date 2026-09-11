/*synchronus means: code will execute in a sequence. means each instruction wait for the prvious instruction to complete its execution.
due to synchronous programming, sometimes important instruction get blocked due to some previous instruction, which cause a delay in the UI. 
so asynchronous code execution allows to execute next instructions immidiately and doesn't block the flow.
(means the instruction which is taking time will execute parallely)*/

//callback: a callback is a function paased as an argument to another function.

//EG of synchronus programming callback:
function sum(a,b){
console.log(a+b);
}
function calculator(a, b, sumCallback){
sumCallback(a,b);
}
calculator(2, 3, sum);
//Note: callback ke andar hm kisi function ko banakar uska nam pass kr skte h ya fir function b bna skte h directly:
calculator(2, 3, (a,b) => {
    console.log(a+b);
});

//EG of asynchronus programming callback:
const hello = () => {
    console.log("say hello");
}
setTimeout(hello, 2000);  //setTimeout is a inbuilt function in which we pass callback function and time 