const myFighter = new Fighter({
  name: 'John',
  damage: 20,
  hp: 100,
  agility: 25
});

const yourFighter = new Fighter({
  name: 'Batman',
  damage: 20,
  hp: 100,
  agility: 40
});

function Fighter(properties) {
  let health = properties.hp,
     wins = 0,
    losses = 0;
    
  return {
    get getName() {
      return properties.name;
    },
    get getDamage() {
      return properties.damage;
    },
    get getAgility() {
      return properties.agility;
    },
    get getHealth() {
      return health;
    },

    attack(fighter) {
      const fullChance = 100;
      let probability = fullChance - fighter.getAgility;
      let chance = Math.floor(Math.random() * (fullChance));
      if (chance <= probability) {
        fighter.dealDamage(this.getDamage);
        return `${this.getName} makes ${this.getDamage} damage to ${fighter.getName}`;
      } else {
        return `${this.getName} attack missed`;
      }
    },

    logCombatHistory() {
      return `Name: ${this.getName}, Wins: ${wins}, Losses: ${losses}`;
    },

    heal(amountHp) {
      if (health + amountHp > this.getHealth) {
        health = this.getHealth;
      } else {
        health = health + amountHp;
      }
      return health;
    },

    dealDamage(amountDmg) {
      if (health - amountDmg < 0) {
        health = 0;
      } else {
        health = health - amountDmg;
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
    console.log(`${myFighter.getName} health: ${myFighter.getHealth}`);
    console.log(`${yourFighter.getName} health: ${yourFighter.getHealth}`);
    console.log(myFighter.logCombatHistory());
    console.log(yourFighter.logCombatHistory());
  } else if (yourFighter.getHealth === 0) {
    myFighter.addWin();
    yourFighter.addLoss();
    console.log(`${myFighter.getName} health: ${myFighter.getHealth}`);
    console.log(`${yourFighter.getName} health: ${yourFighter.getHealth}`);
    console.log(myFighter.logCombatHistory());
    console.log(yourFighter.logCombatHistory());
  }
}

battle(myFighter, yourFighter);