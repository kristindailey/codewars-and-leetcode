/* 217: CONTAINS DUPLICATE

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1, 2, 3, 1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false
Explanation:
All elements are distinct.

Example 3:
Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

// arr of nums, always be integers, positive, will not be empty
// return true if val st least twice || false if every val = unique

// Solved using hashmap
function containsDupes(arr) {
    // create empty obj
    const numsMap = {};
    // if num exists as key in obj, return true (dupe found)
    // else set numsMap[num] to true (mark num as seen)
    for (num of arr) {
      if (numsMap[num]) {
        return true;
      } else {
        numsMap[num] = true;
      }
    }
    // if no dupes, return false (outside of loop)
    return false;
}

// Can also be solved with Set
function containsDupes(arr) {
    // create a new Set, removing dupes
    // if Set.size !== arr.length, return true (has dupes)
    // else return false (no dupes)
    return new Set(arr).size !== arr.length;
}