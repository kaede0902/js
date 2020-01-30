function calcCone(radius, height) {
    let dimension = radius * radius * Math.PI; // btm S
    return dimension * height /3; // V
}

function getSize100(dimension) {
    if( 100 <= dimension) {
        return 'L';
    } else if ( 50 <= dimension) {
        return 'M';
    } else {
        return 'S';
    }
}
function getSize80(dimension) {
    if( 80 <= dimension) {
        return 'L';
    } else if ( 40 <= dimension) {
        return 'M';
    } else {
        return 'S';
        console.log('S');
    }
}
function checkSize(func, dimension){
    let size = func(dimension);
    if(size == 'L' || 'M') {
        return true;
    }
    return false;
}
let dimension = calcCone(1,5); // r, h
if (checkSize(getSize100, dimension)) {
    console.log(`Enough size, dimension is :${dimension}`);
} else {
    console.log(`Short size, dimension is:${dimension}`);
}
