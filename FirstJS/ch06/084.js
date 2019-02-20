'use strict';

const arr = [2,3,-5,15,7];
console.log(Math.min.apply(null, arr));

console.log(Math.min(arr));
console.log(Math.min(...arr));
console.log(Math.max.apply(arr));
console.log(Math.max.apply(null,arr));

