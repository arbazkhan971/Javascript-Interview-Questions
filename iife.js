// IIFE - Immediately Invoked Function Expression
// Pronounced - "Iffy"
// It was first introduced by ben alman in his blog "Immediately Invoked Function Expression"
// https://benalman.com/news/2010/11/immediately-invoked-function-expression/
// It is a way to create a function that is automatically called when it is defined.


// Lets See How it works

// function normalFunction(){
//     console.log("Normal Function");
// }

// normalFunction();

// (function normalFunction(){
//     console.log("Iffy Function");
// })()

// Most Important Uses
// 1. Secure Variables Scope (When privacy Matters!!!!!!!!!!!!!!!)

// (function(){
//     var a = 10;
//     console.log(a);
// })();

// console.log(a);

// 2. Avoid Polluting the Global Scope Variables

let x ="global variable";

(function (){
    let x = "iffy variable";
    console.log("Inside iffy", x);
})();

console.log("Outside iffy", x);

