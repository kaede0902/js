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



