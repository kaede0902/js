let str = '99 bottles, take 1 down --- , 98 left';
let reg = /[0-9]/g;
let reg2 = /[0-9a-z\-.]/ig;
//console.log(str.match(reg));
console.log(str.match(reg2));
let reg3 = /[-0-9a-z.]/ig;
