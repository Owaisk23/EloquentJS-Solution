//Chap 2 Program Structure
//Looping a triangle

// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);

//---------------------------------------------------------------------
//FizzBuzz

// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
// }

//---------------------------------------------------------------------
//Chessboard

// let size = 10;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

//Chap 3 Functions
//Minimum

// function min(a, b) {
//     if (a < b) return a;
//     else return b;
// }
  
// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10

//---------------------------------------------------------------------
//Recursion

// function isEven(n) {
//     if (n == 0) return true;
//     else if (n == 1) return false;
//     else if (n < 0) return isEven(-n);
//     else return isEven(n - 2);
//   }
  
//   console.log(isEven(78));
//   // → true
//   console.log(isEven(23));
//   // → false
//   console.log(isEven(-1));
//   // → false

//---------------------------------------------------------------------
//Bean Counting

// function countChar(string, ch) {
//     let counted = 0;
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] == ch) {
//         counted += 1;
//       }
//     }
//     return counted;
//   }
  
//   function countBs(string) {
//     return countChar(string, "B");
//   }
  
//   console.log(countBs("BBC"));
//   // → 2
//   console.log(countChar("kallarkahar", "a"));
//   // → 4


