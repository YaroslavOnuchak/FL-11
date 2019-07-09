let Prize = 0;
let increase = 4;
let minNumRange = 0;
let maxNumRange = 8;
let atteFirst = 100, atteSecon = 50, atteThir = 25;
let prize = [atteFirst, atteSecon, atteThir];
let numMax = maxNumRange;
let numMin = minNumRange;
let number, start, Pocket,
do {
    start = confirm(`Do you want to play a game?`);
    if (!start) {
        alert(`You did not become a billionaire, but can.`);
    }
} while (!start);
do {
    let attempts = 2, win = false, attemptsLeft = attempts + 1;
    number = Math.floor(Math.random() * (numMax - numMin) + numMin);
    while (win === false) {
        for (let i = 0; i <= attempts; i++) {
            let MinMax = `Choose a roulette pocket number from ${numMin} to ${numMax}\n`;
            let Attempt = `Attempts left: ${attemptsLeft}\n`;
            let totalPrize = `Total prize: ${Prize}\n`
            let posiblePrize = `Possible price on current attempt: ${prize[i]}`;
            let message = `${MinMax}${Attempt}${totalPrize}${posiblePrize}`;
            Pocket = +prompt(`Enter a number of pocket on which the ball could land. \n${message}`);
            console.log(Pocket);
            if (number === Pocket) {
                Prize += prize[i];
                start = confirm(`Congratulation, you won! Your prize is: ${Prize} $.\nDo you want to continue?`);
                if (start) {
                    win = true;
                    i = attempts;
                    numMax += increase;
                    for (let j = 0; j < prize.length; j++) {
                        prize[j] *= 2;
                    }
                } else {
                    alert(`Thank you for your participation. Your prize is: ${Prize} $`);
                }
            } else {
                alert(`Thank you for your participation. Your prize is: ${Prize} $`);
                if (i === attempts) {
                    start = confirm(`Do you want to play a game again?`);
                    win = true;
                    Prize = 0;
                    numMax = maxNumRange;
                    prize = [atteFirst, atteSecon, atteThir];
                }
            } attemptsLeft--;
        }
    }
} while (start);