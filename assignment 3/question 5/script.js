function fun(digit) {

const join = Number(digit.join(''));
let add = join+1;

 let myFunc = num => Number(num);
var intArr = Array.from(String(add), myFunc);
return intArr;


}
const digit = [1,2,6];
console.log(fun(digit))