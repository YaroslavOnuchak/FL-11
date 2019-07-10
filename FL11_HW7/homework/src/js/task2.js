let userPrize = 0;
let minNumRange = 0;
let maxNumRange = 8;
let atteFirst = 100, atteSecon = 50, atteThir = 25;
let prize = [0, atteThir, atteSecon, atteFirst];
let numMax = maxNumRange+1;
let numMin = minNumRange;
let numberUser;
let gameAgain;
let gameContinue;
let number = Math.floor(Math.random() * (numMax - numMin));
const step = 4;
const stepPrize = 2;
const mess = confirm(`Do you want to play a game?`);
if (!mess) {
    alert(`You did not become a billionaire, but can.`);
}else {
    for (let i = 3; i >0; i--) {
        numberUser = +prompt(`Choose a roulette pocket number from 0 to ${maxNumRange}
               Attempts left: ${i}
               Total prize: ${userPrize}$
               Possible prize on current attempt: ${prize[i]}$`);
        if (number === numberUser) {
            gameContinue = confirm(
                `Congratulation, you won! Your prize is: ${(userPrize += prize[i])}$. Do you want to continue?`);
        }
        if (number !== numberUser && i <= 1) {
            alert(`Thank you for your participation. Your prize is: ${(userPrize += prize[0])}$`);
            gameAgain = confirm('Do you want to play again?');
        }
        if (gameAgain === false) {
            break;
        }
        if (gameContinue === false) {
            alert(`Thank you for your participation. Your prize is: ${userPrize}$`);
            gameAgain = confirm('Do you want to play again?');
        } else if (gameContinue === true) {
            maxNumRange += step;
            number = Math.floor(Math.random() * (numMax - numMin));
            prize = prize.map(item => item * stepPrize);
            i = step;
        } else if (gameAgain === true) {
            userPrize = 0;
            number = Math.floor(Math.random() * (numMax - numMin));
            prize = [0, atteThir, atteSecon, atteFirst];
            i = step;
        }
        gameAgain = null;
        gameContinue = null;
    }
}
