
const monthly = {
    card: {
        Netflix: 1296,
        YJ: 1360,
        AppleMusic: 480,
        Prime: 400,
        Wimax: 3684,
        DMM: 4980,
    },
    cash: {
        JR_PASS: 13600,
        Eat: 25000,
        Meet: 5000,
    },
};

console.log(
    '\n',
    sum(monthly),
);



function sum(obj) {
    let result = '';
    let total = 0;
    for (let ctgr in obj) {
        result += `${ctgr}: \n`;

        let subTotal = 0;
        for (let item in obj[ctgr]) {
            result += `${item}: ${obj[ctgr][item]} \n`;
            subTotal += obj[ctgr][item];
        }
        result += ` -> subTotal:${subTotal} \n`;
        total += subTotal
    }
    result += `-> total: ${total}`;
    return result;
    // where is keys???
}
//return `${obj}total:${total}`;
// then, [object][object] returns. why?
