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
        scenario2();
    })

};

function scenario2() {
    infoArea.textContent = "test for scenario 2"

    let btns = document.querySelector('.button-container').children;
    
    while (btns.length) {
        btns[0].remove();
    }

    let battleBtn = document.createElement('button');
    battleBtn.id = 'battle-btn';
    battleBtn.textContent = 'Fight!'
    buttonArea.appendChild(battleBtn)


}

//These functions are lose conditions written into the story

function gameOver1 () {
    infoArea.textContent = "You felt more content to sit and wait for your oncoming execution. The king is disappointed in your choice, but you'd never give the bourgeois the satisfaction. You only pray the headsman's axe gives you a clean cut the first time round. \n GAME OVER";
}