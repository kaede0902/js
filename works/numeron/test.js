let hundreds = Math.floor(Math.random()*10);
let tens = Math.floor(Math.random()*10);
let ones = Math.floor(Math.random()*10);
while (hundreds === tens == ones) {
    let hundreds = Math.floor(Math.random()*10);
    let tens = Math.floor(Math.random()*10);
    let ones = Math.floor(Math.random()*10);
}
console.log('ans:',hundreds,tens,ones);
