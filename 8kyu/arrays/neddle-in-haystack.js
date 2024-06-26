/* CHALLENGE DESCRIPTION

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle."

After your function finds the needle, it should return a message (as a string) that says the following:

`found the needle at position ${index}`

Example (Input --> Output):

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/

// MY SOLUTION
function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return `found the needle at position ${i}`;
        }
    }
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]), "found the needle at position 5");
console.log(findNeedle(["needle", "junk", "hay"]), "found the needle at position 0");
console.log(findNeedle(["junk", "junk", "junk", "needle"]), "found the needle at position 3");

// OTHER SOLUTIONS
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf("needle")}`;
}

const findNeedle = haystack => `found the needle at position ${haystack.indexOf("needle")}`;