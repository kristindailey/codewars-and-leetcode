/* CHALLENGE DESCRIPTION

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

// MY SOLUTION
const check = (a, x) => a.includes(x) ? true : false;

// OTHER SOLUTIONS
const checkA = (a, x) => a.includes(x);

function check(a, x) {
    return a.includes(x);
}