//try...catch block is used to handle errors so that the program does not stop suddenly when an error occurs.
/*Rules: 1. after try, it is compulsary to have catch or finally bloock, otherwise it will give SyntaxError: Missing catch or finally after try.
         2. try{
                //code that may cause an error
            }
            catch (error){
                //code to handle the error
            } 
            finally {
                // always execute
            } 
                
         3. catch runs only if an error occurs inside try.
*/


//without try...catch:
console.log("Start"); 
console.log(x);  //it will give reference error and program will not execute furthur.
console.log("End");

//To resolve above situation, lets use try...catch:
console.log("Start");
try{                           
    console.log(x);
}
finally{
    console.log("i will run always whether error accurs or not");
}
console.log("Hi");
//flow of above code: 23 line executes, then error occured in try block, but there is not catch block to hadle the error, then finally will execute, and after that error will be shown bcz no catch to hadle the error and line 31 will not execute.

console.log("Start");
try{                           
    console.log(x);
}
catch(error){               //error is a variable/parameter here which contains information about the error.
    console.log(error);        
}                           
finally{                    //finally is used for cleanup/always-run
}
console.log("Hi");
//flow of above code: 33 line executes, then error occured in try block, then it goes to catch block & catch block handles the error and show the error/errorname/errormsg/anycustomerrormsgwewroteinconsole.log(whatever we write inside it) to hadle the error, then finally will execute, then line 43 will execute


//Execution flow example:
console.log("1");        //1
try {
    console.log("2");    //2
    console.log(x);      //here error occured so it stops executing the remaining try code & jumps to catch
    console.log("3");    //will not execute
} catch (error) {
    console.log("4");    //4
}
console.log("5");        //5


/*Note:  1. console.log(error): this gives whole error. 
         2. consle.log(error.name): this gives what type of error is occured.
            Common error names: ReferenceError
                                TypeError
                                RangeError
                                SyntaxError
         3. console.log(error.message): this gives the error message .
         4. console.log(error.stack): this gives the detailed information about where the error happened(used for debugging)

5. Why is finally used:
It is used for cleanup operations. For ex: In automation testing, cleanup after a test/action.
try {
    // open file
} catch (error) {
    // handle error
} finally {
    // close file
}
    or
try {
    // database operation
} catch (error) {
    // handle error
} finally {
    // close database connection
}
*/



//If there is no error in try block then catch block does not execute:
try{
    console.log("Hello");
    console.log("World");
} catch (error){
    console.log("Error occurred");
} finally{
    console.log("i will run");
}


/*throw
-->JavaScript allows us to create our own error using throw.
-->throw new Error("Something went wrong");   This line manually generates an error.
-->-throw is useful for validation.
*/
console.log("hi"); //hi
throw new Error("Something went wrong"); //we manually created error here so next line will not execute.
console.log("hello");

//throw with try...catch
try{
    throw new Error("Invalid username");
} catch(error){
    console.log(error.name);      //Error
    console.log(error.message);   //Invalid username
}

//Why we use throw-->
//suppose we have age 15 and we want the age to be atleast 18:
let age = 15;
try{
    if(age<18){
       throw new Error("You must be 18 or older");     //this is generating error ,manually
    }
    console.log("allowed");    
}
catch(error){
    console.log(error.message);  //You must be 18 or older
}
console.log("this will execute bcz error is handled in the catch block");

//Eg2:
try{
    console.log("A");                           //A
    throw new Error("Something went wrong");    //next line will not execute, bcz it immidiately stops the execution flow inside try and jump to the catch.
    console.log("B");                            
}
catch(error){
    console.log("C");                           //C
}

//Eg3: throw can be used for validation:
function checkAge(age){
        if(age<18){
            throw new Error("Age must be 18 or above");
        }
        return "Access granted";
    }
try{
    console.log(checkAge(15));
}
catch(error){
    console.log(error.message);
}


//Different type of errors:
//1. ReferenceError: Using a variable that doesn't exist:
try{
    console.log(name);
}
catch(error){
    console.log(error.name);  //ReferenceError
    console.log(error.message);  //name is not defined
}
//2. TypeError: Doing something invalid with a type:
try{
    let name = "John";
    name();                //TypeError: name is not a function
}
catch(error){
    console.log(error.name);  //TypeError
    console.log(error.message);  //name is not a function
}
//3. RangeError: A value is outside the allowed range:
try{
    let arr = new Array(-1);
    console.log(arr);
}
catch(error){
    console.log(error.name);     //RangeError
    console.log(error.message);  //Invalid array length
}

//Checking different errors type:
//1st way:
try{
    console.log(x);
}
catch(error){
    if(error.name === "ReferenceError"){
        console.log("Reference Error occured");
    }
}
//2nd way:
try{
    console.log(x);
}
catch(error){
    if(error instanceof ReferenceError){
        console.log("Reference errr occured");
    }
}



//Catch without error: You don't always need the error object.
//Use this when you don't need error details.
try{
    console.log(x);
}
catch{
    console.log("something went wrong");
}



//Nested try...catch
try{
    try{
        console.log(x);
    }
    catch{
        console.log("inner catch")
    }
}
catch{
    console.log("outer catch");
}
//Note: Output: inner catch  (Reason: bcz inner catch handled the error so id didn't reach the outer catch)
//What if inner catch doesn't handle it-->
try{
    try{
        throw new Error("something went wrong");
    }
    catch(error){
        console.log("inner catch");
        throw error;                //NOTE: THIS IS CALL RETHROWING AN ERROR.(this will throw error to outer catch)
    }
}
catch(error){
    console.log("outer catch");
}
/*output: Inner catch
          Outer catch  */



//Note: try...catch doesn't fix the error. It simply prevents the error from crashing the part of the program and give us a chance to handle it.



//Function + try/catch 
//1. try...catch outside the function:
function test(){
    console.log(x);
}
try{
    test();
}
catch(error){
    console.log("Error caught");
}
/* Note: The error happened inside test(), but the try...catch outside the function caught it.
This is called error propagation/bubbling. */

//2. try...catch inside the function:
function test(){
    try{
        console.log(x);
    }
    catch(error){
        console.log("Error handled inside the function");
    }
}
test();
//Here function itself handles the errr.


//COMPLETE EXAMPLE:
function divide(a,b){
    if(b === 0){                //3.            
        throw new Error("Cannot divide by zero");  
    }
    return a/b ;   //this will not execute, bcz after throw function stops immidiately.
}
try{
    console.log("Starting");    //1. Starting
    let result = divide(10,0);  //2. we are calling function in this line, function will be called, if condition is true so it will not execute return statement & next line 288 will also not execute and it jump to catch block then finally will execute
    console.log(result);        //this doesn't execute bcz divide(10,0) throws an error.
}
catch(error){
    console.log("Error:", error.message);   //4. Error: Cannot divide by zero
}
finally{
    console.log("Operatioon finished");   //5. Operatioon finished
}


//Concepts to see later:

//try...catch with async/await??

//Playwright example??


