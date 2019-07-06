eval('console.log("I am in eval")');

const use = () => eval('console.log("use");');
use();

eval('5 % 2');

eval(
    'var obj = {a:0,b:10,c:20,}'
);
console.log(obj);



