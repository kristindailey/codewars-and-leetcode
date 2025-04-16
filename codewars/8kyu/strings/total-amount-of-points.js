/* CHALLENGE DESCRIPTION

Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponent's score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:
if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)

We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:
Our team always plays 10 matches in the championship.
0 <= x <= 4
0 <= y <= 4
*/

// MY SOLUTION
function points(games) {
    let totalPoints = 0;
  
    for (let i = 0; i < games.length; i++) {
      let [x, y] = games[i].split(":").map(Number);
      
      if (x > y) {
        totalPoints += 3;
      } else if (x === y) {
        totalPoints += 1;
      } else {
        totalPoints += 0;
      }
    }
  
    return totalPoints;
}

console.log(points(["45:45", "52:35", "31:49", "38:35", "42:42"]), 8);
console.log(points(["35:10", "28:14", "42:17", "31:21", "24:7"]), 15);
console.log(points(["24:17", "21:21", "14:28", "31:24", "17:17"]), 8);

// OTHER SOLUTIONS
function points(games) {
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      } else if (game[0] > game[2]) {
        total += 3;
      }
    });
    return total;
}

const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0);