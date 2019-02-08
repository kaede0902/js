
const d = new Date();
const day = d.getDay();
const date = d.getDate();

console.log(d.toDateString());

console.log(day,date);
// Sun: 0, Mon: 1... Sat:6.

if (d.getDay() == 6)
    console.log('Sat. Go to work.');
    
