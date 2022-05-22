/*
    Definition and Usage
    - map() creates a new array from calling a function for every array element.
    - map() calls a function once for each element in an array.
    - map() does not execute the function for empty elements.
    - map() does not change the original array.
*/

const numbers = [4, 9, 16, 25];

// sqrt for each elements

// for(let i=0;i<numbers.length;i++){
//     console.log( Math.sqrt(numbers[i]));
// }

// using map
// console.log("sqrt of each elements");
// console.log(
//     numbers.map(function(value){
//         return Math.sqrt(value);
//     })
// );
// console.log("Square of each elements");
// console.log(
//     numbers.map(function(value){
//         return value*value;
//     })
// );
// console.log("Cube of each elements");
// console.log(
//     numbers.map(value =>
//          value*value*value)
// );


let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
];
// print full name
let fullName = users.map(function(value){
    return value.firstName + " " + value.lastName;
});

console.log("full name of each user",fullName);
let firstChar = users.map(function (value){
    return value.firstName[0];
})
console.log("first character of each user",firstChar);

// print first character of last name of each user


const posts = [
    { id: 1, title: "Sample Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: 2, title: "Sample Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { id: 3, title: "Sample Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
];

const arroftitle = posts.map(function(value){
    return value.title;
})

console.log("title of each post",arroftitle);

// print description of each post

// print id of each post

