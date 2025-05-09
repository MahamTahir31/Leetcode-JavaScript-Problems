var searchInsert = function(nums, target) {
    let position = 0;
    for(let i=0; i < nums.length; i++ ){
        if(target > nums[i]){
            position++;
        }
    }
    return position;
};

let nums = [1,2,3,5];
let target = 4;
let res = searchInsert(nums, target);
console.log(res);