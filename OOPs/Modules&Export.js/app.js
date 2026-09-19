const Manag = require("./Manager");

const manager = new Manag();
manager.work();
manager.manage();

/*
Note: What if the file is inside another folder?
Suppose:
OOPs
│
├── classes
│   └── Employee.js
│
└── app.js

Then:
const Employee = require("./classes/Employee");
*/