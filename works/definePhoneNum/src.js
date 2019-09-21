let reg_ykhm = /045-\d{3}-\d{4}$/;
let reg_tko = /03-\d{4}-\d{4}$/;

let form = document.getElementById('form');
form.onsubmit = () => {
    let val = form.hoge.value;
    if (reg_ykhm.test(val))
        alert(`${val} : Yokohama`);
    else if (reg_tko.test(val))
        alert(`${val} : Tokyo`);
    else 
        alert(`${val} : Not Yokohama or Tokyo`);
    return false;
}
