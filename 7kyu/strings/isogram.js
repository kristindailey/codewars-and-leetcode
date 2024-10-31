/* CHALLENGE DESCRIPTION

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Examples (Input --> Output):
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// function that takes one param, str
    // str can be empty = true
    // isogram = no repeating letters in the string
    // ignore cap
// return true/false if str = isogram

// MY SOLUTION
function isIsogram(str) {
    // turn str to lowercase
    str = str.toLowerCase();
    // loop through str
    // if there is a char dupe, return false
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str.charAt(i), i + 1) >= 0) {
            return false;
        }
    }
    // return true
    return true;
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("aba"), false);
console.log(isIsogram("moOse"), false);

// OTHER SOLUTIONS
function isIsogram(str) {
	return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str) {
    return !str || (str.length === new Set(str.toLowerCase()).size);
}