/* CHALLENGE DESCRIPTION

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// function that takes in a str, upcaps and lowcaps, only letters from a to z
// return str, repeating each char x times based on (index + 1) with "-" in between each char
    // first instance of char should be capped in returned str

// MY SOLUTION
function accum(str) {
    // split str to arr
    // map over the arr
    // turn the char to uppercase
    // add a lowercase char repeated index num of times
    // join the str with a hyphen
    // return the str
    return str
        .split("")
        .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
        .join("-");
}

console.log(accum("abcd"), "A-Bb-Ccc-Dddd");
console.log(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
console.log(accum("cwAt"), "C-Ww-Aaa-Tttt");

// OTHER SOLUTION
function accum(s) {
    let array = [];
    for (let i = 0; i < s.length; i++) {
      array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
    }
    return array.join("-");
}