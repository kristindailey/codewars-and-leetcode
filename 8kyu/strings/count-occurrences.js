/* CHALLENGE DESCRIPTION

Write a function that accepts a string and a single character, and returns an integer of the count of occurrences the second argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", 'o')  =>  1
("Hello", 'l')  =>  2
("", 'z')       =>  0

Notes:
The first argument can be an empty string.
In languages with no distinct character data type, the second argument will be a string of length 1.
*/

/* PREP
Parameters
    // string, single char
    // first argument can be empty
Returns
    // return sum of specified chars in string
Examples
    // ("Hello", 'o')
        //  1
    // ("Hello", 'l')
        //  2
    // ("", "z")
        // 0
Psuedocode
    // function that takes in two parameters, (1) string, (2) single char
    // set the string to lowercase to account for uppercase and lowercase inputs
    // split the string
    // filter the string by the char/letter
    // count the length of running the filter
*/

// MY SOLUTION
const strCount = (str, letter) => str.toLowerCase().split("").filter(l => l === letter).length;

console.log(strCount("Hello", "o"), 1);
console.log(strCount("Hello", "l"), 2);
console.log(strCount("", "z"), 0);

// OTHER SOLUTIONS
function strCount(str, letter) {  
    return str.split(letter).length - 1;
}

function strCount(str, letter){  
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) count++;
    }
    return count;
}