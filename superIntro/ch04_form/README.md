## form
### submit test
```html
<div>
    <form action="#" id="form">
        <input type="submit" value="find">
    </form>
</div>
<script>
document.getElementById('form').onsubmit = 
    () => alert('Clicked');
</script>
```
When submit btn clicked, alerts.   
### submit value to content
```html
<form action="#" id="form">
    <input type="text" name="word">
    <input type="submit" name="find">
</form>
<p id="output"></p>
```
```js
document.getElementById('form').onsubmit = () => {
let search = document.getElementById('form').word.value;
document.getElementById('output').textContent = 
    `finding ${search}...`;
return false;
```
This change p content to `finding submittedValue...`  
By getting form#form input named `word`  
And set it to output textContent.
return false pretend page sending.

## Math
`Math.PI`: 3.14.......  
`Math.floor(num)`: cut num after point. under 0.  
`Math.pow(num, exponent)`: exponent.  
```js
console.log(Math.pow(2, 10));
// 1024
console.log(Math.pow(12, 2));
// 144
```
`Math.sqrt`: returns root.  
```js
console.log(Math.sqrt(2));
// 1.1421356...
```

