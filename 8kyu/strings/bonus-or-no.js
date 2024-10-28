/* CHALLENGE DESCRIPTION

It's bonus time in the big city! The fat cats are rubbing their paws in anticipation. But who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
*/

// function with two parameters -> salary, bonus
    // salary = integer, always a num, never empty, no special chars, no spaces
    // bonus = boolean
// return salary (after bonus if applicable)
    // return salary as string prefixed with "£"

// MY SOLUTION
// if bonus, return salary *= 10 (as string with prefix)
// if no bonus, return salary (as string with prefix)
const bonusTime = (salary, bonus) => bonus ? `£${salary *= 10}` : `£${salary}`;

console.log(bonusTime(10, true), "£100");
console.log(bonusTime(5, false), "£5");
console.log(bonusTime(5, true), "£50");

// OTHER SOLUTION
const ifBonus = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;