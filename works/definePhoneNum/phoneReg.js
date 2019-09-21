let num_ykhm = '045-444-5555';
let num_tko = '03-0000-8888';
let reg_ykhm = /045-\d{3}-\d{4}/;
let reg_tko = /03-\d{4}-\d{4}/;
let test = (reg,num) => {
    console.log(reg.test(num));
}
test(reg_ykhm,num_ykhm);
test(reg_ykhm,num_tko);
test(reg_tko,num_tko);
