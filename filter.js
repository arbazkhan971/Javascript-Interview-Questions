/*
    Filter 
    Definition and Usage
    The filter() method creates a new array filled with elements that pass a test provided by a function.
    The filter() method does not execute the function for empty elements.
    The filter() method does not change the original array.
*/

const ages = [32, 33, 16, 40];
const numbers = [112, 52, 0, -1, -29, 20, -3,944 , 2 , 5,6,9];
var words = ['obi','bisi','ada','ego','spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const peoplewhocanvote = [];
// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=18){
//         peoplewhocanvote.push(ages[i]);
//     }
// }
// console.log("people who can vote",peoplewhocanvote);

// console.log(ages.filter(value => value >=18));

// // Find even in numbers
// console.log("Even in the numbers",numbers.filter(value => value%2 === 0));

// // Find odd in numbers
// console.log("Odd in the numbers",numbers.filter(value => value%2 !== 0));

// // Find positives in numbers
// console.log("postive values in the numbers",numbers.filter(value => value>0));

// // Find negatives in numbers
// console.log("Negative values in the numbers",numbers.filter(value => value < 0));

// // Find numbers greater than 30 in numbers
// console.log("Greater than 30 values in the numbers",numbers.filter(value => value > 30));

// // Find numbers less than 10 in numbers
// console.log("Less than 10 values in the numbers",numbers.filter(value => value < 10));

// Find words that are 5 letters or more in words
console.log("Words that are more than 5 letters",words.filter(value => value.length >= 5));
// Find words that are 3 letters or less in words
console.log("Words that are more than 3 letters",words.filter(value => value.length <= 3));

// Find words that are 5 letters long in words
console.log("Words that are 5 letters",words.filter(value => value.length === 5));

// Find ages that are greater than 18 in ages
// Homework