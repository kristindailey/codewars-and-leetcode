/* CHALLENGE DESCRIPTION

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes:
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// str - chars, symbols, spaces, empty?
// return string of "(" and ")"
    // if char appears 1 time, "("
    // if char appears 2+ times, ")"
    // ignore cap when determining if dupe

// MY SOLUTION -- IN PROGRESS
function dupeEncoder(str) {
    // make str lowercase
    // 
    // 
}

dupeEncoder("din"); // "((("
dupeEncoder(""); // ""
dupeEncoder("Success"); // ")())())"
dupeEncoder("(( @"); // "))(("

// OTHER SOLUTIONS