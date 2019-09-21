let reg_ykhm = /045-\d{3}-\d{4}$/;

let form = document.getElementById('form');
form.onsubmit = () => {
    let val = form.hoge.value;
    if (reg_ykhm.test(val))
        alert(`${val} : Yokohama`);
    else 
        alert(`${val} : Not Yokohama`);
    return false;
}
let reg_tko = /03-\d{4}-\d{4}/;
