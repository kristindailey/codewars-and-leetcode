/* CHALLENGE DESCRIPTION

Task:
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60 in descending order of the scores.

Note: The scores will always be unique (so no duplicate values).

Examples:
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

/* PREP
Parameters
    // object
Returns 
    // return array of language names if score >= 60
    // language names should be in descending order of scores
    // return empty array if no score >= 60
Examples 
    // {"C++": 50, "ASM": 10, "Haskell": 20}
        // []
    //  {"Java": 10, "Ruby": 80, "Python": 65}
        // ["Ruby", "Python"]
Pseudocode 
    // function that takes in one parameter, an object
    // declare a new array variable
    // turn object into array of arrays
    // loop through array to check if the [1] element in each array is >= 60
    // if so, push the elements to the new array
    // sory the new array in descending order
    // return the new array, returning only language names
*/

// MY SOLUTION
function myLanguages(results) {
    let newArr = [];
    let objToArr = Object.keys(results).map(key => [key, results[key]]);
    for (let i = 0; i < objToArr.length; i++) {
        if (objToArr[i][1] >= 60) newArr.push(objToArr[i]);
    }
    newArr.sort((a, b) => b[1] - a[1]);
    return newArr.map(element => element[0]);
}

// OTHER SOLUTIONS
function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a, b) => results[b] - results[a]);
}

const myLanguages = results => Object.entries(results)
  .filter(([name, points]) => points >= 60)
  .sort(([name1, points1], [name2, points2]) => points2 - points1)
  .map(([name, points]) => name);

function myLanguages(results) {
    return Object.entries(results).filter(el => el[1] >= 60).sort((a, b) => b[1] - a[1]).map(item => item[0]);
}