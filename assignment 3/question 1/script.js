function fun(nums,target) {

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
           for (let k =j+1; k < nums.length; k++) {
            sum = nums[i]+nums[j]+nums[k];
            if(sum - target == 1 || sum == target){
                return sum;
            }
            
           }
            
        }
        
    }
}

// example //
const nums = [-1,2,1,-4];
const target = 1;

console.log(fun(nums,target))