/* CHALLENGE DESCRIPTION

You will be given an array of objects representing data about developers who have signed up to attend the coding meetup that you are organizing for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

let list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

Your function should return number 1.

If there are no JavaScript developers from Europe, your function should return 0.

Notes:
The format of the strings will always be "Europe" and "JavaScript."
Data will always be valid and uniform as in the example above.
*/

/* PREP
Parameters
    // array of objects
Returns 
    // return number of JS developers from Europe
    // if none, return 0
Examples 
    // [{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' }, { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' }, { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' }, { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }]
        // 1
    //  [{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'North America', age: 19, language: 'JavaScript' }, { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' }, { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' }, { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }]
        // 0
Pseudocode 
    // function that takes in one parameter, array of objects
    // declare sum/result variable
    // loop through array, searching array for elements that contain "JavaScript" && "Europe"
    // if element contains both, add it to the sum
    // return the sum 
*/

// MY SOLUTION
function returnEuroDevs(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].continent === "Europe" && arr[i].language === "JavaScript") result += 1;
    }
    return result;
}

// OTHER SOLUTIONS
const countDevelopers = array => array.filter(el => el.continent === "Europe" && el.language === "JavaScript").length;

function countDevelopers(list) {
    return list.reduce((count, dev) => (dev.continent === "Europe" && dev.language === "JavaScript") ? count + 1 : count, 0);
}