const bruce = {name: 'Bruce'};
const madeline = {name: 'Madeline'};

function update(birthYear, job) {
    this.birthYear = birthYear;
    this.job = job;
}
const updateBruce = update.bind(bruce);

console.log(bruce);
updateBruce(1904, 'actor');
console.log(bruce);

