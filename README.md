# JavaScript
## To search
node arg,

## For
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
## break
### usage
```
for (let i = 0; i<100; i++) {
    console.log(i);
    if (i == 10) {
        break;
    }
}
=> Outputs 0 to 10. Stops i==10.
```
## continue
### usage
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

## try/catch/finally
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


