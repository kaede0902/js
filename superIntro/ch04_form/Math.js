console.log(`Normal PI: ${Math.PI}`);
console.log(`Floored PI: ${ Math.floor( Math.PI )}`);

let cutPoint = (num, dig) =>{
    let time = Math.pow(10, dig); //1000
    return Math.floor(num * time) / time;
    // 3.14 * 1000/1000
}
console.log(cutPoint(Math.PI, 3));
