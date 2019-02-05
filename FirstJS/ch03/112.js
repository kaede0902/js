const obj = {};
obj.color = 'yellow';
obj['not an identifier'] = 3;
console.log(obj['not an identifier']);
console.log(obj.color);
console.log(obj['color']);
console.log(obj['size']);



