
const bruce = {name: 'Bruce'};
const madeline = {name: 'Madeline'};

function update(birthYear, job) {
    this.birthYear = birthYear;
    this.job = job;
}
console.log(bruce);
const newBruce = [1940,'fighter'];
update.call(bruce, ...newBruce);
console.log(bruce);

