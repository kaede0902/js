let str =  "As I was going to Saint Ives";
let reg = /\w{4,}/ig;
let out = str.replace(reg,'****');
console.log(out);
