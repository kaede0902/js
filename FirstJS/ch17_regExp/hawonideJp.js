let input = "セントアイブスはイギリスに存在する街の名前です．";
let reg = /[はをにで]/g
console.log(input.replace(reg, '  '));
