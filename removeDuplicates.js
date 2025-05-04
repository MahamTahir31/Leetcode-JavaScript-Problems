function removeDuplicates(nums) {
    let k = 1; 
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

let nums = [1,1,2];
let res = removeDuplicates(nums);
console.log(res);