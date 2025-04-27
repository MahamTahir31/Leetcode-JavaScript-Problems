// My Solution (Runtime: 34ms, Memory: 53.42 MB)


const nums = [1,2,3,4];
const target = 5;
/*
var twoSum = function(nums, target) {
    let arr= [];
    for(let i=0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            let sum = nums[i] + nums[j];
            if(target == sum){
                arr.push(i, j);
                return arr;
            }
        }
    }
    
};

let result = twoSum(nums, target);
console.log(result); */

// Solution by GPT (Runtime: 0ms, Memory: 54.35 MB)

var twoSum = function(nums, target) {
    let map = {}; 
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }
};

let result = twoSum(nums, target);
console.log(result);
