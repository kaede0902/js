let reg_ykhm = /045-\d{3}-\d{4}$/;
let reg_kwsk = /044-\d{3}-\d{4}$/;
let reg_tko = /03-\d{4}-\d{4}$/;
let reg_aoum = /0428-\d{2}-\d{4}$/;
let reg_chiba = /043-\d{3}-\d{4}$/;
let reg_atugi = /046-\d{3}-\d{4}$/;
let reg_fjsw = /046[67]-\d{2}-\d{4}$/;

let region = document.getElementById('region');

let form = document.getElementById('form');
form.onsubmit = () => {
    let num = form.hoge.value;
    if (reg_ykhm.test(num))
        region.innerHTML = (`${num}: Yokohama`);
    else if (reg_tko.test(num))
        region.innerHTML = (`${num}: Tokyo`);
    else if (reg_kwsk.test(num))
        region.innerHTML = (`${num}: Kawasaki`);
    else if (reg_aoum.test(num))
        region.innerHTML = (`${num}: Aoume`);
    else if (reg_chiba.test(num))
        region.innerHTML = (`${num}: Chiba`);
    else if (reg_atugi.test(num))
        region.innerHTML = (`${num}: Atugi or Yokosuka`);
    else if (reg_fjsw.test(num))
        region.innerHTML = (`${num}: Fujisawa or Kamakura`);
    else
        region.innerHTML = (`${num}: None of our list, sorry`);
    return false;
}
