/* CHALLENGE DESCRIPTION

JavaScript arrays support a filter function. Use the filter functionality to complete the function given.

The solution should work like the following:

getEvenNumbers([2, 4, 5, 6]) // should == [2, 4, 6]
*/

/* PREP
Parameters
    // array of integers
Returns 
    // return even elements only
Examples 
    // [1, 2, 3, 4]
        // [2, 4]
    //  [5, 6, 7, 8, 9, 10]
        // [6, 8, 10]
Pseudocode 
    // function that takes in one parameter, array of integers
    // filter the array for even elements only
    // return the array
*/

// MY SOLUTION
const returnEvenElements = array => array.filter(element => element % 2 === 0);

console.log(returnEvenElements([1, 2, 3, 4]), [2, 4]);
console.log(returnEvenElements([5, 6, 7, 8, 9, 10]), [6, 8, 10]);

// OTHER SOLUTION
const getEvenNumbers = numbersArray => numbersArray.filter(x => !(x % 2));