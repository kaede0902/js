function calcCone(radius, height) {
    let dimension = radius * radius * Math.PI;
    let volume = dimension * height / 3;
    console.log('Volume:',volume);
    return volume;
}

function getSize(dimension) {
    if (dimension >= 100) {
        return "L";
    } else if (dimension >= 50) {
        return 'M';
    } else {
        return 'S';
    }
}
function checkSize(func,dimention) {
    let size = func(dimention);
    if (size == 'L')
        return true;
    else 
        return false;
}

let value = calcCone(3,10);
let size = checkSize(getSize, value);
console.log('L size:',size);



