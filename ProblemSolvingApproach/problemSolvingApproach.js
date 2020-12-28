// Write a function that return the counts of each character in a string

const charCount = (str) => {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (!obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
};

// refactored

const charCount = (str) => {
  let obj = {};
  for (let char of str) {
    // could add the isAlphaNumeric here instead of regex
    if (/[a-z0-9]/.test(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    (code > 47 && code < 58) || //numeric (0-9)
    (code > 64 && code < 91) || //upper alpha (A-Z)
    (code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return true;
  }
  return false;
}
