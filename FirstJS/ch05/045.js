let x = 0;
while(true){
    x += 0.1;
    console.log(x);
    if (Math.abs(x - 1.0) < Number.EPSILON)
        break;
} console.log(`Stopped at ${x}`);