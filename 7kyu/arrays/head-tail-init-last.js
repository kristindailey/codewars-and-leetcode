/* CHALLENGE DESCRIPTION

Haskell has some useful functions for dealing with lists:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
Here's how I expect the functions to be called in your language:

head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
*/

/* PREP
Parameters
    // four functions that take in an array of integers
    // Do not edit the original array.
Returns 
    // function head: return first element in array
    // function tail: return all elements minus the first element in array
    // function init: return all elements minus the last element in array
    // function last: return the last element in the array
Examples 
    // head([1, 2, 3, 4])
        // 1
    // tail([1, 2, 3, 4])
        // [2, 3, 4]
    // init([1, 2, 3, 4])
        // [1, 2, 3]
    // last([1, 2, 3, 4])
        // 4
Pseudocode 
    // head
        // function that takes in an array
        // return the first element of the array
    // tail
        // function that takes in an array
        // return all elements except element[0]
        // do not edit original array
    // init
        // function that takes in an array
        // return all elements except last element
        // do not edit original array
    // last
        // function that takes in an array
        // return last element in the array
*/

// MY SOLUTION
const head = arr => arr[0];
const tail = arr => arr.slice(1);
const init = arr => arr.slice(0, -1);
const last = arr => arr[arr.length - 1];