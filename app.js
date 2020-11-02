let instructions = document.querySelector("#instructions");
let startButton = document.querySelector('#start-game');
let gameArea = document.querySelector(".game-area");
let playerDisplay = document.querySelector(".player-info");



let fighterClass = {
    health: 80,
    strength: 3,
    ability: {
        id: 0,
        name: "Slice and Dice",
        attack: 10,
        staminaCost: 5,
        text: 'Sching! You swing and deal 10 damage to the creature.'
    }
}

//holds player info 
let player = {
    name: "TBD",
    health: fighterClass.health,
    strength: fighterClass.strength,
    stamina: 40,
    weight: 85
}

// //on click it displays instructions
const displayInstructions = () => {
    gameArea.textContent = 'Click to explore, fight monsters, and save your head from the chopping block!' 
}

//on click it starts the game
const startGame = () => {
    console.log('in here')
    gameArea.textContent = 'Starting text goes here this is simply just a test'
}
instructions.addEventListener('click', displayInstructions());
startButton.addEventListener('click', startGame());
