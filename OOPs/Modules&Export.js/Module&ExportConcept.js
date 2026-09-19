//A module is simply a JavaScript file whose code can be shared with other files.
//Export means: I want to make this code available to another file.
//Import means: I want to use code that another file has exported.

/*
Why do we need modules?
Imagine you have one big JavaScript file:
app.js
It contains:
Employee class
Manager class
Login functions
Utility functions
1000+ lines...
This becomes difficult to manage.
Instead, we can divide our code:
project
│
├── Employee.js
├── Manager.js
└── app.js
Each file becomes a module.

Think:
Employee.js → Employee-related code
Manager.js  → Manager-related code
app.js      → Main code
*/



/*
A module is a separate JavaScript file containing code that can be reused by other files.
For example:
Employee.js
class Employee {
    work() {
        console.log("Employee is working");
    }
}
Right now, another file cannot directly use this class.
We need to export it, so we will add the below line after 33:
module.exports = Employee;   (means I want to make Employee available to other files.)

Now, How do we use the exported class??
suppose we have created another file:
app.js 
const Employee = require("./Employee");   (means Go to Employee.js, get whatever it exported, and store it in Employee variable)
                                          (./ means Look for Employee.js in the "current folder")
const employee = new Employee();           
employee.work()
*/



/*
Suppose Employee.js has two things:
class Employee {
    work() {
        console.log("Working");
    }
}
function greet() {
    console.log("Hello");
}

We can export both:
Syntax for Exporting multiple things:
module.exports = {
    Employee,
    greet
};

Then in app.js:
const { Employee, greet } = require("./Employee");
employee.work();
greet();
*/



/*Note:
module.exports → OUT 📤
require()      → IN 📥
*/



