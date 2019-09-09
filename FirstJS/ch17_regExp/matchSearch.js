let str = 'As I was going to Saint Ives';
let reg = /\w{3,}/ig;

console.log(str.match(reg));
console.log(str.search(reg));


console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(reg.exec(str));
console.log(reg.exec(str));
