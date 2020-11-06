let items = [

    {
        id: 01,
        name: "Get Out of Jail Free Card",
        price: 250,
        image: "imgs/get-out-of-jail-card.jpeg",
        description: "A thin card made of gold and signed by the King himself. It reads 'Get out of Jail FREE. This card may be kept until needed or sold'"
    },

    {
        id: 02,
        name: "Emerald Paperweight",
        price: 10,
        image: "imgs/green-emerald.jpeg",
        description: "A chunk of refined emerald. It sparkles in the sunlight. Pretty useless for fighting. I wouldn't recommend eating it, either. Use it as a paperweight or maybe a shop will take it."
    },
    {
        id: 03,
        name: "Blue Berry",
        price: 5,
        image: "imgs/blue-berry.jpeg",
        description: "A blue berry. Smells a bit weird."
    },
    {
        id: 04,
        name: "Health Potion",
        price: 20,
        image: "imgs/red-potion.jpeg",
        description: "A standard video game health potion. Shame you can't use it yet."
    },
    {
        id: 05, 
        name: "Normal Book",
        price: 10,
        image: "imgs/normal-book.jpeg",
        description: "A seemingly normal book. Yep."
    },
    {
        id: 06,
        name: "Plains Apple",
        price: 5,
        image: "imgs/plains-apple.jpeg",
        description: "A plain apple. Or is it a plain's apple?"

    }
]

class Items {
    constructor(info) {
        this.id = info.id
        this.name = info.name
        this.price = info.price
        this.image = info.image
        this.description = info.description
    }
}

