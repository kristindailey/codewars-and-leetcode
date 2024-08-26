/* CHALLENGE DESCRIPTION

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

/* PREP
Parameters
    // array of strings
Returns 
    // sorted array of strings, ordered shortest to longest
Examples
    // console.log(sortByLength(["apple", "orange", "banana", "kiwi"])) 
        // ["kiwi", "apple", "orange", "banana"]
    // console.log(sortByLength(["green", "red", "purple"]))  
        // ["red", "green", "purple"]
Pseudocode 
    // function takes in array parameter
    // sort the strings from shortest to longest
    // return the array of strings
*/

// MY SOLUTION
const sortByLength = array => array.sort((a, b) => a.length - b.length);