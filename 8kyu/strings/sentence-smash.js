/* CHALLENGE DESCRIPTION

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 

You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 

Be careful: There shouldn't be a space at the beginning or the end of the sentence!

Example:
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

// MY SOLUTION
function joinWords(words) {
    return words.join(" ");
}

console.log(joinWords(['hello', 'world', 'this', 'is', 'great']), "hello world this is great");
console.log(joinWords(["I", "love", "you"]), "I love you");
console.log(joinWords(["Hello", "world"]), "Hello world");

// OTHER SOLUTIONS
const smash = words => words.join(" ");