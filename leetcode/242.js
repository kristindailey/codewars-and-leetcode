/* 242: VALID ANAGRAM

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow-up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

// SORTING SOLUTION
const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    let sortedS = s.split("").sort().join("");
    let sortedT = t.split("").sort().join("");

    return sortedS === sortedT;
};

console.log(isAnagram("anagram", "nagaram"), true);
console.log(isAnagram("rat", "car"), false);
console.log(isAnagram("racecar", "carrace"), true);
console.log(isAnagram("jar", "jam"), false);

// Time complexity: O(n log n + m log m)
// Space complexity: O(1)