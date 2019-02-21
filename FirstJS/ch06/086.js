const bruce = {name: 'Bruce'};
const madeline = {name: 'Madeline'};

function update(birthYear, job) {
    this.birthYear = birthYear;
    this.job = job;
}
const updateBruce = update.bind(bruce);

console.log(bruce);
// argments are assigned into bruce.
updateBruce(1904, 'actor');
console.log(bruce);

console.log(madeline);
updateBruce.call(madeline, 1274, 'king');
console.log(madeline);
console.log(bruce);
// Anyway, what is call?
update.call(madeline, 1274, 'king');
console.log(madeline);
