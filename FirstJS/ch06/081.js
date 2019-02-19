const bruce = {name: 'Bruce'};
const madeline = {name: 'Madeline'};

function greet() {
    return `I am ${this.name}`;
}

console.log(greet());
console.log(greet.call(bruce));

console.log(greet.call(madeline));

// call can point 'this' value.
