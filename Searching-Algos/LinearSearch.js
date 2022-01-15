function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

const toggler = (mode) => (state) => {
  [mode] = !state[mode];
};
const isValidToggler = toggler('isValid');

const user = [1, 3, 4, 5, 6, 7643, 54, 5, 34];

const lessThan5 = user.filter((num) => num < 5);

state = {
  firstName: '',
  lastName: '',
  isValid: false,
  counter: 0,
};
let makeUpdater = (apply) => (key) => (state) => {
  return {
    [key]: apply(state[key]),
  };
};

const toggleKey = makeUpdater((previous) => !previous);
const bro = toggleKey('isValid');
let result = bro(state);
console.log(result);
