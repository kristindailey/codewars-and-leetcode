/* CHALLENGE DESCRIPTION

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers. The two arrays are not empty and are the same length. 

Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

    Correct answer    |    Student's answer   |   Result         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0
*/

/* PREP
Parameters
    // two arrays
    // first array is the answer key/correct answers
    // second array is the student's answers
    // neither array is empty
    // both arrays are the same length. 
Returns 
    // return score of answers (single integer)
    // give +4 for each correct answer
    // give -1 for each incorrect answer
    // give 0 for each blank answer (empty string)
    // if score < 0, return 0
Examples 
    // ["a", "a", "b", "b"], ["b", "b", "a", "a"]
        // 0
    //  ["a", "a", "b", "c"], ["a", "a", "b", "a"]
        // 11
Pseudocode 
    // function that takes in two parameters (answer key array, student's answers array)
    // declare score variable = 0
    // loop through the array and update score based on student's answer
    // return score, accounting for < 0 score
*/

// MY SOLUTION
function checkExam(array1, array2) {
    let score = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === "") score += 0;
        else if (array2[i] === array1[i]) score += 4;
        else score -= 1;
    }
    return score < 0 ? 0 : score;
}

// OTHER SOLUTIONS
function checkExam(array1, array2) {
    let score = 0; 
    array1.forEach((answer, index) => {
       if (answer === array2[index]) score += 4;
       else if (array2[index] !== "") score -= 1;
    })
    return score < 0 ? 0 : score;
}

const checkExam = (array1, array2) => {
    let result = array2.reduce((score, answer, i) => {
        if (answer == array1[i]) return score += 4;
        else if (answer == 0) return score += 0;
        else return score - 1;
      }
    , 0);
    return result < 0 ? 0 : result;
}