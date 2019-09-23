let reg_kngw_section = /221-\d{4}$/;

let region = document.getElementById('region');

let form = document.getElementById('form');
form.onsubmit = () => {
    let num = form.hoge.value;
    if (reg_ykhm.test(num))
        region.innerHTML = (`${num}: Yokohama`);
    return false;
}

// No need of regexp....
// FS boss said to upgrade the game...
