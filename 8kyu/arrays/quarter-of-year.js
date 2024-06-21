/* CHALLENGE DESCRIPTION

Given a month as an integer from 1 to 12, return the quarter of the year it belongs as an integer number.

For example: Month 2, February, is part of the first quarter. Month 6, June, is part of the second quarter. And month 11, November, is part of the fourth quarter.

Constraint:
1 <= month <= 12
*/

// MY SOLUTION
const returnTheQuarter = (month) => {
    if (month === 1 || month === 2 || month === 3) {
      return 1;
    } else if (month === 4 || month === 5 || month === 6) {
      return 2;
    } else if (month === 7 || month === 8 || month === 9) {
      return 3;
    } else {
      return 4;
    }
}

// OTHER SOLUTIONS
const quartOf = month => Math.ceil(month / 3);

const quarter = month => month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;

const qOf = (month) => {
    if (month <= 3) {
      return 1;
    } else if (month <= 6) {
      return 2;
    } else if (month <= 9) {
      return 3;
    } else if (month <= 12) {
      return 4;
    }
}