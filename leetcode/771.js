/* 771: JEWELS AND STONES

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:
1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
*/

// two strings - one jewels, one stones, only English letters
// returm num of stones I have that are jewels

// MY SOLUTION
function numJewelsInStones(jewels, stones) {
    const map = {};
    let count = 0;
    // loop to confirm the jewels
    for (const jewel of jewels) {
        map[jewel] = true;
    }
    // compare all stones to see if jewels
    for (const stone of stones) {
        if (map[stone]) {
            count++;
        }
    }
    return count;
}

console.log(numJewelsInStones("aA", "aAAbbbb"), 3);
console.log(numJewelsInStones("z", "ZZ"), 0);
console.log(numJewelsInStones("AbBa", "cDefAa"), 2);