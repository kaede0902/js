let str = 'As I was going to Saint Ives';
let reg = /\w{3,}/ig;
console.log(str.match(reg));

let reg2 = /\w{3}/ig;
console.log('matched words',str.match(reg2));

console.log('1st place',str.search(reg));

console.log('exec:',reg.exec(str));
