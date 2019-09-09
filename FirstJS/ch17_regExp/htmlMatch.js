let html = 'HTML with <a href="/one">one link</a>, and some JS.' 
    + '<script src="stuff.js"></script>';
let reg = /area|a|link|script|source/ig;
let reg2 = /<area|<a|<link|<script|<source/ig;
console.log('reg1:',html.match(reg));
console.log('reg2:',html.match(reg2));
