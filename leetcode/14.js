/* 14: LONGEST COMMON PREFIX

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string: "".

Example 1:
Input: strs = ["flower", "flow", "flight"]
Output: "fl"

Example 2:
Input: strs = ["dog", "racecar", "car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/

const returnLongestCommonPrefix = (arr) => {
    if (arr.length === 1) return arr[0];

    let commonPrefix = "";
    const firstStr = arr[0];

    for (let i = 0; i < firstStr.length; i++) {
        const char = firstStr[i];
        for (let j = 1; j < arr.length; j++) {
            if (i >= arr[j].length || arr[j][i] !== char) {
                return commonPrefix;
            }
        }
        commonPrefix += char;
    }

    return commonPrefix;
};

console.log(returnLongestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(returnLongestCommonPrefix(["dog", "racecar", "car"]), "");
console.log(returnLongestCommonPrefix(["", "hello", "hey"]), "");
console.log(returnLongestCommonPrefix(["one"]), "one");