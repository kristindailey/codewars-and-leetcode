/* 242: VALID ANAGRAM

Given two strings s and t, return true if t is an anagram of s and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

// HASH MAP SOLUTION
const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    const countS = {};
    const countT = {};

    for (let i = 0; i < s.length; i++) {
        countS[s[i]] = (countS[s[i]] || 0) + 1;
        countT[t[i]] = (countT[t[i]] || 0) + 1; 
    }

    for (const key in countS) {
        if (countS[key] !== countT[key]) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram("racecar", "carrace"), true);
console.log(isAnagram("jar", "jam"), false);

// Time complexity: O(n + m)
    // Where n is s.length and m is t.length
// Space complexity: O(1)

// SORTING SOLUTION
const is_Anagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    let sortedS = s.split("").sort().join("");
    let sortedT = t.split("").sort().join("");

    return sortedS === sortedT;
};

console.log(is_Anagram("anagram", "nagaram"), true);
console.log(is_Anagram("rat", "car"), false);
console.log(is_Anagram("racecar", "carrace"), true);
console.log(is_Anagram("jar", "jam"), false);

// Time complexity: O(n log n + m log m)
    // Where n is s.length and m is t.length
// Space complexity: O(1)