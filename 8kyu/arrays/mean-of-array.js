/* CHALLENGE DESCRIPTION

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

/* PREP
Parameters
    // arr, never empty
Returns
    // average of array, rounded down to nearest integer
Examples
    // [100, 50, 88, 90]
        // 82
    // [65, 67, 74, 80]
        // 71
    // [100, 99, 95, 88]
        // 95
Psuedocode
    // function that takes in one param, arr
    // sum all elements of the array
    // divide by the length of the array
    // apply Math.floor() to the average
    // return the average
*/

// MY SOLUTION
const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);         

// OTHER SOLUTION
function getAverage(marks) {
    return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}