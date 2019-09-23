let sentence = "This is list: cherries, oranges, bananas. hogehgeo";
console.log(sentence);

let start = sentence.indexOf(':') +1 ;
console.log('start',start);

let end = sentence.indexOf('.');
console.log('end',end);

let list = sentence.substring(start, end);

console.log('list',list);


