function rand(m,n) {
    return m + Math.floor((n - m + 1)*Math.random());
} // (n -m +1)is 6. rtn 1~5.
function randFace() {
    return ['crown','anchor','heart','club','diamond',][rand(0,5)]
} // what is this??
let funds = 50;
let round = 0;
// console.log(randFace());

while(0 < funds && funds < 100) {
    round++;
    console.log(`${round}th round.\n
        ${funds}penny in his wallet`);
}

let bets = {
    crown: 0, anchor: 0, heart: 0, club: 0, diamond: 0,
};
let totalBet = rand(1,funds);
if (totalBet == 7) {
    bets.heart = totalBet = funds;
} else {
    let remaining = totalBet;
}