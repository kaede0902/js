let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();

let meridian = hour<12 ? 'AM' : 'PM';

console.log(`${hour%12}:${min} ${meridian}`);
