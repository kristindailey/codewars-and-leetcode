/* CHALLENGE DESCRIPTION (STRING LADDER)

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures, or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

/* PREP
Parameters
    // array of strings (names)
Returns 
    // return string: ${name} likes this, including up to three names
    // for four or more names, list two names and number of others
Examples 
    // ["Willow"]
        // "Willow likes this"
    //  ["Henry", "Blake", "Taylor", "Robin"]
        // "Henry, Blake and 2 others like this"
Pseudocode 
    // function that takes in an array
    // declare others variable that accounts for others
    // conditional statements that account for each of the cases using arr.length
    // make sure 4+ case, includes others variable
    // return each case depending on arr.length
*/

// MY SOLUTION
function returnWhoLikesIt(arr) {
    const others = arr.length - 2;
    if (arr.length === 0) return "no one likes this";
    else if (arr.length === 1) return `${arr[0]} likes this`;
    else if (arr.length === 2) return `${arr[0]} and ${arr[1]} like this`;
    else if (arr.length === 3) return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    else return `${arr[0]}, ${arr[1]} and ${others} others like this`;
}

// OTHER SOLUTIONS
function likes(names) {
    names = names || [];
    switch (names.length) {
      case 0: return 'no one likes this';
      case 1: return `${names[0]} likes this`;
      case 2: return `${names[0]} and ${names[1]} like this`;
      case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

function likes(names) {
    return {
      0: 'no one likes this',
      1: `${names[0]} likes this`, 
      2: `${names[0]} and ${names[1]} like this`, 
      3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    }[Math.min(4, names.length)]
}