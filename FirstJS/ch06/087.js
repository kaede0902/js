
const bruce = {name: 'Bruce'};

function update(birthYear, job) {
    this.birthYear = birthYear;
    this.job = job;
}

const updateBruce1949 = update.bind(bruce, 1949);

console.log(bruce);


updateBruce1949('song maker');

console.log(bruce);
