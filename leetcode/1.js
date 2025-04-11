/* 1: TWO SUM

Given an array of integers, nums, and an integer, target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]

Example 3:
Input: nums = [3, 3], target = 6
Output: [0, 1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

// arr of nums - never empty, always ints, whole nums, positive or negative, at least 2 elements, will always hit target
// target - integer, positive or negative
// return indices of nums equaling target -> []
  // there will be exactly one solution

// BRUTE FORCE SOLUTION
function findIndices(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] === target && i !== j) {
          return [i, j];
        }
      }
    }
}
  
console.log(findIndices([1, 2, 3, 4, 5], 9), [3, 4]);
console.log(findIndices([5, 6, 9], 11), [0, 1]);
console.log(findIndices([22, 7, 100, 5], 12), [1, 3]);

// Time complexity: O(n^2)
// Space complexity: O(1)

// HASH MAP SOLUTION
const twoSum = (nums, target) => {
  const prevMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (prevMap.has(difference)) {
      return [prevMap.get(difference), i];
    }

    prevMap.set(nums[i], i);
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);

// Time complexity: O(n)
// Space complexity: O(n)