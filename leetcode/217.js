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

// arr of nums, always be integers, positive and negative, will not be empty
// return true if val appears at least twice || false if every val = unique

// HASH SET SOLUTION
const hasDuplicate = (nums) => {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

console.log(hasDuplicate([1, 2, 3, 1]), true);
console.log(hasDuplicate([1, 2, 3, 4]), false);
console.log(hasDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);

// Time complexity: O(n)
// Space complexity: O(n)

// HASH SET LENGTH SOLUTION
const containsDupes = (nums) => {
    return new Set(nums).size !== nums.length;
}

console.log(containsDupes([1, 2, 3, 1]), true);
console.log(containsDupes([1, 2, 3, 4]), false);
console.log(containsDupes([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);

// Time complexity: O(n)
// Space complexity: O(n)