/* 1: TWO SUM

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

// Note: Below is a brute force solution.

// arr of nums, target num
// return indices of nums that add up to target

// arr of nums - not empty, always nums, whole nums, positive, at least 2 nums, will always hit target, num + self will never = target (only two nums)
// same for target
// return indices of nums -> []

// [1, 2, 3, 4, 5], 9 => [3, 4]
// [5, 6, 9], 11 => [0, 1]
// [22, 7, 100, 5], 12 => [1, 3]  

function findIndices(arr, target) {
    // grab a num
    for (let i = 0; i < arr.length; i++) {
      // compare outside num to internal num
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] === target && i !== j) {
          return [i, j];
        }
      }
    }
}
  
console.log(findIndices([1, 2, 3, 4, 5], 9), [3, 4]);
console.log(findIndices([5, 6, 9], 11), [0, 1]);
console.log(findIndices([22, 7, 100, 5], 12), [1, 3]);