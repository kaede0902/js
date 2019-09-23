let ssn = '444-55-3333';
let badssn = '1111444-55-3333';

let ptn = /^\d{3}-?\d{2}-?\d{4}$/;

let judgeSecNum = (ssn) => {
console.log(ssn.match(ptn));
if (ssn.match(ptn))
    console.log('It is a social Security number')
else 
    console.log('It is NOT a social Security number')
}
judgeSecNum(ssn);
judgeSecNum(badssn);
