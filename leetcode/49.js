/* 49: GROUP ANAGRAMS

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

Explanation:
There is no string in strs that can be rearranged to form "bat."
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate," "eat," and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

// SORTING SOLUTION
const returnGroupAnagrams = (strs) => {
    const result = {};
    
    for (const str of strs) {
        const sortedStr = str.split("").sort().join("");

        if (!result[sortedStr]) {
            result[sortedStr] = [];
        }

        result[sortedStr].push(str);
    }

    return Object.values(result);
};

console.log(returnGroupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
console.log(returnGroupAnagrams([""]), [[""]]);
console.log(returnGroupAnagrams(["a"]), [["a"]]);

// Time complexity: O(m * n log n)
// Space complexity: O(m * n)