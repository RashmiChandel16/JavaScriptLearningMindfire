//arrow function:-> shorter syntax to write function

//without parameter:
const greet = () => {
    console.log("hello");
};
greet();  //hello

//single parameter:
const greetFunc = (name) => {
    console.log("Hello " + name);
};
greetFunc("Rashmi");
              //or
const greetFunc = name => {        //we can write parameter without () if there is single parameter
    console.log("Hello ", name);
};
greetFunc("Riya");

//multiple parameter:
const sum = (a, b) => {           
    return a+b;
};
console.log(sum(5,4));

//Note: Implicit return in arrow function: If there is only one expression in the return statement, then we can write it without {} & without using return keyword.
const sum = (a,b) => a+b;
console.log(sum(5,4));

//Arrow function returning object:
const getUser = () => {
    return {
        name: "Rashmi",
        age: "28"
    };
};
console.log(getUser());  //{ name: 'Rashmi', age: '28' }
console.log(getUser().name);  //Rashmi


//this: gives the reference of the current object.
//this: refers to the object that is calling the function(in the common method calling case).
//Note: Normal functioon can have its own this, but arrow function does not have its own this(they don't take their object's this, uses it lexical envirnment this instead)
//Eg: Normal Function:
const person = {
    name: "Rashmi",
    greet: function () {
      let name = "Riya" ;
      console.log(this.name);   //Rashmi
      console.log(name);        //Riya
    }
};
person.greet();
//Eg: Arrow function:
const userDetails = {
    name: "Rashmi",
    greet: () => {
        console.log(this.name);    //undefined
    }
}
userDetails.greet();

//Eg: Arrow function using lexical this
const person1 = {
    name: "Rashmi",
    greet: function () {
        const person2 = {
            name: "Priya",
            sayName: () => {
                console.log(this.name);    //Rashmi
            }
        };
        person2.sayName();
    }
};
person1.greet();


//arguments:
//For normal function:->
function test(a,b){
    console.log(arguments);
}
test(2,3);  //[Arguments] { '0': 2, '1': 3 }
//For arrow function:->
const test = (a,b) => {
    console.log(arguments);
};
test(2,3);  //output???


//Note: Normal function can become constructor but arrow function cannot...
//Normal Function:
function Person(name) {
    this.name = name;
}
const p = new Person("Rashmi"); //this is possible
//Arrow Function:
const Person = (name) => {
    this.name = name;
}
const p = new Person("Rashmi"); //TypeError: Person is not a constructor


//Arrow function in callback:
//Normal Function:->
step1(function () {
    step2(function () {
        step3();
    });
});
//Arrow Function:->
step1(() => {
    step2(() => {
        step3();
    });
});


//Arrow function + parameters
function calculator(a, b, callback){
    callback(a, b);
}
calculator(5, 10, (x, y) => {
    console.log(x+y);
});

//for getting multiple values in arrow function: Rest Operator
const test = (...args) => {
    console.log(args);
};
test(10, 20, 30);  //[ 10, 20, 30 ]


//async await use in arrow function:
const getDta = async () => {
    console.log("start");
    let result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("data received");
        }, 2000);
    });
    console.log(result);
    console.log("end");
};
getDta();
console.log("hello");

//parameterised arrow function with async await:
const add = async (a,b) => {
    let result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(a+b);
        }, 2000);
    });
    return result;
};

add(10,20).then((result) => {
    console.log(result);
});