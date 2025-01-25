/* CHALLENGE DESCRIPTION

Write a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
	     
Case:                     Return:
name equals owner	->    "Hello boss"
otherwise	        ->    "Hello guest"
*/

/* PREP
Parameters
    // two parameters, name and owner
Returns 
    // "Hello boss" if name === owner
    // else "Hello guest"
Examples 
    // ("Julie", "Robert")
        // "Hello guest"
    //  ("Julie", "Julie")
        // "Hello boss"
Pseudocode 
    // function that takes in two parameters, name and owner (strings)
    // if name === owner return "Hello boss"
    // else return "Hello guest"
*/

// MY SOLUTION
const returnGreeting = (name, owner) => name === owner ? "Hello boss" : "Hello guest";

// OTHER SOLUTIONS
const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;