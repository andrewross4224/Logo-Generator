class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
        this.svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150 200, 300 20, 0 20" fill="${this.shapeColor}"/><text x="150" y="100" font-size="65" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
        this.svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="95" fill="${this.shapeColor}"/><text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor)
        this.svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="40 180, 260 180, 260 20,  40 20" fill="${this.shapeColor}"/><text x="150" y="130" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = {
    Shape,
    Triangle,
    Circle,
    Square
}