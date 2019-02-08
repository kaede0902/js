const a = parseInt('10 volts', 10);
const b = parseInt('10 volts', 16);
console.log(a,b); // Hex F is Deci 15, Hex 10 is 16.

const c = parseInt('3a',16);
console.log(c);

const d = parseFloat('15.5 kph');
console.log(d);

const date = new Date();
console.log(date);
const ts = date.valueOf();
console.log(ts);


