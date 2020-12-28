// WRITE A FUNCTION THAT CALCULATES THE SUM OF 1 TO N INCLUDING N

// O(n) linear
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// or the faster one below?

// O(1) constant
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);

// WRITE A FUNCTION THAT PRINTS UP TO N BUT NEVER LESS THAN 5
// 0(n)
function upToFive(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// WRITE A FUNCTION THAT PRINTS DOWN FROM 5 BUT NEVER MORE THAN 5
// 0(1)
function atMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
