function rand(from,to) {
    return from + Math.floor((to - from + 1)*Math.random());
} // (n -m +1)is 6. rtn 1~5.
function randFace() {
    return ['crown','anchor','heart',
        'spade','club','diamond',][rand(0,5)]
} // what is this??
let funds = 50;
let round = 0;

while(0 < funds && funds < 100) {
	round++;
	console.log(`\n${round}th round. ---------------------`);
    console.log(`${funds} penny in my wallet\n`);
    let bets = {
        crown: 0, anchor: 0, heart: 0,
        spade: 0, club: 0, diamond: 0,
    };
    let totalBet = rand(1,funds); // 1~50
    if (totalBet == 7) {
        bets.heart = totalBet = funds;
    } else {
        let remaining = totalBet;
        do {
            let bet = rand(1,remaining); // 1~50
            let face = randFace();

            bets[face] += bet; // when face change?
            remaining -= bet;
        } while (remaining > 0)
    }
	funds -= totalBet;
	// print totalbet and bets[] array.
    console.log(`Total bet: ${totalBet} (`
        + Object.keys(bets).map(face => 
            `${face}: ${bets[face]}`)
                .join(', ') + ')');

    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace()); // crown, anchor, spade in hand.
	}
	// print hand array
    console.log(`Dice face: ${hand.join(', ')} \n`);

    let winnings = 0;
    for (let dice = 0; dice < hand.length; dice++) { //0~3
		let face = hand[dice]; // hand[0]=crown,[1]=spade...
		if (0 < bets[face])
			winnings += bets[face];
	}
	funds += winnings; // why this split?
	console.log(`Win: ${winnings}`);
}

console.log(`funds: ${funds}`);

if (100 < funds)
    console.log('Returns to the ship happily.');
else
    console.log('Saddly returns to the ship.');

