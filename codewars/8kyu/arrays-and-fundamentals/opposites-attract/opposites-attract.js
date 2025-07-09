/* CHALLENGE DESCRIPTION

Timmy and Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals, it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

// MY SOLUTION
function isInLove(flower1, flower2) {
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
      return true;
    } else if (flower2 % 2 === 0 && flower1 % 2 !== 0) {
      return true;
    } else {
      return false;
    }
}

console.log(isInLove(4, 1), true);
console.log(isInLove(5, 5), false);
console.log(isInLove(0, 1), true);

// OTHER SOLUTION
const lovefunc = (flower1, flower2) => flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0 ? true : false;