function fun(nums,t) {

    nums.sort((a, b) => a - b)
    let array = []
    let sum = 0;
    for (let i = 0; i < nums.length ; i++) {
       for (let j = i+1; j < nums.length ; j++) {
        for (let k = j+1; k < nums.length ; k++) {
           for (let l = k+1; l < nums.length ; l++) {

                sum = nums[i]+nums[j]+nums[k]+nums[l];
                if(sum == t){
                    array.push([nums[i],nums[j],nums[k],nums[l]]) 
                }
           
            
           }
            
        }
        
       }
        
    }
   return array;
    
}

const nums = [1,0,-1,0,-2,2];
const t = 0;

console.log(fun(nums,t));
