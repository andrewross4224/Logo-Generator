class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor, type){
        super(text, textColor, shapeColor)
        this.type = type
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor, type){
        super(text, textColor, shapeColor)
        this.type = type
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor, type){
        super(text, textColor, shapeColor)
        this.type = type
    }
}

module.exports = {
    Shape,
    Triangle,
    Circle,
    Square
}