/* CHALLENGE DESCRIPTION

You will be given a list of strings. You must sort it alphabetically (case-sensitive and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

// MY SOLUTION
const twoSort = s => s.sort()[0].split("").join("***");

console.log(twoSort(["Jan", "March", "Feb"]), "F***e***b***");
console.log(twoSort(["Aloe", "Oil", "Lotion"]), "A***l***o***e***");
console.log(twoSort(["wow", "ugh", "ew"]), "e***w***");

// OTHER SOLUTION
const two_Sort = s => [...s.sort()[0]].join("***");