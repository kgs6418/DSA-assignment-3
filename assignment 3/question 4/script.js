 function fun (nums, target) {


    let lo = 0, hi = nums.length; // 4 

    while(lo < hi) { 
        let mid = lo + Math.floor((hi-lo)/2); 
        if (target > nums[mid]) {
            lo = mid + 1 
        } else {
            hi = mid 
        }
    }
    return lo;
};

const nums = [1,3,5,6];
let target = 5;
console.log(fun(nums,target));