// These functions are for the storyline/path to victory
let backImage = document.querySelector(".image-background");
let gameTextColor = document.querySelector(".game-area")

function beginScene() {
    backImage.style.backgroundImage = "url('imgs/prisoncell.png')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";

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
}

function scenario1 () {
    backImage.style.backgroundImage = "url('imgs/prisoncell.png')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";

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

    let card = items[0]
    inventorySlot.push(card)
};

function scenario2() {
    backImage.style.backgroundImage = "url('imgs/crossroads.png')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "black";

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
        fightTime();
    })
}
function scenario3() {
    backImage.style.backgroundImage = "url('imgs/swamp.png')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";

    infoArea.textContent = `The hermit shakes his head. "Well... You must be the king's new errand kid." He waves his hand dismissively at the idea before disappearing back into his hut. You hear scuffling and banging as he rifles for what you're hoping is your potion. \n It was only after a few short minutes he puts his head out of the window to give you the purple potion in question, you think? "Tell the king that's his last batch" With that, he slams his window shut and you're left with the lavendar potion. You should head back immediately to the king.`

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    let potion = items[6]
    inventorySlot.push(potion)

    let continueBtn = document.createElement('button')
    continueBtn.textContent = "Back to the King";
    continueBtn.id = "continue-btn";
    buttonArea.appendChild(continueBtn);

    continueBtn.addEventListener('click', function(){
        questTurnIn();
    })
    
}
function questTurnIn() {
    backImage.style.backgroundImage = "url('imgs/throneroom.jpg')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";

    infoArea.textContent = `It takes a while for you to get back to the king, but his face twists into an erratic smile seeing the purple potion in hand. "Good. You're just in time. Give me the potion."`

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    let noBtn = document.createElement('button')
    noBtn.textContent = "What about the princess?";
    noBtn.id = "no-btn";
    buttonArea.appendChild(noBtn);

    let yesBtn = document.createElement('button')
    yesBtn.textContent = "Here you go!"
    yesBtn.id = "yes-btn";
    buttonArea.appendChild(yesBtn);

    yesBtn.addEventListener('click', function(){
        endGame1()
    });
    noBtn.addEventListener('click', function(){
        finalBoss();
    });
}
function finalBoss() {
    backImage.style.backgroundImage = "url('imgs/throneroom.jpg')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";

    infoArea.textContent = `The king laughs. "You really think there was a princess? Sorry, but your princess must be in another castle. You are a trusting fool." The king pulls his sword from its sheathe. Prepare to fight!`

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    let battleBtn = document.createElement('button');
    battleBtn.id = 'battle-btn';
    battleBtn.textContent = 'Fight!'
    buttonArea.appendChild(battleBtn)

    currentMonster = theKing

    battleBtn.addEventListener('click', function(){
        let playerAttack = Math.floor((Math.random() * player.strength) + 3);
        let enemyAttack = Math.floor((Math.random() * theKing.strength) +1);
        theKing.health -= playerAttack,
        player.health -= enemyAttack,
        infoArea.innerHTML = `You hit the king for ${playerAttack} damage! <br> The madman hits you for ${enemyAttack} damage. <br> Creature: ${theKing.name} <br> Health: ${theKing.health}`
        //check to make sure when health is at 0, death occurs for monster or player
        if (theKing.health <= 0) {
            infoArea.textContent = `With a final slice of your sword, you fell the king. \n You pick up ${theKing.gold} gold.`,
            //transfer gold to character upon creature death
            player.gold += theKing.gold;
            let btns = document.querySelector('.button-container').children;
    
            while (btns.length) {
            btns[0].remove();
            }
            let continueBtn = document.createElement('button')
            continueBtn.textContent = "Victory";
            continueBtn.id = "continue-btn";
            buttonArea.appendChild(continueBtn);

            continueBtn.addEventListener('click', function(){
                ending1();
            })
        }
        if (player.health <= 0) {
            fallenInBattle();}
    })

}
//Functions for exploring!
let hutDiscover = -1
function exploreSwamp() {
    backImage.style.backgroundImage = "url('imgs/swamp.png')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";

    infoArea.textContent = `This is definitely a swamp. Smells like a swamp. Looks like a swamp. You wonder if there are any ogres here.`

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }
    let continueBtn = document.createElement('button')
    continueBtn.textContent = "Back to the Crossroads";
    continueBtn.id = "continue-btn";
    buttonArea.appendChild(continueBtn);

    let exploreBtn = document.createElement('button')
    exploreBtn.textContent = "Look Around";
    exploreBtn.id = "explore-btn";
    buttonArea.appendChild(exploreBtn);

    let swampHermit = document.createElement('button')
    swampHermit.textContent = "Hermit's Hut";
    swampHermit.id = "swamp-hermit-btn";
    buttonArea.appendChild(swampHermit);

    continueBtn.addEventListener('click', function(){
        explore();
    })
    
    if (hutDiscover === 1) {
        swampHermit.style.display = 'block'
    }
    console.log(hutDiscover, 'hut')

    swampHermit.addEventListener('click', function(){
        visitHermit();
    })

    exploreBtn.addEventListener('click', function(){
        let exploreNum = Math.floor((Math.random() * 100) + 1)
        console.log(exploreNum)
        if (hutDiscover === -1 && exploreNum <= 33) {
            debugger;
            hutDiscover = 1
            discoverHermit();
        } else if (hutDiscover === 1) {
            pickMonster();
            fightTime();
        }
        if (exploreNum >= 34 && exploreNum <= 74) {
            pickMonster()
            fightTime()
        }
        if (exploreNum >= 75 && exploreNum <= 100) {
            pickItem()
            randomItem()
        }
    })
}

