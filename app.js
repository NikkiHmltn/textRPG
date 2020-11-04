let instructions = document.querySelector("#instructions");
let startButton = document.querySelector('#start-game');
let gameArea = document.querySelector(".game-area");
let playerDisplay = document.querySelector(".player-info");
let buttonArea = document.querySelector(".button-container");
console.log(buttonArea);


// only one class for now, default class
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
    gold: 0,
    weight: 85
}



// //on click it displays instructions
const displayInstructions = () => {
    gameArea.textContent = 'Click to explore, fight monsters, and save your head from the chopping block!' 
}

//on click it starts the game
const startGame = () => {
    
    gameArea.textContent = `You wake up in a dank and dark prison cell. There is little light coming through the slotted bars in the cell door, but you can hear a few footsteps approaching. A deep voice beckons you from the other side. "Prisoner, I have a task for you to complete. If you accept and complete it successfully, I will pardon all your crimes. Fail and its back to the chopping block, do you accept?" Well, do you accept?`

    let noBtn = document.createElement('button')
    noBtn.textContent = "I'm fine sitting here until I die";
    noBtn.id = "no-btn";
    buttonArea.appendChild(noBtn);

    let yesBtn = document.createElement('button')
    yesBtn.textContent = "Whats the worst that can happen?"
    yesBtn.id = "yes-btn";
    buttonArea.appendChild(yesBtn);

    console.log(yesBtn)
    console.log(noBtn)

    if(yesBtn.clicked == true) {
        scerario1()
    }
    if(noBtn.clicked == true) {
        gameOver1()
    }

    playerDisplay.innerText = `Name: ${player.name} \n Health: ${player.health}\n Strength: ${player.strength} \n Stamina: ${player.stamina} \n Gold: ${player.gold} \n Weight: ${player.weight}`;

    playerDisplay.style.textAlign = "right";

    //creates a reset button once start game has been clicked
    let resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset'
    resetBtn.id = 'reset-btn'
    playerDisplay.appendChild(resetBtn);
    if (document.getElementById('reset-btn').clicked == true) {
    (gameArea.textContent = ' ');
};
}
instructions.addEventListener('click', displayInstructions);
startButton.addEventListener('click', startGame);




