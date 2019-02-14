const o = {
    name: 'Julie',
    speak() {
        return `My name is ${this.name}!`;
    },
};
console.log(o.speak());

const speak = o.speak;
console.log(speak());
