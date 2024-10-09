/* CHALLENGE DESCRIPTION (ARRAY LADDER)

JavaScript arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
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

// OTHER SOLUTIONS
const getEvenNumbers = numbersArray => numbersArray.filter(x => !(x % 2));