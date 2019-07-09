let number, start, numPocket, increase = 4, userPrize = 0, minDefNum = 0, maxDefNum = 8;
let atteFirst = 100, atteSecon = 50, atteThir = 25;
let prize = [atteFirst, atteSecon, atteThir];
let maxNum = maxDefNum, minNum = minDefNum;
do {
    start = confirm(`Do you want to play a game?`);
    if (!start) {
        alert(`You did not become a billionaire, but can.`);
    }
} while (!start);
do {
    let attempts = 2, win = false, attemptsLeft = attempts + 1;
    number = Math.floor(Math.random() * (maxNum - minNum) + minNum);
    while (win === false) {
        for (let i = 0; i <= attempts; i++) {
            let MinMax = `Choose a roulette pocket number from ${minNum} to ${maxNum}\n`;
            let Attempt = `Attempts left: ${attemptsLeft}\n`;
            let totalPrize = `Total prize: ${userPrize}\n`
            let posiblePrize = `Possible price on current attempt: ${prize[i]}`;
            let message = `${MinMax}${Attempt}${totalPrize}${posiblePrize}`;
            numPocket = +prompt(`Enter a number of pocket on which the ball could land. \n${message}`);
            console.log(numPocket);
            if (number === numPocket) {
                userPrize += prize[i];
                start = confirm(`Congratulation, you won! Your prize is: ${userPrize} $.\nDo you want to continue?`);
                if (start) {
                    win = true;
                    i = attempts;
                    maxNum += increase;
                    for (let j = 0; j < prize.length; j++) {
                        prize[j] *= 2;
                    }
                } else {
                    alert(`Thank you for your participation. Your prize is: ${userPrize} $`);
                }
            } else {
                alert(`Thank you for your participation. Your prize is: ${userPrize} $`);
                if (i === attempts) {
                    start = confirm(`Do you want to play a game again?`);
                    win = true;
                    userPrize = 0;
                    maxNum = maxDefNum;
                    prize = [atteFirst, atteSecon, atteThir];
                }
            } attemptsLeft--;
        }
    }
} while (start);