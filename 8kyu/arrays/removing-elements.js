/* CHALLENGE DESCRIPTION

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

// MY SOLUTION
function removeEveryOther(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (i % 2 === 1) { 
        arr.splice(i, 1);
      }
    }
    return arr;
}

// OTHER SOLUTIONS
const removeEveryOther = arr => arr.filter((_, i) => (i % 2 === 0));

function removeEveryOther(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr.splice(i, 1);
    }
    return arr;
}

function removeEveryOther(arr) {
    let newArr = [];
    for (var i = 0; i < arr.length; i += 2) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function removeEveryOther(arr) {
    return arr.filter((elem, index) => {
      return index % 2 === 0;
    });
}