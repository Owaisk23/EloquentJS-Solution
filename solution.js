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

//Chap 4 Data Structures: Object & Array
//The sum of range

// function range(start, end, step = start < end ? 1 : -1) {
//     let array = [];

//     if (step > 0) {
//       for (let i = start; i <= end; i += step) array.push(i);
//     } else {
//       for (let i = start; i >= end; i += step) array.push(i);
//     }
//     return array;
//   }

//   function sum(array) {
//     let total = 0;
//     for (let value of array) {
//       total += value;
//     }
//     return total;
//   }

// console.log(range(1, 10))
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));

//---------------------------------------------------------------------
//Reversing an array

// function reverseArray(array) {
//     let output = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//       output.push(array[i]);
//     }
//     return output;
//   }

//   function reverseArrayInPlace(array) {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//       let old = array[i];
//       array[i] = array[array.length - 1 - i];
//       array[array.length - 1 - i] = old;
//     }
//     return array;
//   }

//   console.log(reverseArray(["A", "B", "C"]));
//   // → ["C", "B", "A"];
//   let arrayValue = [1, 2, 3, 4, 5];
//   reverseArrayInPlace(arrayValue);
//   console.log(arrayValue);
//   // → [5, 4, 3, 2, 1]

//---------------------------------------------------------------------
//A list

// function arrayToList(array) {
//     let list = null;
//     for (let i = array.length - 1; i >= 0; i--) {
//       list = {value: array[i], rest: list};
//     }
//     return list;
//   }

//   function listToArray(list) {
//     let array = [];
//     for (let node = list; node; node = node.rest) {
//       array.push(node.value);
//     }
//     return array;
//   }

//   function prepend(value, list) {
//     return {value, rest: list};
//   }

//   function nth(list, n) {
//     if (!list) return undefined;
//     else if (n == 0) return list.value;
//     else return nth(list.rest, n - 1);
//   }

//   console.log(arrayToList([10, 20]));
//   // → {value: 10, rest: {value: 20, rest: null}}
//   console.log(listToArray(arrayToList([10, 20, 30])));
//   // → [10, 20, 30]
//   console.log(prepend(10, prepend(20, null)));
//   // → {value: 10, rest: {value: 20, rest: null}}
//   console.log(nth(arrayToList([10, 20, 30]), 1));
//   // → 20

//---------------------------------------------------------------------
//Deep Comparison

// function deepEqual(a, b) {
//     if (a === b) return true;

//     if (a == null || typeof a != "object" ||
//         b == null || typeof b != "object") return false;

//     let keysA = Object.keys(a), keysB = Object.keys(b);

//     if (keysA.length != keysB.length) return false;

//     for (let key of keysA) {
//       if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//     }

//     return true;
//   }

//   let obj = {here: {is: "an"}, object: 2};
//   console.log(deepEqual(obj, obj));
//   // → true
//   console.log(deepEqual(obj, {here: 1, object: 2}));
//   // → false
//   console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
//   // → true

//Chap 5 Higher Order Function
//Flattening

// let arrays = [[1, 2, 3], [4, 5], [6]];

// console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// // → [1, 2, 3, 4, 5, 6]

//---------------------------------------------------------------------
//Your own loop

// function loop(start, test, update, body) {
//     for (let value = start; test(value); value = update(value)) {
//       body(value);
//     }
//   }

//   loop(3, n => n > 0, n => n - 1, console.log);
//   // → 3
//   // → 2
//   // → 1

//---------------------------------------------------------------------
//Everything

// function every(array, predicate) {
//     for (let element of array) {
//       if (!predicate(element)) return false;
//     }
//     return true;
//   }

//   function every2(array, predicate) {
//     return !array.some(element => !predicate(element));
//   }

//   console.log(every([1, 3, 5], n => n < 10));
//   // → true
//   console.log(every([2, 4, 16], n => n < 10));
//   // → false
//   console.log(every([], n => n < 10));
//   // → true


//---------------------------------------------------------------------
//Dominant writing direction

// function characterScript(code) {
//     for (let script of SCRIPTS) {
//       if (script.ranges.some(([from, to]) => {
//         return code >= from && code < to;
//       })) {
//         return script;
//       }
//     }
//     return null;
//   }

// function countBy(items, groupName) {
//     let counts = [];
//     for (let item of items) {
//       let name = groupName(item);
//       let known = counts.findIndex(c => c.name == name);
//       if (known == -1) {
//         counts.push({name, count: 1});
//       } else {
//         counts[known].count++;
//       }
//     }
//     return counts;
//   }


// function dominantDirection(text) {
//     let counted = countBy(text, char => {
//       let script = characterScript(char.codePointAt(0));
//       return script ? script.direction : "none";
//     }).filter(({name}) => name != "none");

//     if (counted.length == 0) return "ltr";

//     return counted.reduce((a, b) => a.count > b.count ? a : b).name;
//   }

//   console.log(dominantDirection("Hello!"));
//   // → ltr
//   console.log(dominantDirection("Hey, مساء الخير"));
//   // → rtl

//Chap 6 The secret life of object
//A vector type
// class Vec {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }

//     plus(other) {
//       return new Vec(this.x + other.x, this.y + other.y);
//     }

//     minus(other) {
//       return new Vec(this.x - other.x, this.y - other.y);
//     }

//     get length() {
//       return Math.sqrt(this.x * this.x + this.y * this.y);
//     }
//   }

//   console.log(new Vec(11, 23).plus(new Vec(23, 6)));
//   // → Vec{x: 34, y: 29}
//   console.log(new Vec(1, 2).minus(new Vec(2, 3)));
//   // → Vec{x: -1, y: -1}
//   console.log(new Vec(3, 4).length);
//   // → 5

//---------------------------------------------------------------------
//Groups
// class Group {
//     constructor() {
//       this.members = [];
//     }

//     add(value) {
//       if (!this.has(value)) {
//         this.members.push(value);
//       }
//     }

//     delete(value) {
//       this.members = this.members.filter(v => v !== value);
//     }

//     has(value) {
//       return this.members.includes(value);
//     }

//     static from(collection) {
//       let group = new Group;
//       for (let value of collection) {
//         group.add(value);
//       }
//       return group;
//     }
//   }

//   let group = Group.from([10, 20]);
//   console.log(group.has(10));
//   // → true
//   console.log(group.has(30));
//   // → false
//   group.add(10);
//   group.delete(10);
//   console.log(group.has(10));
//   // → false

//---------------------------------------------------------------------
//Iterable groups

// class Group {
//     constructor() {
//         this.members = [];
//     }

//     add(value) {
//         if (!this.has(value)) {
//             this.members.push(value);
//         }
//     }

//     delete(value) {
//         this.members = this.members.filter(v => v !== value);
//     }

//     has(value) {
//         return this.members.includes(value);
//     }

//     static from(collection) {
//         let group = new Group;
//         for (let value of collection) {
//             group.add(value);
//         }
//         return group;
//     }

//     [Symbol.iterator]() {
//         return new GroupIterator(this);
//     }
// }

// class GroupIterator {
//     constructor(group) {
//         this.group = group;
//         this.position = 0;
//     }

//     next() {
//         if (this.position >= this.group.members.length) {
//             return { done: true };
//         } else {
//             let result = {
//                 value: this.group.members[this.position],
//                 done: false
//             };
//             this.position++;
//             return result;
//         }
//     }
// }

// for (let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
// }
// // → a
// // → b
// // → c

//---------------------------------------------------------------------
//Borrowing a method

// let map = {one: true, two: true, hasOwnProperty: true};

// console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// // → true


