let myFunc = (nums) =>{
    let a = 0;
for (let i = 0; i < nums.length; i++) {
    a = a ^ nums[i];
}
return a;
}
let nums = [2,2,1];
console.log(myFunc(nums));