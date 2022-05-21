// Hoisting
/*
    - Hoisting in JavaScript is a behavior in which a function or 
    a variable can be used before declaration. 
    - Be carefull that only declaration gets hoisted NOT the 
    initialitations
*/

// var x = 5;
// console.log("x is  = "+x+". y is = "+y);
// //result => x is = 5. y is = undefined.
// var y = 7;

/*
    note that the code doesn't produce the error "y is not defined"
    like it would if we would omit y. It executes but not in the 
    way you would want.
*/


// Variable Hoisting
// In terms of variables and constants, keyword var is hoisted and 
// let and const does not allow hoisting.

// const 
// console.log("before declaration",constname);
// const constname = "hoisting with const";

// let 
// console.log("before declaration",letname);
// let letname = "hoisting with let";

// var 
// console.log("before declaration",varname);
// var varname = "hoisting with var";




// Function Hoisting
// A function can be called before declaring it. For example,
// it only works for function declaration.
// - functional declaration

// greet();

// function greet() {
//     console.log('Hi, there. testing hoisting with function declaration');
// }

// - function expression

// functionexpression();
// const functionexpression = function (){
//     console.log('Hi, there. testing hoisting with function expression');
// }





