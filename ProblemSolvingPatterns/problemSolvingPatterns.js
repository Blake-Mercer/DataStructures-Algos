// write a function that accepts two arrays, return true if every value in the first array has its corresponding value squared in the second array. the frequecy of the values must be the same

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
};

//  anagram challenge

const anagram = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let obj1 = {};
  let obj2 = {};

  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

// write a function called sumZero which accepts a sorted array of intergers. the function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

// write a function called countUniqueValues which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

// write a function call maxSubArraySum which accepts an array of intergers and a number called num. The function should calculate the maximum sum of num consecutive elements in the array.

const maxSubArraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
// write a function call isSubsequence. The functions takes two strings and checks whether the characters in the first string appear in the second string without the order changeing

const isSubsequence = (str1, str2) => {
  let count = 0;
  for (let c of str2) {
    if (str1[count] === c) {
      count++;
    }
  }
  return str1.length === count;
};

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// refactored

function minSubArrayLen(nums, sum) {
  let minLength = Infinity;
  let total = 0;
  let start = 0;
  for (let end = 0; end < nums.length; end++) {
    total += nums[end];
    while (total >= sum) {
      minLength = Math.min(minLength, end - start + 1);
      total -= nums[start];
      start++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

function findLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let longest = 0;
  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      longest = Math.max(longest, set.size);
      right++;
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return longest;
}
