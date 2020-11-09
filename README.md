# textRPG

textRPG is a simplistic text RPG game where the player must navigate through silly scenarios and enemies to beat the game. I enjoyed playing text rpgs growing up, and they are still a guilty pleasure to this day. This project is still in progress and updates will be slow for the moment. 

## Installation

No installation required if you visit the hosted website: 

```
nikkihmltn.github.io
```
or you can `fork` and `clone` the repo in your terminal like so:

```
git clone https://github.com/NikkiHmltn/textRPG.git
```

## Usage

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
```
imgs/aww-board.png
```

TO DO List: 
- Add a shop for buying and selling items
- Random scenarios
- More places and situation to explore and get into
- Player and NPC icons

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 
