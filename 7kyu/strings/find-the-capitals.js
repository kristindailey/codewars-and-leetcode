/* CHALLENGE DESCRIPTION

Write a function that takes a single non-empty string of only lowercase and uppercase letters as its argument and returns an ordered list containing the indices of all uppercase letters in the string.

Example: (Input --> Output)
"CodEWaRs" --> [0, 3, 4, 6]
*/

/* PREP
Parameters
    // single string (word), never empty
Returns 
    // array of indices of capital letters in the string
Examples
    // "HeLLo"
        // [0, 2, 3]
    //  "GooDbyE"
        // [0, 3, 6]
Pseudocode 
    // function that takes in string
    // turn string into array
    // accumulate indices of uppercase letters
    // return array of indices
*/

// MY SOLUTION
const findCapitals = function(word) {
    return word.split("").reduce((indices, char, index) => {
        if (char === char.toUpperCase()) indices.push(index);
        return indices;
    }, []);
};

// OTHER SOLUTION
const capitals = function(word) {
    let caps = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) caps.push(i);
    }
    return caps;
}