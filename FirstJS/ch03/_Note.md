#chap 03 Note

## Template
* $ {hoge}を` ` の中に入れることで文字列の中で変数として出力できる。
    * 計算式も入れることができる

## obj

```sam3.speak = function () {
    return 'Meow!';
} ```
でobjにfunctionを入れられる。
また
```
    delete sam3.classification;
    delete sam3.speak;
```
で中身を削除できる。