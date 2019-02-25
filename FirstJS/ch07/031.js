let name = 'MomoTaro';
let age = 25;

function greet() {
    console.log(`Hello, ${name}.`);
}
function getBirthYear() {
    return new Date().getFullYear() - age;
}

greet();
console.log(getBirthYear());
