/* CHALLENGE DESCRIPTION

The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. 
She gives them a rating and then removes the one with the lowest rating.

However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. 
If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples:
* Input: [1, 2, 3, 4, 5], Output: [2, 3, 4, 5]
* Input: [5, 3, 2, 1, 4], Output: [5, 3, 2, 4]
* Input: [2, 2, 1, 2, 1], Output: [2, 2, 2, 1]
*/

// MY SOLUTION
function removeSmallest(numbers) {
    if (numbers.length === 0) return [];
    const smallestInt = Math.min(...numbers);
    const indexToRemove = numbers.indexOf(smallestInt);
    const newNumbers = numbers.slice();
    newNumbers.splice(indexToRemove, 1);
    return newNumbers;
}

console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);

// OTHER SOLUTIONS
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

const removeSmallest = numbers => numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));