const fn = function sum(accum, curr) { return accum + curr; }

var reduce = function(nums, fn, init) {
    let val = init
    for(let i =0; i<nums.length; i++){
        val = fn(val, nums[i])
        
    }
    return val
};

// Example 1
let nums1 = [1, 2, 3, 4];
let sumFn1 = function sum(accum, curr) { return accum + curr; };
let init1 = 0;
console.log(reduce(nums1, sumFn1, init1)); // Output: 10

// Example 2
let nums2 = [1, 2, 3, 4];
let sumFn2 = function sum(accum, curr) { return accum + curr * curr; };
let init2 = 100;
console.log(reduce(nums2, sumFn2, init2)); // Output: 130