// HOF :- Higher Order Function
/*
    Functions that operate on other functions, either by taking them as arguments 
    or by returning them, are called higher-order functions
*/

// 1. Function that takes a function as an argument

// function function1(){
//     console.log("Inside fucntion 1");
// }

// function function2(func){
//     console.log("Inside function 2");
//     func();
// }

// function2(function1);

// 2. Function that returns a function

// function function3(){
//     console.log("Inside function 3");
//     return function1();
// }
// function3();

// 3 - Function that takes a function as an argument and returns a function

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function cal(a,b,func){
    return func(a,b);
}

console.log(cal(10,20,add));
console.log(cal(10,20,sub));
console.log(cal(10,20,mul));

// Most Common Examples of HOF in JS
// 1 - .reduce()
// 2 - .forEach()
// 3 - .map()
// 4 - .filter()