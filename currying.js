//Currying

/**
        It is a technique in functional programming, transformation of the 
        function of multiple arguments into several functions of a single 
        argument in sequence. It is also called nested function is ecmascript 
* 
*/

//Without currying
// function calculateVolume(length, breadth, height) {
//         return length * breadth * height;
// }

//With Currying
function calculateVolume(length) {
        return function (breadth) {
            return function (height) {
                return length * breadth * height;
            }
        }
}

console.log(calculateVolume(10)(20)(30));

function calculateVolume1(length) {
    return function (breadth) {
        return function (height,height1) {
            return length * breadth * height * height1;
        }
    }
}

console.log(calculateVolume1(10)(20)(30,40));