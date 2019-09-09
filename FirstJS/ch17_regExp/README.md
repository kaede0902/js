# RegExp Mytext
FirstJS P.279~ ch17 RegExp  
## String.Property
### start, end
`str.startsWith('foo')`:  
A sentence str 1st word is `foo` or not.  

`str.endsWith()`:  
str`s last word is `foo` or not.  

`str.startsWith('foo',9)`:  
In str, foo starts at 9 char or not.  
`str.endsWith('bar',18)`:  
In str, bar is ended at 18 char or not.  
```
let str = 'As I was going to Saint Ives';
//         0123456979113456789
console.log('As:',str.startsWith('As'));
console.log('Ives:',str.endsWith('Ives'));
```

### include,index
`str.includes('foo')`:  
just as the lang.  
`str.indexOf('foo')`:  
Num of the `foo` starts.  
```
console.log(str.includes('going'));
console.log(str.indexOf('going'));
```

### change
`str.toLowerCase('FOO')`:  
Make 'FOO' Lower case.  
`str.replace('bar', 'foo')`  
Change 'bar' in str 'foo'  
```
str = 'foo bar foooo barrrrr underbarhoge ';
console.log(str.toLowerCase());
console.log(str.replace('bar','foo'));
// foo foo foooo barrrrr underbarhoge
```
It can take regexp for 1st arg. 
```
let str =  "As I was going to Saint Ives";
let reg = /\w{4,}/ig;
let out = str.replace(reg,'****');
console.log(out);
```
```
let input2 = "Fuck you son of bitch!! You smell duck!";
let reg2 = /[fuck]/g
console.log(input2.replace(reg2, '*'));
// F*** yo* son o* bit*h!! Yo* smell d***!
```
This replace every char in []

## regexp
### grammer
/i: ignore big or small char  
/g: search global. without this one match ends searching  
[abc]: all abc chars match.  
[0-9]: 0 to 9 match  
[a-z]: a to z match  
[\-]: select `-`, escape sequence  
### match
returns everything that matches the regexp by arr.  
w{3,} ig:  
over 3 char words.  

w{3} ig:  
3 char words in string.  
### search
return 1st place regexp matched.
### true
return matched or not
### exec
exec regexp.
next exec is next words.

