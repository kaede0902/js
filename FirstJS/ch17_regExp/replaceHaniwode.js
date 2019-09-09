let input = "セントアイブスはイギリスに存在する街の名前です．";
let reg = /[はをにで]/g
console.log(input.replace(reg, '  '));

let input2 = "Fuck you son of bitch!! You smell duck!";
let reg2 = /[fuck]/g
console.log(input2.replace(reg2, '*'));

