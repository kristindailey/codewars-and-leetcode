/* CHALLENGE DESCRIPTION

In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives.
The start number will always be smaller than the end number. Both numbers can be also negative!
*/

/* PREP
Parameters
    // two integers, start number, end number
    // start number will always be smaller than the end number
    // both numbers can be negative
    // both numbers are inclusive
Returns 
    // return count of all numbers in the array excluding numbers with 5 in them
    // result count may include fives
Examples 
    // 2, 5
        // [2, 3, 4]
    //  5, 15
        // [6, 7, 8, 9, 10, 11, 12, 13, 14]
Pseudocode 
    // function that takes in two parameters (start, end)
    // make array of numbers from start to end
    // search array of numbers for those that include 5
    // remove numbers that include 5 from the array
    // return count of numbers in the sorted array
*/

// MY SOLUTION
function dontGiveMeFive(start, end) {
    let arr = Array.from({length: end - start + 1}, (_, i) => start + i);
    let result = arr.filter(num => !num.toString().includes("5"));
    return result.length;
}

// OTHER SOLTIONS
function dontGiveMeFive(start, end) {
    let res = [];
    for (let i = start; i <= end; i++) {
      if (!i.toString().includes('5')) res.push(i);
    }
    return res.length;
}

function dontGiveMeFive(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) count++;
    }
    return count;
}