/* CHALLENGE DESCRIPTION
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

For example, if we have an array [1, 2, 3, 4, 6, 7, 8], then 1, 2, 3, and 4 are all consecutive but 6 is not. So that's the first non-consecutive number.

If the whole array is consecutive then return null.

The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
*/

// return first non consec number, return null if whole array is consec
// takes in an arr, at least 2 elements, will always be a number, will always be unique elements, will always be in ascending order, can be positive or negative

// MY SOLUTION
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return arr[i];
        }
    }
    return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]), 6);
console.log(firstNonConsecutive([0, 1, 2, 10, 3]), 10);
console.log(firstNonConsecutive([5, 6, 7, 9, 10]), 9);

// OTHER SOLUTIONS
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1];
      }
    }
    return null;
}

function firstNonConsecutive(arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);
    return (Number.isInteger(result)) ? result : null;
}

const firstNonConsecutive = arr => [...arr.filter((n, i) => !arr.includes(n - 1)), null][1];