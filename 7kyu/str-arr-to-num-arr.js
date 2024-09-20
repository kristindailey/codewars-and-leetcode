/* CHALLENGE DESCRIPTION

Oh no!
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/

/* PREP
Parameters
    // array of strings
    // elements can be floats
Returns 
    // return array of numbers
Examples 
    // ["1", "2", "3", "4"]
        // [1, 2, 3, 4]
    //  ["5.5", "6.6", "7.7"]
        // ["5.5", "6.6", "7.7"]
Pseudocode 
    // function that takes in one parameter, array of strings
    // map the array and turn each element into a number
    // return the array
*/

// MY SOLUTION
const toNumberArray = stringarray => stringarray.map(parseFloat);

// OTHER SOLUTIONS
const toNumArray = stringarray => stringarray.map(Number);

const returnNumArr = stringarray => stringarray.map(str => +str);
