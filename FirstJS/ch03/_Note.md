#chap 03 Note

## Template Literal
* $ {hoge}を` ` の中に入れることで文字列の中で変数として出力できる。
    * 計算式も入れることができる

## obj

### generate
Empty object:
    const obj = {};
Add inner:
    obj.color = 'yellow';
Refer:
    obj.color
    obj['color']

As symbol():
    obj[SIZE] = 8;

Make Nest:
    const sam3 = {
        name: 'Sam',
        classification: { // 分類
            kingdom: 'Animalia',
            class: 'Mamalia',
        },
    };
same as json.

Nest Output: 
    sam3.classification.class

### Function
Function into object:
    sam3.speak = function () {
        return 'Meow!';
    } 

### Delete
like this:
    delete sam3.classification;
    delete sam3.speak;



## symbol();
Recognize as other things:
    const RED = Symbol();
    const BLUE = Symbol();

## String Literal
    const s = 'hello';
    const s2 = s.toUpperCase();
outputs: 'HELLO'

## List 
Initialize
    const a1 = [1,2,3,4];
Output:
    a[0]
length:
    a.length
Print the Last item
    a[a.length - 1]

## Obj in Array
Init:
    const a4 = [
        {name: 'Ruby', hardness: 9},
        {name: 'Diamond', hardness: 10},
        {name: 'Topaz', hardness: 8},
    ];
Output: 
    a4[1].name
    a4[2].hardness

## Date
Get: 
    const now = new Date();
Output:
    2019-02-12T09:59:22.521Z

Init Optinal time:
    const halloween = new Date(2016,9,31);
got 10/30.

Output Month, Date...
    now.getMonth();
        getDate,Day,Hours....

Output Visable String
    now.toString();

### Func arg Obj
Init
    function getSentence({
        subject, verb, object}) {
        return `${subject} ${verb} ${object}`
    }
    const o = {
        subject: 'I',
        verb: 'love',
        object: 'JavaScript',
    };
Output:
    getSentece(o);

