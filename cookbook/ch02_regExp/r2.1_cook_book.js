let str = [
    'CookBook',
    'Cook Book',
    'Cooking Book',
    'Cook   Book',
    'Cookbook',
    'cookBook',
    'BookCook',
    'cookbook',
];
let ptn = /Cook.Book/;
console.log('ptn:',ptn);

for(let i = 0; i < str.length; i++) {
    console.log(str[i]+":"+ptn.test(str[i]));
}

let ptnI = /Cook.*Book/i;
console.log('ptn:',ptnI);

for(let i = 0; i < str.length; i++) {
    console.log(str[i]+":"+ptnI.test(str[i]));
}
