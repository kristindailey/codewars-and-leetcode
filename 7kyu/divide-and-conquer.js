/* CHALLENGE DESCRIPTION

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

/* PREP
Parameters
    // array of numbers and strings
Returns 
    // return total sum number
Examples 
    // [1, "2", 3, "4"]
        // -2
    //  ["5", 6, 7, 8, 9, 10]
        // 35
Pseudocode 
    // declare a sum variable 
    // loop through the array
    // if element is a number, add it to the sum
    // if element is a string, subbract it from the sum
    // return the sum
*/

// MY SOLUTION
function divCon(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === "number") sum += x[i];
        else if (typeof x[i] === "string") sum -= x[i];
    }
    return sum;
}

// OTHER SOLUTION
function divCon(x) {
    return x.reduce((acc, cur) => typeof cur === "number" ? acc + cur : acc - Number(cur), 0);
}