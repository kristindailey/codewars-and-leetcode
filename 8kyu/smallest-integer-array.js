/*
CHALLENGE DESCRIPTION

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

// MY SOLUTION
function findSmallestInt(arr) {
    let min = Math.min(...arr);
    return min;
}

// OTHER SOLUTIONS
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
}

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a, b) => a - b)[0];
    }
}

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min.apply(null, args);
    }
}