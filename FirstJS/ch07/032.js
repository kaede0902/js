
let usr = {
    name: 'Momo',
    age: 25,
};

function greet() {
    console.log(`Hello, ${usr.name}`);
}
function getBirthYear() {
    return new Date().getFullYear() - usr.age;
 }

console.log(getBirthYear());
