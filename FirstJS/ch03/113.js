const obj = {};
obj.color = 'yellow';
obj['not an identifier'] = 3;

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);
console.log(obj);
