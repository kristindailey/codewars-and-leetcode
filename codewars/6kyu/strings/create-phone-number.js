/* CHALLENGE DESCRIPTION

Write a function that accepts an array of 10 integers (between 0 and 9) that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

/* PREP
Parameters
    // array of integers
    // 10 integers total (between and 9)
Returns 
    // string of integers in the form of a phone number
    // include space after closing parantheses of the "area code"
Examples 
    // [5, 1, 3, 6, 7, 8, 5, 5, 5, 5] 
        // "(513) 678-5555"
    //  [4, 3, 2, 1, 1, 1, 8, 9, 8, 9]
        // "(432) 111-8989"
Pseudocode 
    // function that takes in an array of integers
    // use template literals to place numbers in the correct positions
    // add the () space and - in the correct positions
    // return the formatted string
*/

// MY SOLUTION
function createPhoneNumber(numbers) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

console.log(createPhoneNumber([5, 1, 3, 6, 7, 8, 5, 5, 5, 5]), "(513) 678-5555");
console.log(createPhoneNumber([4, 3, 2, 1, 1, 1, 8, 9, 8, 9]), "(432) 111-8989");

// OTHER SOLUTIONS
function createPhoneNumber(numbers) {
    let format = "(xxx) xxx-xxxx";
    for (let i = 0; i < numbers.length; i++) {
      format = format.replace("x", numbers[i]);
    }
    return format;
}

function createPhoneNumber(numbers) {
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') '+ numbers.substring(3, 6)+ '-'+ numbers.substring(6);
}