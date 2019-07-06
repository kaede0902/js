const data = [1,2,5,6,7,8,11,12,20,22,24,100,101,102,];

for (let num in data) {
    if (typeof(data[num])==='number' && (data[num]%2==0))
        console.log(data[num]);
}
// for inで作った一時変数はstringで0から始まる
