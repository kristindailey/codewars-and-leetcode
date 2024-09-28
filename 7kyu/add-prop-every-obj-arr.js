/* CHALLENGE DESCRIPTION

Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

For example:
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

After adding the property the result should be:
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];

The questions array is already defined for you and is not the same as the one in the example.
*/

/* PREP
Parameters
    // array of objects
Returns 
    // return array with new property added to each object
Examples 
    // let questions = [{question: "What's the currency of the USA?", choices: ["US dollar", "Ruble", "Horses", "Gold"], corAnswer: 0}];
        // let questions = [{question: "What's the currency of the USA?", choices: ["US dollar", "Ruble", "Horses", "Gold"], corAnswer: 0, usersAnswer: null}];
    //  let questions = [{question: "Where was the American Declaration of Independence signed?", choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"], corAnswer: 0}];
        // let questions = [{question: "Where was the American Declaration of Independence signed?", choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"], corAnswer: 0, usersAnswer: null}];
Pseudocode 
    // you're given an array of objects
    // apply the forEach method to the array of objects
    // for each object, add the usersAnswer property and set its value to null
    // return the array of objects
*/

// MY SOLUTION
questions.forEach(question => question.usersAnswer = null);