/* CHALLENGE DESCRIPTION

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values, however, if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

/* PREP
Parameters
    // array limit (1 to limit)/length represented by N
    // N will never be less than 1
Returns 
    // return an array
    // replace multiples of 3 with "Fizz"
    // replace multiples of 5 with "Buzz"
    // replace multiples of 3 & 5 with "FizzBuzz"
Examples 
    // [1, 2, 3, 4, 5]
        // [1, 2, "Fizz", 4, "Buzz"]
    //  [10, 11, 12, 13, 14, 15]
        // ["Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
Pseudocode 
    // function that takes in one parameter, limit/length
    // declare an empty arr variable
    // use a for loop to loop through numbers 1 through n
    // if divis by 3 and 5, push "FizzBuzz" in place of number
    // if divis by 3, push "Fizz" in place of number
    // if divis by 5, push "Buzz" in place of number
    // else push the number
    // return the array
*/

// MY SOLUTION
function fizzBuzz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) arr.push("FizzBuzz");
        else if (i % 3 === 0) arr.push("Fizz");
        else if (i % 5 === 0) arr.push("Buzz");
        else arr.push(i);
    }
    return arr;
}

console.log(fizzBuzz(3), [1, 2, "Fizz"]);
console.log(fizzBuzz(5), [1, 2, "Fizz", 4, "Buzz"]);
console.log(fizzBuzz(15), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);