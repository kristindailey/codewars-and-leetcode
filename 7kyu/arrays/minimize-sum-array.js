/* CHALLENGE DESCRIPTION

Task:
Given an array of integers, find the minimum sum which is obtained from summing each two integers product.

Notes:
Array/list will contain positives only.
Array/list will always have even size.

Input >> Output Examples:
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product,  5*2 + 3*4 = 22

minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product,  26*3 + 24*6 + 12*10 = 342

minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product,  9*0 + 8*2 +7*4 +6*5 = 74
*/

// MY SOLUTION
function returnMinSum(arr) {
    arr.sort((a, b) => a - b, 0);
    let minSum = 0;
    for (let i = 0; i < arr.length / 2; i++) {
        minSum += arr[i] * arr[arr.length - 1 - i];
    }
    return minSum;
}

console.log(returnMinSum([5, 4, 2, 3]), 22);
console.log(returnMinSum([12, 6, 10, 26, 3, 24]), 342);

// OTHER SOLUTIONS
function minSum(arr) {
    return arr.sort((a, b) => a - b)
              .slice(0, arr.length / 2)
              .reduce((acc,curr,index) => acc += curr * arr[arr.length - index - 1], 0);
}

const minSum = arr => arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);