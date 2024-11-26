// CHALLENGE DESCRIPTION
// I'm new to coding and now I want to get the sum of two arrays. Actually, the sum of all their elements. I'll appreciate your help.
// P.S. Each array includes only integer numbers. Output is a number too.

// function that takes in two arrays
// return the sum of the two arrays

// arr1, arr2 - integer numbers, whole numbers
// return sum - integer

// MY SOLUTION
function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
      sum += arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
      sum += arr2[j];
    }
    return sum;
}

// OTHER SOLUTIONS
const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a, b) => a + b, 0);

const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((a, b) => a + b, 0);

const arrayPlusArray = (arr1, arr2) => arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0);

function arrayPlusArray(arr1, arr2) {
  let sum1 = arr1.reduce((a, b) => a + b, 0);
  let sum2 = arr2.reduce((a, b) => a + b, 0);
  return sum1 + sum2;
}