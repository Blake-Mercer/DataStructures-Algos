//  Replace character in a given str with the following character in the alphabet
const moveCharsForward = (str) => {
  str = str
    .split('')
    .map((char) => (char = String.fromCharCode(char.charCodeAt(0) + 1)))
    .join('');

  return str;
};
// can also be written as

// const moveCharsForward = (str) =>
//   str
//     .split('')
//     .map((char) => (char = String.fromCharCode(char.charCodeAt(0) + 1)))
//     .join('');

console.log(moveCharsForward('abcd'));

// show todays date in mm/dd/yyyy format
const formatDate = (date = new Date()) => {
  const days = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${month}/${days}/${year}`;
};

// Update existing array with new items + add to quantity of existing items
function updateInventory(arr1, arr2) {
  // loop over both arrays
  for (var i = 0; i < arr2.length; i++) {
    var found = false;
    for (var j = 0; j < arr1.length; j++) {
      // locate duplicate items in arrays
      if (arr2[i][1] === arr1[j][1]) {
        // add to quantity of existing item
        arr1[j][0] = arr1[j][0] + arr2[i][0];
        found = true;
      }
    }
    if (!found) {
      // if item not present in existing array add item to existing array
      arr1.push(arr2[i]);
    }
  }
  //now sort the array by the second column of the multidimensional array.
  return arr1.sort(function (a, b) {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
    // names must be equal
    return 0;
  });
}
// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

var newInv = [
  [5, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

// visual of updated array
// updateInventory(curInv, newInv);
// for (item of curInv) {
//   const li = document.createElement('li');
//   li.innerHTML = `${item[0]} items of ${item[1]} `;
//   document.body.prepend(li);
// }

// Example of a closure
// Closures are nothing but FUNCTIONS WITH PRESERVED DATA
function mutiplyBy(x) {
  return function (y) {
    return x * y;
  };
}
let timesTwo = mutiplyBy(2);
// timesTwo(5); // 10

// Find dups in an array
const findDups = (arr) => {
  const dups = [];
  const nonDups = [];
  for (let i of arr) {
    if (!nonDups.includes(i)) {
      nonDups.push(i);
    } else {
      dups.push(i);
    }
  }
  return dups;
};
// Multiple Tenary Operations syntax

// const yourVar = condition1
//   ? someValue
//   : condition2
//   ? anotherValue
//   : defaultValue;

// function example() {
//   return condition1
//     ? value1
//     : condition2
//     ? value2
//     : condition3
//     ? value3
//     : value4;
// }

// Equivalent to:

// function example() {
//   if (condition1) {
//     return value1;
//   } else if (condition2) {
//     return value2;
//   } else if (condition3) {
//     return value3;
//   } else {
//     return value4;
//   }
// }

const fizzBuzz = () => {
  for (let i = 0; i <= 100; i++) {
    let output = '';
    if (i % 3 == 0) {
      output = 'fizz';
    }
    if (i % 5 == 0) {
      output = 'buzz';
    }
    if (i % 3 == 0 && i % 5 == 0) {
      output = 'fizzbuzz';
    }
    if (output == '') {
      output = i;
    }

    console.log(output);
  }
};
// fizzBuzz();

// Greatest common divisor
//recursion
const gcd = (number1, number2) => {
  if (number2 == 0) {
    return number1;
  } else {
    let remainder = number1 % number2;
    return gcd(number2, remainder);
  }
};

console.log(gcd(18, 16));

// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
(nums = [2, 7, 11, 15]), (target = 9);
const twoSum = (nums, target) => {
  let storage = {};
  for (let [index, value] of nums.entries()) {
    if (storage[value] !== undefined) {
      return [storage[value], index];
    }
    storage[target - value] = index;
  }
};
//  or

const twoSum = (nums, target) => {
  let numIndex = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let compliment = target - num;

    if (numIndex.has(compliment)) {
      result[0] = numIndex.get(compliment);
      result[1] = i;
      return result;
    }
    numIndex.set(num, i);
  }

  return result;
};

// Reverse Interger
// Given a 32-bit signed integer, reverse digits of an integer.
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
// When you "add" a number to a string the interpreter converts your number to a string and concatenates both together. example x+""

const reverse = (x) => {
  if (x < 0) return -1 * reverse(-x);

  const solution = (x + '') //
    .split('')
    .reverse()
    .join('');
  return solution > 2 ** 31 - 1 ? 0 : solution;
};

// or

const reverse = (x) => {
  let negative = x < 0;
  let reversed = 0;

  if (negative) {
    x *= -1;
  }

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (reversed > 2 ** 31 - 1) return 0;

  return negative ? reversed * -1 : reversed;
};

// Palindrome Number
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

const isPalindrome = (x) => {
  let arr = (x + '').split('').reverse().join('');

  return +arr === x;
};
//  without converting to a string
const isPalindrome = (x) => {
  if (x < 0) return false;

  return x === reversedInterger(x);
};

const reversedInterger = (x) => {
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reversed;
};

// remove the duplicates in-place such that each element appears only once and returns the new length

const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;
  let p1 = 0;
  for (let p2 = 1; p2 < nums.length; p2++) {
    if (nums[p1] !== nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
    }
  }
  return p1 + 1;
};
