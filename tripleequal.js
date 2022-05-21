// Difference between == & === 

// == (equal) is a loose comparison operator.
// It will compare the value of two variables and return true if they are equal.
// It will not check the data type of the variables.
// It will not check the type of the variables.
// It will return true if the variables are equal.
// It will return false if the variables are not equal.
// if comparison is made between number and string then it will convert string into number.
// if comparison is made between boolean and non-boolean then it will convert non-boolean into boolean.
// if comparison is made between string and non-string then it will convert non-string into string.
// if comparison is made between object and non-object then it will convert object into non-object.


// === (strict equal) is a strict comparison operator.
// It will compare the value and the data type of the variables.
// It will return true if both the value and the data type are equal.
// It will return false if the value is equal but the data type is not.
// It will return false if the value is not equal.
// It will return false if the data type is equal but the value is not.
// It will return false if the data type is not equal.
// It will return false if the value and the data type are not equal.

var a = 1;
var b = "1";
var c = true;
var d = new String("1");

// numbers && strings
// console.log("with ==",a == b);
// console.log("with ===",a === b);

// numbers && booleans
// console.log("with ==",a == c);
// console.log("with ===",a === c);

// object && non object 
// console.log("with ==",a == d);
// console.log("with ===",a === d);

console.log( 1 == 10);
console.log( "string" === "string1");