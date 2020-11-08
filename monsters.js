let monster = [

    {
        id: 01,
        name: "Wayword Doggo",
        health: 10,
        strength: 1,
        gold: 5,
        text: "Bork! Bork! Bork!"
    },

    {
        id: 02,
        name: "Used Caravan Salesman",
        health: 15,
        strength: 2,
        gold: 10,
        text: "You can fit so many goblins in this caravan, baby!"
    },

    {
        id: 03,
        name: "Karen",
        health: 20,
        strength: 4,
        gold: 20,
        text: "I want to speak with your supervisor!"
    }


]

let theKing = {
    name: "The King",
    health: 50,
    strength: 3,
    gold: 100,
    text: "Have it your way!"
}

class Monster {
    constructor (info) {
        this.id = info.id
        this.name = info.name
        this.health = info.health
        this.strength = info.strength
        this.gold = info.gold
        this.text = info.text
    }
}