/* CHALLENGE DESCRIPTION

Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning the text of old novels to your database. 

At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. 

Your program will take in a string and clean out all numeric characters and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

Examples (input -> output):
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
*/

// function that takes in string
// return string minus any integers

// MY SOLUTION
function removeInt(str) {
    // declare result var
    let result = "";
    // loop through str to check if char is not an integer
    for (let char of str) {
        if (!"0123456789".includes(char)) {
            // if not an integer, add it to result
            result += char;
        }
    }
    // return the result
    return result;
}

console.log(removeInt('! !'), '! !');
console.log(removeInt('123456789'), '');
console.log(removeInt('This looks5 grea8t!'), 'This looks great!');

// OTHER SOLUTION
function stringClean(s) {
    return s.split('').filter((n) => n != parseInt(n)).join('');
}