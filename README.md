# textRPG

textRPG is a simplistic text RPG game where the player must navigate through silly scenarios and enemies to beat the game. I enjoyed playing text rpgs growing up, and they are still a guilty pleasure to this day. This project is still in progress and updates will be slow for the moment. I have only been coding for 3 weeks, so that is why React, Node.js, or anything other than vanilla JS, HTML, and CSS were not used.

This project is for my General Assembly bootcamp. Here are the list of requirements needing to be met:
```
- [x] Game is playable	
- [x] Game is multiplayer (or AI or PVE)
- [x] Game is winnable	
- [x] Winner/score is displayed (NO ALERTS)	
- [x] Has directions - how to play	
- [x] Readme.md included and filled out	
- [x] Appropriate Use of GitHub (`commits`) 	
- [x] Deployed on Github Pages	
- [x] DRY (Do Not Repeat Yourself) Code, Good Code Style	
- [x] Effort Put into Styling	
- [x] Reset button	
- [x] Good collision detection/event triggers
```

## Installation

No installation required if you visit the hosted website: 

```
nikkihmltn.github.io
```
or you can `fork` and `clone` the repo in your terminal like so:

```
git clone https://github.com/NikkiHmltn/textRPG.git
```
## Technologies
The technologies used are strictly Javascript, HTML5, and CSS. There were no pulls on external libraries used. 

## Usage
This is a random based Role Playing Game that will randomly generate items and encounters. The computer generates them randomly from an existing database I have created inside the code. Sometimes the player may get the same enemy a few times in a row, othertimes it may be evenly spaced out. There are lose scenarios for if the player's health reaches zero, and win scenarios for defeating the final enemy. Below is an example of displaying the inventory for a collection of randomly chanced items. 

```javascript
function itemIteration() {
    
    let refresh = document.querySelector('.inventory-space').children;
    while (refresh.length) {
    refresh[0].remove();
    }
    
    for(let i = 0; i < inventorySlot.length; i++) {
        let item = inventorySlot[i];
        let itemPic = document.createElement('img')
        itemPic.setAttribute('src', item.image)
        itemPic.classList.add('item');
        itemPic.setAttribute('title', `${item.description}`)
        inventorySpace.appendChild(itemPic)
        
    }
}
```
## Development
My super simple wireframe for my placement ideas: 
![Image of my wireframe]
(https://i.ibb.co/cLhdVZV/aww-board.png)

A screenshot of the beginning of the game: 
![Beginning Screenshot]
(https://i.ibb.co/1Mj4wr8/Screen-Shot-2020-11-09-at-12-32-59-PM.png)


TO DO List: 
- Add a shop for buying and selling items
- Random scenarios
- More places and situation to explore and get into
- Player and NPC icons

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 

## Art Credits
Background images used found from these respective artists: 
```
https://www.artstation.com/artwork/xzLd42
https://www.reddit.com/r/PixelArt/comments/eth5oz/bliss/
https://vnitti.itch.io/glacial-mountains-parallax-background
https://blank-canvas.itch.io/parallax-pixel-art-background-desert
https://saurabhkgp.itch.io/pixel-art-forest-background-simple-seamless-parallax-ready-for-2d-platformer-s
```
