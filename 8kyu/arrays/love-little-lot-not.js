/* CHALLENGE DESCRIPTION

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"

If there are more than 6 petals, you start over with "I love you." For 7 petals, "a little." And so on.

When the last petal was torn, there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
*/

// MY SOLUTION
function howMuchILoveYou(nbPetals) {
    const phrases = [
      "I love you", 
      "a little", 
      "a lot",
      "passionately",
      "madly",
      "not at all"
    ];
  
  const index = (nbPetals - 1) % phrases.length;
  
  return phrases[index];
}

console.log(howMuchILoveYou(7), "I love you");
console.log(howMuchILoveYou(4), "passionately");
console.log(howMuchILoveYou(6), "not at all");

// OTHER SOLUTIONS
const howMuchILoveYou = n => ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][(n - 1) % 6];

function howMuchILoveYou(n) {
  const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ];

  return phrases[(n - 1) % phrases.length];
}