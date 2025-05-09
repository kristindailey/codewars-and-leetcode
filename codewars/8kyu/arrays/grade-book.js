/* CHALLENGE DESCRIPTION
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade:
90 <= score <= 100 "A"
80 <= score < 90	 "B"
70 <= score < 80	 "C"
60 <= score < 70	 "D"
0 <= score < 60	   "F"
*/

// MY SOLUTION
function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3;
    if (average >= 90) {
      return "A";
    } else if (average >= 80) {
      return "B";
    } else if (average >= 70) {
      return "C";
    } else if (average >= 60) {
      return "D";
    } else {
      return "F";
    }
}

console.log(getGrade(50, 50, 50), "F");
console.log(getGrade(90, 89, 87), "B");
console.log(getGrade(70, 69, 58), "D");