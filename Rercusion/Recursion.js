// Recursion works by invoking the same function with a different input until you reach your base case.
// Reverse a string
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

function countDown(num) {
  if (num <= 0) return;
  num--;
  countDown(num);
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

Recursivaly;
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

iterively;
function factorial(num) {
  let total = 1;
  for (i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// Helper Method Recursion

function collectOddValues(nums) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
}

// Pure Recursion

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
