/* CHALLENGE DESCRIPTION

Create a method that takes as input a name, city, and state to welcome a person. Note: The name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:
['John', 'Smith'], 'Phoenix', 'Arizona'

This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/

// function that takes in arr, string, string
    // array.length will vary
// return str
    // `Hello, ${fullName}! Welcome to ${city}, ${state}!`

// MY SOLUTION
const returnWelcome = (name, city, state) => `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;

console.log(returnWelcome(["Taylor", "Swift"], "Vancouver", "Canada"));
console.log(returnWelcome(["Cadbury", "Wellington", "Dailey"], "Seattle", "Washington"));
console.log(returnWelcome(["Beyonce"], "Houston", "Texas"));