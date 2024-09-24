/* CHALLENGE DESCRIPTION

Write a function that flattens an array of array objects into a flat array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/ 

/* PREP
Parameters
    // array of arrays
Returns 
    // return a flattened array
    // one level of flattening only
Examples 
    // [[1,2,3],["a","b","c"],[1,2,3]]
        // [1,2,3,"a","b","c",1,2,3]
    //  [[[1,2,3]]]
        // [[1,2,3]]
Pseudocode 
    // function that takes in one parameter, array of arrays
    // apply the flatten method to the array
    // return the array
*/

// MY SOLUTION
const flatten = array => array.flat();

// OTHER SOLUTION
const flattenArr = (array) => [].concat(...array);