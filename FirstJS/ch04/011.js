function rand(m,n) {
    return m + Math.floor((n - m + 1)*Math.random());
} // (n -m +1)is 6. rtn 1~5.
function randFace() {
    return ['crown','anchor','heart',
        'spade','club','diamond',][rand(0,5)]
} // what is this??
let funds = 50;
let round = 0;
// console.log(randFace());

while(0 < funds && funds < 100) {
    round++;
    console.log(`${round}th round.\n
        ${funds}penny in his wallet`);
    let bets = {
        crown: 0, anchor: 0, heart: 0,,
        club: 0, diamond: 0,
    };
    let totalBet = rand(1,funds);
    if (totalBet == 7) {
        bets.heart = totalBet = funds;
    } else {
        let remaining = totalBet;
        do {
            let bet = rand(1,remaining);
            let face = randFace();

            bets[face] += bet;
            remaining -= bet;
        } while (remaining > 0)
    }
    funds -= totalBet;
    console.log(`bet: ${totalBet} (`
        + Object.keys(bets).map(face => 
            `${face}: ${bets[face]}`)
                .join(', ') + ')');

    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`Dice face: ${hand.join(', ')}`);

    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
    funds += winnings;
    console.log(`Win: ${winnings}`);
    }
}



console.log(`funds: ${funds}`);

if (100 < funds)
    console.log('Returns to the ship happily.');
else
    console.log('Saddly returns to the ship.');

