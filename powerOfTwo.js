function isPowerOfTwo(n) {
  if (n <= 0) return false;

  let x = 1; // start with 2^0

  while (x < n) {
    x = x * 2;
  }

  return x === n;
}


const n = 3;
console.log(isPowerOfTwo(n));