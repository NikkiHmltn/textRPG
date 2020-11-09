let instructions = document.querySelector("#instructions");
let startButton = document.querySelector('#start-game');
let gameArea = document.querySelector(".game-area");
let playerDisplay = document.querySelector(".player-info");
let buttonArea = document.querySelector(".button-container");
let infoArea = document.querySelector(".info-container")
let playerInfo = document.querySelector(".player-display")
let inventorySpace = document.querySelector(".inventory-space")
let inventorySlot = [];
let currentMonster 
let randomItem

console.log(randomItem)
console.log(currentMonster)
//change player and fighterClass to a class
// only one class for now, default class

//holds player info 
let player = {
    name: "",
    health: 80,
    strength: 3,
    stamina: 40,
    gold: 0,
    checkHealth() {
        if (player.health <= 0) {
            fallenInBattle();
        } 
    }
}



class Reset {
    constructor(player) {
        this.name = player.name
        this.health = player.health
        this.strength = player.strength
        this.stamina = player.stamina
        this.gold = player.gold
    }
}
    
    
    // inventorySpace.appendChild(invLabel)

function itemIteration() {
    let refresh = document.querySelector('.inventory-space').children;
    while (refresh.length) {
    refresh[0].remove();
    }
    let invL = document.createElement('div')
    invL.classList.add('inventory-label')
    invL.textContent = "Inventory";
    inventorySpace.appendChild(invL)

    for(let i = 0; i < inventorySlot.length; i++) {
        let item = inventorySlot[i];
        let itemPic = document.createElement('img')
        itemPic.setAttribute('src', item.image)
        itemPic.classList.add('item');
        itemPic.setAttribute('title', `${item.description}`)
        //grab the image then append it
        inventorySpace.appendChild(itemPic)
        
    }
}

setInterval(itemIteration, 1000/60)
//fight mechanics go here
function pickMonster() {
    currentMonsterTemplate = monster[Math.floor(Math.random() * monster.length)]
    
    currentMonster = new Monster(currentMonsterTemplate)
}

function pickItem() {
    currentItem = items[Math.floor(Math.random() * items.length)]

    randomItem = new Items(currentItem)
}

function findItem() {
    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    infoArea.textContent = `You found a ${randomItem.name}! It could be worth something to sell it.`
    inventorySlot.push(randomItem);

    let continueBtn = document.createElement('button')
    continueBtn.textContent = "Back to the Crossroads";
    continueBtn.id = "continue-btn";
    buttonArea.appendChild(continueBtn);

    continueBtn.addEventListener('click', function(){
        explore();
    })
    
}

function fightTime() {
    
    
    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }
    infoArea.textContent = `You are ambushed by a ${currentMonster.name}!`
    let attackBtn = document.createElement('button')
    attackBtn.textContent = "Attack";
    attackBtn.id = "attack-btn";
    buttonArea.appendChild(attackBtn);

    attackBtn.addEventListener('click', function() {
        let playerAttack = Math.floor((Math.random() * player.strength) + 3);
        let enemyAttack = Math.floor((Math.random() * currentMonster.strength) +1);
        currentMonster.health -= playerAttack,
        player.health -= enemyAttack,
        infoArea.innerHTML = `You hit the creature for ${playerAttack} damage! <br> The creature hits you for ${enemyAttack} damage. <br> Creature: ${currentMonster.name} <br> Health: ${currentMonster.health}`
        //check to make sure when health is at 0, death occurs for monster or player
        if (currentMonster.health <= 0) {
            infoArea.textContent = `With a final slice of your sword, you fell your enemy. \n You pick up ${currentMonster.gold} gold.`,
            //transfer gold to character upon creature death
            player.gold += currentMonster.gold;
            let btns = document.querySelector('.button-container').children;
    
                while (btns.length) {
                btns[0].remove();
                }
                let continueBtn = document.createElement('button')
                continueBtn.textContent = "Back to the Crossroads";
                continueBtn.id = "continue-btn";
                buttonArea.appendChild(continueBtn);

                continueBtn.addEventListener('click', function(){
                    explore();
                })
        }
        if (player.health <= 0) {
            fallenInBattle();
        }
    })


}

    let discoverSwamp = -1;
    let discoverDesert = -1;
    let discoverMountain = -1;

