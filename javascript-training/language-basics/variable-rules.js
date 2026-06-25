//Rules of variables in JavaScript

//How to strore data in a program?

//Syntax : declaration variable = data ;

//Rules to declare a variable while storing the data 

//String data in JS
let empName = "Neha";

//1. Variable name must not be a reserved keyword. 
// let const = "Swati";

//2. Variable names must not be literals. (true/false/null/undefined)
// let true = "Tanisha";

//3. Variable name must not begin with a number. 
//let 1empName = "Anvu";

//4. Variable name must not contain a special character. except ($ , _)
//let my@Name = "Neha";

//5. Variable name must not contain white space. 
//let my name = "Neha";

//6. Variable should be unique always. 
// const empName = "Swati";

//Standards to follow

//1. Variable name should be meaningful and self-explanatory. 
//let carNumber = 1694;

//2. Variable name should be written by following the standard naming conventions. 
//Regular variables or methods or functions to be declared in camel case start with a lower case letter. 
let todayTopicIs = "Variable rules";

function getEmployeeName(){
    //code to get employee name
}
//Constant value should be declared with all uppercase with an underscore. 
const MAX_EMPLOYEES = 100;

//Class name should follow Pascal case. Every word should start with a capital letter, followed by camel case. 
class EmployeeDetails{
    //code to get employee details
}