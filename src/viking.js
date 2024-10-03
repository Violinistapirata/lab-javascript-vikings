// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength;
    }

    receiveDamage (damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this.name = name;
    }
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry () {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
        this.randomSaxon = this.pickRandomSoldier(this.saxonArmy)
        this.randomViking = this.pickRandomSoldier(this.vikingArmy)
    }

    addViking (viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }
    
    pickRandomSoldier (army) {
        let randomIndex = 0;
        randomIndex = Math.floor(Math.random() * army.length);
        return randomIndex;
    }

    vikingAttack () {
        const currentSaxon = this.saxonArmy[this.randomSaxon];
        const currentViking = this.vikingArmy[this.randomViking];
        currentSaxon.receiveDamage(currentViking.strength);
        const currentSaxonIndex = this.saxonArmy.indexOf(currentSaxon);
        if (currentSaxon.health <= 0) {
            this.saxonArmy.splice(currentSaxonIndex, 1);
            return `A Saxon has died in combat`
        }
        return `A Saxon has received ${currentViking.strength} points of damage`
    }

    saxonAttack () {
        const currentSaxon = this.saxonArmy[this.randomSaxon];
        const currentViking = this.vikingArmy[this.randomViking];
        currentViking.receiveDamage(currentSaxon.strength);
        const currentVikingIndex = this.vikingArmy.indexOf(currentViking);
        if (currentViking.health <= 0) {
            this.vikingArmy.splice(currentVikingIndex, 1);
            return `${currentViking.name} has died in act of combat`
        }
        return `${currentViking.name} has received ${currentSaxon.strength} points of damage`
    }
}


/* const newArmy = ["fulanito", "menganito", "pepito"];

let viking, saxon, war;

function generateViking() {
    const name = 'Harald';
    const strength = 150;
    const health = 300;
    return new Viking(name, health, strength);
}

function generateSaxon() {
    const health = 60;
    const strength = 25;
    return new Saxon(health, strength);
}

beforeEach(() => {
    viking = generateViking();
    saxon = generateSaxon();
    war = new War();
});

console.log(pickRandomSoldier(newArmy)); */