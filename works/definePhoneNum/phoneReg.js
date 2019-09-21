let num_ykhm = '045-444-5555';
let num_ykhm2 = '0454445555';
let num_tko = '03-0000-8888';
let reg_ykhm = /045-\d{3}-\d{4}/;
let reg_ykhm2 = /045[\-?]\d{3}[\-?]\d{4}/;
let reg_tko = /03-\d{4}-\d{4}/;
let test = (reg,num) => {
    console.log(reg.test(num));
}
//test(reg_ykhm,num_ykhm2);
//test(reg_ykhm2,num_ykhm);
//test(reg_ykhm2,num_ykhm2);

let hoge = '045x';
let hoge2 = '045';
let fooreg = /045[x?]/;
test(fooreg, hoge); test(fooreg, hoge2);
// how can I get 045- and 045 ??????

