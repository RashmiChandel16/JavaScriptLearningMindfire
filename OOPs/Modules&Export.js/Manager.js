const Employ = require("./Employee");  //This imports the Employee class

class Manager extends Employ{    //means Manager inherits from Employee
    manage(){
        console.log("Manager is managing");
    }
}

module.exports = Manager;