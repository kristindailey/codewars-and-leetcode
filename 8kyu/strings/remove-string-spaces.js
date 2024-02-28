/* CHALLENGE DESCRIPTION

Write a function that removes the spaces from the string. Then return the resultant string.

Examples: Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
*/

// MY SOLUTION
function removeSpaces(str) {
    return str.split(" ").join("");
}

console.log(removeSpaces("8 j 8   mBliB8g  imjB8B8  jl  B"), "8j8mBliB8gimjB8B8jlB");
console.log(removeSpaces("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"), "88Bifk8hB8BB8BBBB888chl8BhBfd");
console.log(removeSpaces("8aaaaa dddd r     "), "8aaaaaddddr");

// OTHER SOLUTIONS
const noSpace = x => x.split(" ").join("");

function noSpace(x) {
    return x.replace(/\s/g, '');
}

function noSpace(x) {
    return x.replaceAll(" ", "");
}