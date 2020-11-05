// These functions are for the storyline/path to victory

function scenario1 () {
    infoArea.textContent = "You hear the click of the door unlocking as the king and his guards greet you at the door. The king explains his daughter, the princess, has fallen ill. He wants you to retrieve a potion from the hermit in the swamp that may be able to save her. He gives you a golden card and instructs you to keep it until after the task is completed. It looks worth a lot. Despite being recently freed, the king swiftly kicks you out of the city and instructs you to get on your way. Good thing the guards gave you back your old weapons.";

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }
    
    let adventureBtn = document.createElement('button');
    adventureBtn.id = 'travel-btn';
    adventureBtn.textContent = 'Venture Forth!'
    buttonArea.appendChild(adventureBtn)

    adventureBtn.addEventListener('click', function() {
        scenario2(pickMonster());
    })

    // let book = items.id[0]
    // console.log(book)
//     inventorySlot.appendChild(book);
};

function scenario2() {
    infoArea.textContent = `As you venture further away from the township, you come to a standstill at a crossroads. Several paths appear before you, but there is no markings of where you are or where they lead. As you ponder your next move, a voice comes up behind you. \n "${currentMonster.text}" \n They don't look like they want to have a friendly chat. Draw your sword!`

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    let battleBtn = document.createElement('button');
    battleBtn.id = 'battle-btn';
    battleBtn.textContent = 'Fight!'
    buttonArea.appendChild(battleBtn)

    battleBtn.addEventListener('click', function(){
        fightTime(currentMonster);
    })


}
//Functions for exploring!

function exploreSwamp() {
    infoArea.textContent = `This is definitely a swamp. Smells like a swamp. Looks like a swamp. You wonder if there are any ogres here.`
    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    let exploreBtn = document.createElement('button')
    exploreBtn.textContent = "Look Around";
    exploreBtn.id = "explore-btn";
    buttonArea.appendChild(exploreBtn);
}

function exploreDesert() {
    infoArea.textContent = `A vast desert appears before you. Sand. It's coarse, and rough, and irritating, and it gets everywhere. Maybe if you look around, you'll find someone? Or you could just look silly wandering the desert alone. No one but the lizards may laugh at you. Beware their teeth.`

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }
    let exploreBtn = document.createElement('button')
    exploreBtn.textContent = "Look Around";
    exploreBtn.id = "explore-btn";
    buttonArea.appendChild(exploreBtn);
}
function exploreMountain() {
    infoArea.textContent = `Tall, jagged spires jut up from the Earth to form these majestic peaks covered in light snow. How many years did it take to form each rock until this hill became a mountain? ... It's probably fake. You should climb to the top to see if the world looks round or flat from there.`
    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }
    let exploreBtn = document.createElement('button')
    exploreBtn.textContent = "Look Around";
    exploreBtn.id = "explore-btn";
    buttonArea.appendChild(exploreBtn);
}

//These functions are lose conditions written into the story

function gameOver1 () {
    infoArea.textContent = "You felt more content to sit and wait for your oncoming execution. The king is disappointed in your choice, but you'd never give the bourgeois the satisfaction. You only pray the headsman's axe gives you a clean cut the first time round. \n GAME OVER";
}

function fallenInBattle () {
    infoArea.textContent = `With a final cackle from the creature, you fall to the ground. Outdone by a ${currentMonster.name}... \n GAME OVER`
}