/* CHALLENGE DESCRIPTION

Character recognition software is widely used to digitize printed texts. Thus, the texts can be edited, searched, and stored on a computer.

When documents, especially pretty old ones written with a typewriter, are digitized, character recognition software often makes mistakes.

Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1

The test cases contain numbers only by mistake.
*/

// function that takes in str, contains nums (by mistake) and cap letters
    // replace 5 with "S"
    // replace 0 with "O"
    // replace 1 with "I"
// return corrected str

// MY SOLUTION
// replace all instances of 5 with "S"
// replace all instances of 0 with "O"
// replace all instances of 1 with "I"
// return correct str
const correctStr = str => str.replaceAll("5", "S").replaceAll("0", "O").replaceAll("1", "I");

console.log(correctStr("HELL0"), "HELLO");
console.log(correctStr("5155Y"), "SISSY");
console.log(correctStr("00P5"), "OOPS");

// OTHER SOLUTION
function correct(string) {
	return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a] || a).join('');
}