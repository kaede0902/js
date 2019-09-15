let now = new Date();
let year = now.getFullYear();
let mth = now.getMonth();
let date = now.getDate();
let hour = now.getHours();
let min = now.getMinutes();

console.log('now:',now);
console.log('Year:',year);
console.log('Month:', mth);
console.log('Date:', date);
console.log('hour:', hour);
console.log('min:', min);
console.log(`${year}/${mth+1}/${date}`);
console.log(`${hour}:${min}`);
