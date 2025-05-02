/* CHALLENGE DESCRIPTION

You're at the zoo. All the meerkats look weird. Something has gone terribly wrong. Someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to rearrange the array so that the animal is the right way around (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests. You have to change the element positions with the same exact logic.
*/

// MY SOLUTION
const fixTheMeerkat = arr => [arr[2], arr[1], arr[0]];

console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);

// OTHER SOLUTIONS
const fixMeer = arr => arr.reverse();

const fixTheMeer = ([tail, body, head]) => [head, body, tail];