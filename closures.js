// Closures
// Defination :- In JavaScript, a closure is a function that references variables in the outer scope 
// from its inner scope. The closure preserves the outer scope inside its inner scope.

// To understand the closures, you need to know how the lexical scoping works first.

// Lexical Scoping
// Lexical scoping is the process of binding the scope of a variable to the point of declaration.
let a = 10;

// function inner() {
//     let b = 20;
//     console.log("Inside inner function a",a);
//     console.log("Inside inner function b",b);

// }
// inner();
// console.log(b);

// function outer(param1){

//     let b =20;
//     function inner(param2){
//         let c = 30;
//         console.log("Inside inner func value of a",a);
//         console.log("Inside inner func value of b",b);
//         console.log("Inside inner func value of c",c);
//         console.log("Inside inner func value of param1",param1);
//         console.log("Inside inner func value of param2",param2);
//     }
//     inner(50);

// }
// outer(40);
// inner(60);

// Closures

function outer(){
    let b = 20;
    function getb(){
        console.log(b);
    }

    function updateb(value){
        b = b + value;
    }
    return {
        getb: getb,
        updateb: updateb
    }

}

let outerfunction = outer();

outerfunction.getb();
outerfunction.updateb(20);
outerfunction.getb();
outerfunction.updateb(40);
outerfunction.getb();






