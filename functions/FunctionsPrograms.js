function helloWorld(){
    return "Hello World";
}
console.log(helloWorld());

function add(a,b){
    return a+b;
}
console.log(add(2,3));

function square(num){
    return num*num;
}
console.log(square(3));

function checkNumber(num){
    if (num > 0){
        return "Positive";
    }
    if (num < 0){
        return "Negative";
    }
    return "Zero";
}
console.log(checkNumber(10));

//factorial
function fact(num){
    let fact = 1;
    for(let i=1; i<=num; i++){
        fact = fact*i;
    }
    console.log(fact);
}
fact(5);

//prime no
function isPrime(num){
    if(num<=1){
        return `${num} is not a prime no`;
    }
    for(i=2; i<num; i++){
        if(num%i === 0){
            return `${num} is not a prime no`;
        }
    }
    return `${num} is not a prime no`;
}
console.log(isPrime(7));

//Fibonacci series print krao
//concept: next number = previous two numbers ka sum
let a=0;
let b=1;
let c=a+b;
function Fibonacci(num){
    for(i=0; i<=num; i++){
    console.log(a);
    a=b;
        

    }

}


//reverse a number
function revNum(num){
    let numinString = num.toString();
    let emptyString = "";
    for(let i=(numinString.length-1); i>=0 ; i--){
        emptyString = emptyString + numinString[i]
    }
    let result = Number(emptyString);
    console.log(result);
}
revNum(123);

                  //or
//string and array methods ka use krke:
function reverseNum(num){

    let result = Number(num.toString().split("").reverse().join(""));
    console.log(result);
}
reverseNum(123);