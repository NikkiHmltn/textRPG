let instructions = document.querySelector("#instructions");
let startButton = document.querySelector('#start-game');
let gameArea = document.querySelector(".game-area");
let playerDisplay = document.querySelector(".player-info");
let buttonArea = document.querySelector(".button-container");
let infoArea = document.querySelector(".info-container")
let playerInfo = document.querySelector(".player-display")
let currentMonster 


// only one class for now, default class
let fighterClass = {
    health: 80,
    strength: 3,
    stamina: 40,
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
    stamina: fighterClass.stamina,
    gold: 0,
    checkHealth() {
        if (player.health <= 0) {
            gameOver1();
        } 
    }
}


//fight mechanics go here
function pickMonster() {
    randomMonster = monster[Math.floor(Math.random() * monster.length)]
    return randomMonster
}

function fightTime() {
    
    let playerAttack = Math.floor((Math.random() * player.strength) + 1);
    let enemyAttack = Math.floor((Math.random() * randomMonster.strength) +1);
    console.log(enemyAttack);
}
fightTime(pickMonster())

//maybe randomize a number, probably between 1 and strength max, multiplied by 2 in order to deal attacks on health
//transfer gold to character upon creature death
//check to make sure when health is at 0, death occurs for monster or player

// //on click it displays instructions
const displayInstructions = () => {
    gameArea.textContent = 'Click to explore, fight monsters, and save your head from the chopping block! \n Press Start Game to begin your journey.' 
}
playerInfo.innerText = `Name: ${player.name} \n Health: ${player.health}\n Strength: ${player.strength} \n Stamina: ${player.stamina} \n Gold: ${player.gold}`;

    playerInfo.style.textAlign = "right";


//on click it starts the game
const startGame = () => {
    
    infoArea.textContent = `You wake up in a musty, dark prison cell. There is little light coming through the slotted bars in the cell door, but you can hear a few footsteps approaching. A deep voice beckons you from the other side. "Prisoner, I have a task for you to complete. If you accept and complete it successfully, I will pardon all your crimes. Fail and its back to the chopping block, do you agree?" Well, do you accept?`

    let noBtn = document.createElement('button')
    noBtn.textContent = "I'm fine sitting here until I die";
    noBtn.id = "no-btn";
    buttonArea.appendChild(noBtn);

    let yesBtn = document.createElement('button')
    yesBtn.textContent = "Whats the worst that can happen?"
    yesBtn.id = "yes-btn";
    buttonArea.appendChild(yesBtn);

    yesBtn.addEventListener('click', function(){
        scenario1();
    });
    noBtn.addEventListener('click', function(){
        gameOver1();
    });
    
    startButton.style.display = 'none';

    //creates a reset button once start game has been clicked
    let resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset'
    resetBtn.id = 'reset-btn'
    resetBtn.style.display = 'block'
    playerDisplay.appendChild(resetBtn);
    resetBtn.addEventListener('click', function(){
        infoArea.textContent = " ";
        buttonArea.textContent = " ";
    
        if (startButton.style.display === 'none') {
            (startButton.style.display = 'block')
        }
        if (resetBtn.style.display === 'block') {
            (resetBtn.style.display = 'none')
        }
        
        //remove hidden properties
    })
};

//give these buttons a hidden class
instructions.addEventListener('click', displayInstructions);
//hide start on click and reveal reset button
startButton.addEventListener('click', startGame)




