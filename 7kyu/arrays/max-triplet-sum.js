/* CHALLENGE DESCRIPTION

Task:
Given an array/list [] of n integers, find maximum triplet sum in the array without duplications.

Notes:
Array/list size is at least 3.
Array/list numbers could be a mixture of positives, negatives, and zeros.
Repetition of numbers in the array/list could occur, so duplications are not included when summing.

Input >> Output Examples:
maxTriSum([3, 2, 6, 8, 2, 3]) ==> return 17
Explanation:
As the triplet that maximize the sum [6,8,3] in order, their sum is 17.
Note: Duplications are not included when summing (i.e) the numbers added only once.

maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]) ==> return 18
Explanation:
As the triplet that maximize the sum [8, 6, 4] in order, their sum is 18.
Note: Duplications are not included when summing (i.e) the numbers added only once.

maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29]) ==> return 41
Explanation:
As the triplet that maximize the sum [12, 29, 0] in order, their sum is 41.
Note: Duplications are not included when summing (i.e) the numbers added only once.
*/

/* PREP
Parameters
    // array of integers
    // n is the number of integers
    // array will always contain at least 3 elements
    // account for positives, negatives, and zeros
Returns 
    // return the maximum sum of elements in array
    // duplicates may be present, but don't include duplicates when summing
Examples 
    // [3, 2, 6, 8, 2, 3]
        // 17
    //  [2, 1, 8, 0, 6, 4, 8, 6, 2, 4]
        // 18
Pseudocode 
    // function that takes in one parameter, array of integers
    // remove duplicates using a Set
    // sort the array in descending order
    // find the top three integers
    // sum the top three integers
    // return the sum
*/

// MY SOLUTION
function returnMaxTriSum(arr) {
    const uniqueNums = [...new Set(arr)];
    const sortDesc = uniqueNums.sort((a, b) => b - a);
    const topThree = sortDesc.slice(0, 3);
    const topSum = topThree.reduce((a, b) => a + b);
    return topSum;
}

// OTHER SOLUTIONS
function maxTriSum(numbers) {
    return ([...new Set(numbers)]).sort((a, b) => a - b).slice(-3).reduce((a, b) => a + b);
}

const maxTriSum = numbers => {
    const [a, b, c, ...rest] = [...new Set([...numbers])].sort((a, b) => b - a);
    return a + b + c;
};

function maxTriSum(numbers) {
    return [...new Set(numbers)]
      .sort((a, b) => a - b)
      .slice(-3)
      .reduce((acc, el) => acc + el);
}

function maxTriSum(numbers) {
    numbers.sort((a, b) => b - a);
    let arr = numbers.filter((e, i) => numbers.indexOf(e) === i);
    return arr[0] + arr[1] + arr[2];
}