function explore() {
    backImage.style.backgroundImage = "url('imgs/crossroads.png')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "black";

    infoArea.textContent = `You arrive back at the crossroads. You see a few paths before you. Why don't you try to take a look around to see what you can find?`

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }
    let exploreBtn = document.createElement('button')
    exploreBtn.textContent = "Look Around";
    exploreBtn.id = "explore-btn";
    buttonArea.appendChild(exploreBtn);
    //give swamp, desert, mountain display: none and reveal when randomly chosen
    let swampBtn = document.createElement('button')
    swampBtn.textContent = "Swamp";
    swampBtn.id = "swamp-btn";
    buttonArea.appendChild(swampBtn);
    let desertBtn = document.createElement('button')
    desertBtn.textContent = "Desert";
    desertBtn.id = "desert-btn";
    buttonArea.appendChild(desertBtn);
    let mountainBtn = document.createElement('button')
    mountainBtn.textContent = "Mountain";
    mountainBtn.id = "mountain-btn";
    buttonArea.appendChild(mountainBtn);

    if(discoverSwamp === 1) {
        swampBtn.style.display = 'block'
    }
    if(discoverDesert === 1) {
        desertBtn.style.display = 'block'
    }
    if(discoverMountain === 1) {
        mountainBtn.style.display = 'block'
    }


    exploreBtn.addEventListener('click', function(){
        let exploreNum = Math.floor((Math.random() * 100) + 1)
        if (exploreNum <= 20 && discoverSwamp === -1) {
            swampBtn.style.display = 'block'
            infoArea.textContent = `You discovered the swamp!`
            discoverSwamp = 1
            } else if (discoverSwamp === 1) {
            pickMonster()
            fightTime()
            }
        if (21 <= exploreNum && exploreNum <= 40 && discoverDesert === -1) {
            desertBtn.style.display = 'block'
            infoArea.textContent = `You discovered the desert!`
            discoverDesert = 1
            } else if (discoverDesert === 1){
            pickMonster()
            fightTime()
            }
        if (41 <= exploreNum && exploreNum <= 60) {
            pickMonster()
            fightTime()
            }
        if (61 <= exploreNum && exploreNum <= 80 && discoverMountain === -1) {
            mountainBtn.style.display = 'block'
            infoArea.textContent = ` You discovered the mountains!`
            discoverMountain = 1
            } else if (discoverMountain === 1){
            pickMonster()
            fightTime()
            }
        if (81 <= exploreNum && exploreNum <=100){
            pickItem()
            findItem()
            }
    })
    swampBtn.addEventListener('click', function(){
        exploreSwamp();
    })
    desertBtn.addEventListener('click', function(){
        exploreDesert();
    })
    mountainBtn.addEventListener('click', function(){
        exploreMountain();
    })

    
    
}

// //on click it displays instructions
const displayInstructions = () => {
    infoArea.textContent = 'Click to explore, fight monsters, and save your head from the chopping block! \n Press "Start Game" to begin your journey.' 
}



//on click it starts the game
const startGame = () => {
    
    var person = prompt("Please enter your name", "Player Name");

    if (person != null) {
        player.name = person
        beginScene()
    }
    
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
        inventorySlot = []; 
        player = {
            name: "TBD",
            health: 80,
            strength: 3,
            stamina: 40,
            gold: 0,
            checkHealth() {
                if (player.health <= 0) {
                    fallenInBattle();
                } 
            }
        }
        // resetPlayer = new Reset(player);
        discoverSwamp = -1;
        discoverDesert = -1;
        discoverMountain = -1;
        hutDiscover = -1
        shop = -1
        springs = -1
    //remove hidden properties
        if (startButton.style.display === 'none') {
            (startButton.style.display = 'block')
        }
        if (resetBtn.style.display === 'block') {
            (resetBtn.style.display = 'none')
        }
        
        
    })
};
startButton.addEventListener('click', startGame);
instructions.addEventListener('click', displayInstructions);

function updatePlayerInfo() {
    playerInfo.innerText = `Name: ${player.name} \n Health: ${player.health}\n Strength: ${player.strength} \n Stamina: ${player.stamina} \n Gold: ${player.gold}`;

    playerInfo.style.textAlign = "center";
}
setInterval(updatePlayerInfo, 1000 / 60)