function discoverHermit() {
    backImage.style.backgroundImage = "url('imgs/swamp.png')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";

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
function sillyScenario1() {
    backImage.style.backgroundImage = "url('imgs/swamp.png')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";

    infoArea.textContent = `The hermit flashes you a large grin. He starts rambling off about the other competitors that are showing up tonight. It really is quite the turnout, you discover. There were all sorts of bearded swamp folk, all men, women, and children alike. It wasn't so much of a competition as it was a really weird jam sesh. You even managed to somehow get away with sounding terrible when placed in front of a dulcimer. You learned it was quite the encouraging and supportive group. Or maybe it was just the swamp root everyone basked in. Either way... What a night!`

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    let continueBtn = document.createElement('button')
    continueBtn.textContent = "That went better than expected"
    continueBtn.id = "continue-btn";
    buttonArea.appendChild(continueBtn);

    continueBtn.addEventListener('click', function(){
        scenario3();
    });
}
function visitHermit() {
    backImage.style.backgroundImage = "url('imgs/swamp.png')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";

    infoArea.textContent = `The hermit shakes his head at you. "You broke the game somehow. You really shouldn't be in here yet. Hit the resert button, man."`

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    let continueBtn = document.createElement('button')
    continueBtn.textContent = "Back to the Swamp";
    continueBtn.id = "continue-btn";
    buttonArea.appendChild(continueBtn);

    continueBtn.addEventListener('click', function(){
        discoverSwamp();
    })


}
 let shop = -1

function exploreDesert() {
    backImage.style.backgroundImage = "url('imgs/desertfit.PNG')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";

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
    let shopDiscover = document.createElement('button')
    shopDiscover.textContent = "Desert Trader";
    shopDiscover.id = "shop-btn";
    buttonArea.appendChild(shopDiscover);

    if (shop === 1) {
        shopDiscover.style.display = 'block'
    }

    continueBtn.addEventListener('click', function(){
        explore();
    })

    exploreBtn.addEventListener('click', function(){
        let exploreNum = Math.floor((Math.random() * 100) + 1)
        console.log(exploreNum)
        if (shop === -1 && exploreNum <= 33) {
            shopDiscover.style.display = 'block'
            shop = 1
            discoverShop();
        } else if (shop === 1) {
            pickMonster();
            fightTime();
        }
        if (exploreNum >= 34 && exploreNum <= 60) {
            pickItem()
            findItem()
        }
        if (exploreNum >= 61 && exploreNum <= 100) {
            pickMonster()
            fightTime()
        }
    })
}
function discoverShop() {
    infoArea.textContent = `It feels like you walked for hours through the scorching desert heat. The only signs of life you have seen so far have been tiny lizards and sand fleas. But now? A giant sandworm sits in the sand, squirming as the cloaked tribes people dig their hooks into its carapace folds. As you approach the people, one of the people seems happy to greet you with glowing blue eyes. She explains they have things to trade, if you do in return, including some spices.`

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    let exploreBtn = document.createElement('button')
    exploreBtn.textContent = "Sorry, not today";
    exploreBtn.id = "explore-btn";
    buttonArea.appendChild(exploreBtn);

    let continueBtn = document.createElement('button')
    continueBtn.textContent = "Back to the Crossroads";
    continueBtn.id = "continue-btn";
    buttonArea.appendChild(continueBtn);

    let shopBtn = document.createElement('button')
    shopBtn.textContent = "Trade";
    shopBtn.id = "shop-btn";
    shopBtn.style.display = 'block';
    buttonArea.appendChild(shopBtn);

    shopBtn.addEventListener('click', function(){
        shopFunction();
    })

    continueBtn.addEventListener('click', function(){
        explore();
    })

    exploreBtn.addEventListener('click', function(){
        exploreDesert();
    })
}

function shopFunction() {
    backImage.style.backgroundImage = "url('imgs/desertfit.PNG')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    infoArea.textContent = " Selling and Buying coming soon! "
    
    let exploreBtn = document.createElement('button')
    exploreBtn.textContent = "Back to the Desert";
    exploreBtn.id = "explore-btn";
    exploreBtn.style.display = "block"
    buttonArea.appendChild(exploreBtn);

    exploreBtn.addEventListener('click', function(){
        exploreDesert();
    })

    // function displayShop() {
    //     for (let i = 0; i < inventorySlot.length; i++) {
    //         let invSlot = inventorySlot[i]
    //         let itemBtn = document.createElement('button')
    //         itemBtn.id = 'sell-me'
    //         itemBtn.textContent = invSlot.name
    //         buttonArea.appendChild(itemBtn)

    //         itemBtn.addEventListener('click', function(){
    //             player.gold += invSlot.gold
    //             console.log(inventorySlot[i].price)
    //             debugger;
    //             itemBtn.remove()
                
    //         })
    //     }
    // } 

}
let springs = -1;
function exploreMountain() {
    backImage.style.backgroundImage = "url('imgs/mountains.png')";
    gameTextColor.style.borderColor = "LightSlateGrey";
    gameTextColor.style.color = "DarkSlateGrey";

    infoArea.textContent = `Tall, jagged spires jut up from the Earth to form these majestic peaks covered in light snow. How many years did it take to form each rock until this hill became a mountain? ... It's probably fake. You should climb to the top to see if the world looks round or flat from there. There were also rumors about a secret healing springs somewhere in the mountains.`
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

    let springsBtn = document.createElement('button')
    springsBtn.textContent = "Healing Springs";
    springsBtn.id = "shop-btn";
    buttonArea.appendChild(springsBtn);

    if (springs === 1) {
        springsBtn.style.display = 'block'
    }
    
    exploreBtn.addEventListener('click', function(){
        let exploreNum = Math.floor((Math.random() * 100) + 1)
        console.log(exploreNum)
        if (springs === -1 && exploreNum <= 33) {
            springsBtn.style.display = 'block'
            springs = 1
            console.log(springs)
            discoverSpring();
        } else if (springs === 1) {
            pickMonster();
            fightTime();
        }
        if (exploreNum >= 34 && exploreNum <= 60) {
            pickItem()
            findItem()
        }
        if (exploreNum >= 61 && exploreNum <= 100) {
            pickMonster()
            fightTime()
        }
    })

    continueBtn.addEventListener('click', function(){
        explore();
    })

    springsBtn.addEventListener('click', function(){
        discoverSpring();
    })
}
function discoverSpring() {
    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    infoArea.textContent = `As you explore through the mountains vast hiking trails, you come across a small hot springs. There doesnt appear to be anyone here, but there is a mandatory donation box and a sign. The sign reads: "Welcome! For a generous donation of 20 gold, you will be allowed to use the healing springs water. Thank you!"`

    let exploreBtn = document.createElement('button')
    exploreBtn.textContent = "Back to Mountain";
    exploreBtn.id = "explore-btn";
    buttonArea.appendChild(exploreBtn);

    let continueBtn = document.createElement('button')
    continueBtn.textContent = "Back to Crossroads";
    continueBtn.id = "continue-btn";
    buttonArea.appendChild(continueBtn);

    let recoverBtn = document.createElement('button')
    recoverBtn.textContent = "Heal";
    recoverBtn.id = "shop-btn";
    recoverBtn.style.display = "block";
    buttonArea.appendChild(recoverBtn);

    continueBtn.addEventListener('click', function(){
        explore();
    })

    exploreBtn.addEventListener('click', function(){
        exploreMountain();
    })

    recoverBtn.addEventListener('click', function() {
        player.health = 80
        player.gold = player.gold - 20
    })
}
//win condition scenes!
function ending1() {
    backImage.style.backgroundImage = "url('imgs/throneroom.jpg')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }
    infoArea.textContent = `You assassinated a king over what could have been something as simple as cough medicine, or something far more nefarious. At least you still have your life. That's what really matters at the end of the day, isnt it? \n YOU WIN!! \n Score: ${player.gold}` 

}

function endGame1() {
    backImage.style.backgroundImage = "url('imgs/throneroom.jpg')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";
    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }
    infoArea.textContent = `You hand the king the potion as he laughs. "Glad you could help me have it my way, Prisoner." This was the final quest after all? Just give him the potion. You can at least leave with your head. Thats the real victory at the end of the day. \n YOU WIN!! \n Score: ${player.gold}` 

    let potion = items[6]
    inventorySlot.remove(potion)

    
}

//These functions are lose conditions written into the story

function gameOver1 () {
    backImage.style.backgroundImage = "url('imgs/prisoncell.png')";
    gameTextColor.style.borderColor = "white";
    gameTextColor.style.color = "white";

    infoArea.textContent = "You felt more content to sit and wait for your oncoming execution. The king is disappointed in your choice, but you'd never give the bourgeois the satisfaction. You only pray the headsman's axe gives you a clean cut the first time round. \n GAME OVER";
    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }
}

function fallenInBattle () {
    infoArea.textContent = `With a final cackle from the creature, you fall to the ground. Outdone by a ${currentMonster.name}... \n GAME OVER`
    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }
}