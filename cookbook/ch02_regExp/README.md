# Regular Expressions

## usage
```
let str = 'Sherry    Powers';
let ptn = /Sherry\s+Powers/;
console.log(ptn.test(str));
```
True. Pattern.test(String).  

## method
### search
returns 1st found place num.  
### test
returns true or false
### match 
`str.match(ptn)` ?????

## pattern
`\s+`:  
space.  
### . and *
`.`:  
anything.  
`*`:  
anything include nothing.  

ptn:`/Cook*Book/`, 'Cook Book' is false.  
only 'CookBook' is true.  
ptn:`/Cook.Book/`, 'CookBook'&'Cook  Book' is false.  
only 'Cook Book' is true.  

However, ptn`/Cook*.Book`, between `Cook` and `Book`,  
Anything include nothing is true!  
[Cook Book, Cooking Book, Cook  Book, CookBook,] are true!!

`/i`: ignore Lower or Higher cases.  

### match()
```
let ssn = '444-55-3333';
let ptn = /^\d{3}-?\d{2}-?\d{4}$/;

if (ssn.match(ptn))
    console.log('It is a social Security number')
else
    console.log('It is NOT a social Security number')

```
