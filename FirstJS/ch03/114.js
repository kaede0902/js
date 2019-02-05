const obj = {};
const SIZE = Symbol();
obj[SIZE] = 8;

console.log(obj[SIZE]);
console.log(obj);

obj.SIZE = 12;
console.log('Property',obj.SIZE,obj['SIZE']);
console.log('Symble:',obj[SIZE]);
console.log(obj); // returns property,Symbol

