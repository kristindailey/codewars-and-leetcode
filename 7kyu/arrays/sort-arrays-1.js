/* CHALLENGE DESCRIPTION

Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

*/

/* PREP
Parameters
    // array
Returns 
    // return array in lexicographical order
Examples g
    // ["hello", "apple", "carrot", "juice"]
        // ["apple", "carrot", "hello", "juice"]
    //  [10, 5, 9, 7, 6, 2]
        // [10, 2, 5, 6, 7, 9]
Pseudocode 
    // function that takes in one parameter, array
    // sort the array
    // return the sorted array
*/

// MY SOLUTION
const sortme = names => names.sort();

console.log(sortme(["hello", "apple", "carrot", "juice"]), ["apple", "carrot", "hello", "juice"]);
console.log(sortme([10, 5, 9, 7, 6, 2]), [10, 2, 5, 6, 7, 9]);