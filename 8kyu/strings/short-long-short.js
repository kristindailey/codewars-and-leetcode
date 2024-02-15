/* CHALLENGE DESCRIPTION

Given 2 strings, a and b, return a string of the form short + long + short, with the shorter string on the outside and the longer string on the inside. 

The strings will not be the same length, but they may be empty.

For example: (Input1, Input2) --> output
("1", "22") --> "1221"
("22", "1") --> "1221"
*/

// function that takes in 2 str, a and b, may be empty
// return concatenanted string `${shortStr}${longStr}${shortStr}`
// there will always be a "winner" of length, not same length

// MY SOLUTION
function shortLongShort(a, b) {
    // find length of a and length of b
    // if a.length > b.length, return `${b}${a}${b}`
    // else return `${a}${b}${a}`
    if (a.length > b.length) {
        return `${b}${a}${b}`;
    } else {
        return `${a}${b}${a}`;
    }
}

console.log(shortLongShort("hello", "hi"), "hihellohi");
console.log(shortLongShort("wow", "ee"), "eewowee");
console.log(shortLongShort("", "ow"), "ow");

// OTHER SOLUTIONS
const shortLongShort = (a, b) => a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;

const shortLongShort = (a, b) => a.length > b.length ? b + a + b : a + b + a;