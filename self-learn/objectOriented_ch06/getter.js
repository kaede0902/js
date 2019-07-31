const circle = {
    radius: 1,
    get diameter() {
        return this.radius * 2;
    },
    set diameter(value) {
        this.radius = value/2;
    }
}
circle.diameter = 5;
console.log(circle.radius);

circle.radius = 20;
console.log(circle.diameter);
// Is it too long for just div or multi 2?
