/* CHALLENGE DESCRIPTION

Write a function that returns the number of occurrences of an element in an array.

This function will be defined as a property of an array with the help of the method Object.defineProperty, which allows one to define a new method directly on the object.

Examples
let arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences(3) === 1;
*/

/* PREP
Parameters
    // element that is an integer
Returns 
    // return number of occurences of that element
Examples 
    // [1, 2, 2, 3, 4]
        // arr.numberOfOccurrences(2) === 2
    //  [5, 6, 7, 8, 9, 10]
        // arr.numberOfOccurrences(10) === 1
Pseudocode 
    // inside the method, take one argument (element)
    // filter the array for common elements
    // count the elements using .length
    // return the count
*/

// MY SOLUTION
Object.defineProperty(Array.prototype, "numberOfOccurrences", { 
    value: function numberOfOccurrences(element) {
      return this.filter(el => el === element).length;
    }
});

// OTHER SOLUTIONS
Array.prototype.numberOfOccurrences = function(f) {
    return this.filter(i => i === f).length;
}

Array.prototype.numberOfOccurrences = function(search) {
    return this.filter(function(num) { 
      return search === num;
      }).length;
}

Array.prototype.numberOfOccurrences = function(element) {
    return this.reduce(function(acc, current) {
      return current === element ? acc + 1 : acc;
    }, 0);
}