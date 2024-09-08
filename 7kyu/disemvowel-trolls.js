/* CHALLENGE DESCRIPTION (STRING LADDER)

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: For this kata y isn't considered a vowel.
*/

/* PREP
Parameters
    // string
    // string may include uppercase and lowercase
Returns 
    // return new string with no vowels
    // y is not considered a vowel
Examples 
    // "That is crazy, silly"
        // "Tht s crzy slly"
    //  "Hello world"
        // "Hll wrld"
Pseudocode 
    // function that takes in a string
    // turn string into array
    // filter out vowels in array, including uppercase vowels
    // join the array
    // return the string of consonants
*/

// MY SOLUTION
const returnNoVowels = str => Array.from(str).filter(letter => !("aeiouAEIOU".includes(letter))).join("");

// OTHER SOLUTION
function disemvowel(str) {
    const vowels = 'aeiou';
    return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('');
}