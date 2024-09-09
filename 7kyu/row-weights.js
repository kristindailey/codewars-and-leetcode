/* CHALLENGE DESCRIPTION

Scenario:
Several people are standing in a row divided into two teams.
The first person goes into team 1. The second goes into team 2. The third goes into team 1 and so on.

Task:
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes:
Array size is at least 1.
All numbers will be positive.

Input >> Output Examples:
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/

/* PREP
Parameters
    // array of integers
    // all elements will be positive
    // array size will be at least 1, non-empty
Returns 
    // return a new array of two elements
    // the first element should be the sum of all team 1 elements
    // the second element should be the sum of all team 2 elements
Examples 
    // [1, 2, 3, 4]
        // [4, 6]
    //  [5, 6, 7, 8, 9, 10]
        // [21, 24]
Pseudocode 
    // function that takes in one parameter, array of integers
    // if index of element is even, add the elements together
    // if index of element is odd, add the elements together
    // return the accumulator of both odd elements (t1) and even elements (t2), starting at [0, 0]
*/

// MY SOLUTION
function rowWeights(array) {
    return array.reduce((acc, num, index) => {
        index % 2 === 0 ? acc[0] += num : acc[1] += num;
        return acc;
    }, [0, 0]);
}

// OTHER SOLUTIONS
function rowWeights(array) {
    let t1 = array.filter((x, i) => i % 2 === 0).reduce((a, b) => a + b, 0);
    let t2 = array.filter((x, i) => i % 2 !== 0).reduce((a, b) => a + b, 0);
    return [t1, t2];
}

function rowWeights(array){
    let arr = [0, 0];
    for (let i = 0; i < array.length; i++) {
      i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
}