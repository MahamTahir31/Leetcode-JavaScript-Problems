function singleNumber(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]; // XOR all elements
  }

  return result;
}

const arr = [4,1,2,1,2];
console.log(singleNumber(arr));