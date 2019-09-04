# JavaScript Super Intro
SB Creative, From 54p.  
ch02  
## rewrite html
document.getElementById('IdName');  
It get the whole Element by id.  
```
<p id="foo">Dolor reiciendis eum corrupti voluptatum?</p>
console.log(document.getElementById('foo'));
// => <p id="foo">Dolor reiciendis...</p>
```
### elem.textContent
```
let elem = document.getElementById('idName');
elem.textContent = new Date();
console.log(elem);
// => <p id="idName">Mon Sep 02 2019...</p>
```
-------
ch03
## dialog
### confirm
Show OK or Cancel dialog box, 
return ture or false.  
```
if (confirm('Game Start! Ready?'))
    alert('Game Starts');
else
    alert('Game Ends');
```
### prompt
```
let ans = prompt('Watch Help?');
console.log(ans);
```
In the prompt box, user can type the value of ans.  

