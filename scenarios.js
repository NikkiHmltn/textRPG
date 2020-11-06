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
function scenario3() {
    infoArea.textContent = `He shakes his head. "What a shame. Anyways, you're probably lookin' for a potion, huh? Well, man... Ya gotta bring me some ingredients back. But be quick about it, I have that competition at sundown." \n Guess there's nothing left here to do. Did the hermit even mention what kind of ingredients he needed back? `

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    let exploreBtn = document.createElement('button')
    exploreBtn.textContent = "Back to the Swamp";
    exploreBtn.id = "explore-btn";
    buttonArea.appendChild(exploreBtn);

    exploreBtn.addEventListener('click', function(){
        exploreSwamp();
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

    let swampHermit = document.createElement('button')
    swampHermit.textContent = "Hermit's Hut";
    swampHermit.id = "swamp-hermit-btn";
    buttonArea.appendChild(swampHermit);

    let continueBtn = document.createElement('button')
    continueBtn.textContent = "Back to the Crossroads";
    continueBtn.id = "continue-btn";
    buttonArea.appendChild(continueBtn);

    continueBtn.addEventListener('click', function(){
        explore();
    })

    if (hutDiscover = 1) {
        swampHermit.style.display = 'block'
    }

    let hutDiscover = -1

    exploreBtn.addEventListener('click', function(){
        let exploreNum = Math.floor((Math.random() * 100) + 1)

        if (hutDiscover === -1 && exploreNum <= 33) {
            discoverHermit();
        } else {
            pickMonster();
            fightTime();
        }
        if (exploreNum >= 34 && exploreNum <= 100) {
            infoArea.textContent = `HEY DONT FORGET TO ADD RANDOM EVENTS AND FIX YOUR START AND INSTRUCTIONS BUTTON`
        }
    })


}

function discoverHermit() {

    infoArea.textContent = `You spy a crooked, earthen hut. The roof is covered in some type of grass, and a small chinmey of smoke billows out from the back. Someone appears to be inside. It was almost hard to miss next to the crooked trees. As you approach the hut, you can hear the sound of a strange zither-like harmony coming from inside. It stops the second you raise your fist to knock on the door. \n "In a second, man!" \n A very bushy bearded old man pokes his head out of the window, gesturing for you to come closer. \n "Hey, are you here for the Tuesday night dulcimer competition?"`

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    let noBtn = document.createElement('button')
    noBtn.textContent = "...A dulci-what?";
    noBtn.id = "no-btn";
    buttonArea.appendChild(noBtn);

    let yesBtn = document.createElement('button')
    yesBtn.textContent = "They don't call me the Five Finger Dittier for nothing!"
    yesBtn.id = "yes-btn";
    buttonArea.appendChild(yesBtn);

    yesBtn.addEventListener('click', function(){
        sillyScenario1();
    });
    noBtn.addEventListener('click', function(){
        scenario3();
    });
    

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
    let continueBtn = document.createElement('button')
    continueBtn.textContent = "Back to the Crossroads";
    continueBtn.id = "continue-btn";
    buttonArea.appendChild(continueBtn);

    continueBtn.addEventListener('click', function(){
        explore();
    })
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

    let continueBtn = document.createElement('button')
    continueBtn.textContent = "Back to the Crossroads";
    continueBtn.id = "continue-btn";
    buttonArea.appendChild(continueBtn);

    continueBtn.addEventListener('click', function(){
        explore();
    })
}

//These functions are lose conditions written into the story

function gameOver1 () {
    infoArea.textContent = "You felt more content to sit and wait for your oncoming execution. The king is disappointed in your choice, but you'd never give the bourgeois the satisfaction. You only pray the headsman's axe gives you a clean cut the first time round. \n GAME OVER";
}

function fallenInBattle () {
    infoArea.textContent = `With a final cackle from the creature, you fall to the ground. Outdone by a ${currentMonster.name}... \n GAME OVER`
}