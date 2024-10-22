/* CHALLENGE DESCRIPTION

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

// str - chars, symbols, spaces, empty?
// return string of "(" and ")"
    // if char appears 1 time, "("
    // if char appears 2+ times, ")"
    // ignore cap when determining if dupe

// MY SOLUTION
function dupeEncoder(str) {
    // declare var for new str
    let result = "";
    // make str lowercase
    // split str into arr, each char = element
    const arr = str.toLowerCase().split("");
    // loop through arr
    // if arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]), add "("
    // else add ")"
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) result += "(";
        else result += ")";
    }
    // return the new string
    return result;
}

dupeEncoder("din"); // "((("
dupeEncoder(""); // ""
dupeEncoder("Success"); // ")())())"
dupeEncoder("(( @"); // "))(("

// OTHER SOLUTION
function duplicateEncode(word) {
    return word
      .toLowerCase()
      .split("")
      .map((a, i, w) => w.indexOf(a) === w.lastIndexOf(a) ? "(" : ")")
      .join("");
}