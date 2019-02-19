
const bruce = {name: 'Bruce'};
const madeline = {name: 'Madeline'};

function update(birthYear, job) {
    this.birthYear = birthYear;
    this.job = job;
}
console.log(bruce);
update.apply[];
console.log(bruce);

console.log(madeline);
update.call(madeline,1942,'actress');
console.log(madeline);
