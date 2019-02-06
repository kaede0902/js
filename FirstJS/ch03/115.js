const sam1 = {
    name: 'Sam',
    age: 4,
};
// console.log(sam1);

const sam2 = {name: 'Sam',age: 4,};
// console.log(sam2);

// console.log(sam1.name === sam2.name);
// console.log(sam1.age === sam2.age);
// console.log(sam1 === sam2); // 2 are diffrent

const sam3 = {
    name: 'Sam',
    classification: { // 分類
        kingdom: 'Animalia',
        phylium: 'Chordata',
        class: 'Mamalia',
        order: 'Carvivoria',
        familiy: 'Felinae',
        subfamiliy: 'Felinae',
        genus: 'Felis',
        species: 'F, catus',
    },
};
// console.log('sam3:',sam3);
// console.log('faml:',sam3.classification.familiy);
// console.log('[genus]:', sam3['classification']['genus']);

sam3.speak = function () {
    return 'Meow!';
}
console.log(sam3.speak());

delete sam3.classification;
delete sam3.speak;
console.log(sam3);




