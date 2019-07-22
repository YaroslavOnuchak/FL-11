const myFighter = new Fighter({
  name: 'John',
  damage: 20,
  hp: 100,
  agility: 25
});

const yourFighter = new Fighter({
  name: 'Batman',
  damage: 25,
  hp: 100,
  agility: 50
});

function Fighter(playersInfo) {
  let health = playersInfo.hp,
     wins = 0,
    losses = 0;
    
  return {
    get getName() {
      return playersInfo.name;
    },
    get getDamage() {
      return playersInfo.damage;
    },
    get getAgility() {
      return playersInfo.agility;
    },
    get getHealth() {
      return health;
    },

    attack(fighter) {
      const maxAgility = 100;
      let chanceAgility = maxAgility - fighter.getAgility;
      let chanceHit = Math.floor(Math.random() * maxAgility);
      if (chanceHit <= chanceAgility) {
        fighter.dealDamage(this.getDamage);
        return `${this.getName} makes ${this.getDamage} damage to ${fighter.getName}`;
      } else {
        return `${this.getName} attack missed`;
      }
    },

    logCombatHistory() {
      console.log(`Name: ${this.getName}, Wins: ${wins}, Losses: ${losses}`);
    },

    heal(restoreHp) {
      if (health + restoreHp > this.getHealth) {
        health = this.getHealth;
      } else {
        health += restoreHp;
      }
      return health;
    },

    dealDamage(decreaseHp) {
      if (health - decreaseHp < 0) {
        health = 0;
      } else {
        health -= decreaseHp;
      }
      return health;
    },

    addWin() {
      wins += 1;
    },

    addLoss() {
      losses += 1;
    }
  };
}



function battle(myFighter, yourFighter) {
  if (myFighter.getHealth === 0) {
    console.log(`${myFighter.getName} is dead and can't fight`);
  } else if (yourFighter.getHealth === 0) {
    console.log(`${yourFighter.getName} is dead and can't fight`);
  }
  while (myFighter.getHealth > 0 && yourFighter.getHealth > 0) {
    console.log(myFighter.attack(yourFighter));
    if (yourFighter.getHealth > 0) {
     console.log(yourFighter.attack(myFighter));
    }
  }
  if (myFighter.getHealth === 0) {
    myFighter.addLoss();
    yourFighter.addWin();
  } else if (yourFighter.getHealth === 0) {
    myFighter.addWin();
    yourFighter.addLoss();

  }
}

battle(myFighter, yourFighter);
myFighter.logCombatHistory();
yourFighter.logCombatHistory();
battle(myFighter, yourFighter);