let addZero = (num, digit) => {
    let strNum = String(num);
    while(strNum.length < digit)
        strNum = '0' + strNum;
    return strNum;
}
console.log('test',addZero(9,3));
let songs = [
    'Stella', 'Satin Doll', 'Caravan', 'Mucho', 
    'My favorite things', 'Chance on Love',
    'To The Moon', 'Waltz', 'Willow Weep', 'Bluesette',
];
for (i=0; i<songs.length; i++) {
    console.log(`${addZero(i+1,2)}.${songs[i]}`);
}
