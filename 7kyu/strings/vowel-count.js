/* CHALLENGE DESCRIPTION

Return the number of vowels in the given string.

We will consider a, e, i, o, u as vowels for this kata (but not y).

The input string will only consist of lowercase letters and/or spaces.
*/

/* PREP
Parameters
    // string of letters
    // string will consist only of lower case and/or spaces
Returns 
    // number of vowels in the string
Examples 
    // "hello"
        // 2
    //  "my name is"
        // 3
Pseudocode 
    // function that takes in a string
    // convert string to array
    // filter array for vowels
    // use array.length for the count of vowels
    // return the count of vowels
*/

// MY SOLUTION
const returnVowelCount = str => Array.from(str).filter(letter => "aeiou".includes(letter)).length;

// OTHER SOLUTIONS
function getCount(str) {
    return str.split("").filter(c => "aeiou".includes(c)).length;
}

function getCount(str) {
    let vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}