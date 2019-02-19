
const nums = [3,5,15,7,5];
let n, i = 0;

while (i < nums.length && (n = nums[i++]) < 10) {
    console.log(`Found a number less than 10: ${n}`);
}
console.log(`Found a number more than 10: ${n}`);

console.log(`Numbers uncheck: ${nums.length - i}`);
console.log('i:',i, ' len:',nums.length);

// get 15, esc from the looP?
// comma oprtr , Use 
