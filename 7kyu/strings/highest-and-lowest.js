/* CHALLENGE DESCRIPTION

You are given a string of space separated numbers and have to return the highest and lowest number.

Examples:
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:
All numbers are valid Int32. No need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space and the highest number is first.
*/

/* PREP
Parameters
    // string of integers
Returns 
    // return "highestNum lowestNum"
Examples 
    // "1 2 3 4 5"
        // "5 1"
    //  "30 32 29 56"
        // "56 29"
Pseudocode 
    // function that takes in one parameter, string of integers
    // turn string into an array
    // use Math.max to find the largest integer
    // use Math.min to find the smallest integer
    // return the max and min in a string, "highestNum lowestNum"
*/

// MY SOLUTION
function returnHighAndLow(str) {
    const arr = str.split(" ");
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return `${max} ${min}`;
}

console.log(returnHighAndLow("1 2 3 4 5"), "5 1");
console.log(returnHighAndLow("30 32 29 56"), "56 29");
console.log(returnHighAndLow("1 9 3 4 -5"), "9 -5");

// OTHER SOLUTIONS
function highAndLow(numbers) {
    numbers = numbers.split(" ");
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}