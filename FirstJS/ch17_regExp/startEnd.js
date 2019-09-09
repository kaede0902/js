let str = 'As I was going to Saint Ives';
//         0123456979113456789
console.log(str);
console.log('As:',str.startsWith('As'));
console.log(str.startsWith('A'));
console.log(str.startsWith('I'));
console.log('Ives:',str.endsWith('Ives'));
console.log(str.endsWith('Saint'));

console.log(str.startsWith('going',9));
console.log(str.endsWith('going',14));
console.log(str.endsWith('going',15));

