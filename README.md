# JavaScript

## To search
node arg?

### condtions
### For
```
for (varName in objName) {
    execute...
}
```
```
const season = ['Spring','Summer','Fall','Winter',];
for (let prop in season) {
    console.log(season[prop]);
}
=> Outputs Spring to Winter.
```
### break
```
for (let i = 0; i<100; i++) {
    console.log(i);
    if (i == 10) {
        break;
    }
}
=> Outputs 0 to 10. Stops i==10.
```
### continue
```
let i = 0;
while (i<20) {
    i++;
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}
=> Outputs 1 to 19. Skips 2,4,6. 
`continue` exits the inner loop.  
It skips the code  after if {} ends  
```

### try/catch/finally
```
try {
    document.write(x);
} catch (whatever) {
    alert(whatever);
}
=> If Exception was detected in try{},  
catch() {} works. and catch()'s arg is  
detected value. In this case, `x`. 
```
but the question is why finally is needed?  
I think it is needless because the finally sentences are same as written after the catch scope.  

## built-in objects
### eval
`eval('')` executes inside the string as JS.  
It runs as soon as assigned in the variable.  
Should not to be assigned...  
Cannot break line inside of `''`  
Only `var` can use to delcare inside `eval()`  
```
eval(
    'var obj = {a:0,b:10,c:20,}'
    );
console.log(obj);
=> returns {a: 0, b;10, c:20 }
```
### parseInt
change string to int.  
### isNaN
Not a number. Return false when Number passed.  
### sort
default sorts by ASCII code.  
This can take a sorting function to arg.  
### join
add array to one string.  
```
const arr1 = new Array('aa','bb','cc');
const str1 = arr1.join('/');
console.log(str1);
=> returns aa/bb/cc
```
### concat
combine arrays
```
const concated = arr1.concat(arr2);
```

## Mouse Events
### Mouse Over
`let elems = document.getElementsByTagname('div')`  
のように要素を選択して,
`elem.onmouseover = styledFunc`で適用する  
```
function showBorder() {
    this.style.border = '3px solid red';
}
function hideBorder() {
    this.style.border = '';
} // have to be functions.
let elems = document.getElementsByTagName('div');
for (let i = 0; i < elems.length; i++ ) {
    elems[i].onmouseover = showBorder;
    elems[i].onmouseout = hideBorder;
}
=> this works in many div in html
=> div on mouse is surrounded by red border, 
and div left by the mouse is by nothing.  
```
## get
`getElementsById('idName')`: assign an element by id  
`getElementsByTagname('tagName')`: 
assign all elements by tag's name.  
