/* CHALLENGE DESCRIPTION

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organizing.

Your task is to return an array where each object will have a new property "greeting" with the following string value:
Hi <firstName>, what do you like the most about <language>?

For example, given the following input array:
let list1 = [{firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'}, {firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python'}, {firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby'}];

Your function should return the following array:
[{firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', greeting: 'Hi Sofia, what do you like the most about Java?'}, {firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python', greeting: 'Hi Lukas, what do you like the most about Python?'}, {firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby', greeting: 'Hi Madison, what do you like the most about Ruby'}];

Notes:
The order of the properties in the objects does not matter.
The input array will always be valid and formatted as in the example above.
*/

/* PREP
Parameters
    // array of objects
Returns 
    // return array where each object has a new property, greeting, that is the following: "Hi <object.firstName>, what do you like most about <object.language>?"
Examples 
    // [{firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'}, {firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python'}, {firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby'}]
        // [{firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', greeting: 'Hi Sofia, what do you like the most about Java?'}, {firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python', greeting: 'Hi Lukas, what do you like the most about Python?'}, {firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby', greeting: 'Hi Madison, what do you like the most about Ruby'}]
    //  [{firstName: 'Carl', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java'}, {firstName: 'Jimmy', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python'}, {firstName: 'Sheen', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby'}]
        // [{firstName: 'Carl', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', greeting: 'Hi Carl, what do you like the most about Java?'}, {firstName: 'Jimmy', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python', greeting: 'Hi Jimmy, what do you like the most about Python?'}, {firstName: 'Sheen', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby', greeting: 'Hi Sheen, what do you like the most about Ruby'}]
Pseudocode 
    // function that takes one parameter, array of objects
    // add greeting property to each object in the array
    // use template strings to ensure the correct string is added to each object
*/

// MY SOLUTION
const greetDevelopers = list => list.map(obj => ({...obj, greeting: `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`}));

// OTHER SOLUTIONS
function greetDevelopers(list) {
    list.forEach(developer => {
      developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;    
    });
    return list;
}

const greetDevelopers = list => list.forEach(developer => developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`);  

function greetDevelopers(list) {
    return list.filter(ele => ele.greeting = `Hi ${ele.firstName}, what do you like the most about ${ele.language}?`);
}