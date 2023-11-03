const shape = require('./shapes')


describe('Shapes', () => {
    describe('Circle',() => {
        it('Should produce a svg of a circle with a given color', () => {
            const coloredShape = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="95" fill="blue"/><text x="150" y="125" font-size="70" text-anchor="middle" fill="black">AAA</text></svg>`
            const shapeColor = 'blue';
            const circle = new shape.Circle('AAA', 'black', `${shapeColor}`);
            expect(circle.svg).toEqual(coloredShape);
        })
    })
    describe('Square',() => {
        it('Should produce a svg of a square with a given color', () => {
            const coloredShape = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="40 180, 260 180, 260 20,  40 20" fill="blue"/><text x="150" y="130" font-size="80" text-anchor="middle" fill="black">AAA</text></svg>`
            const shapeColor = 'blue';
            const square = new shape.Square('AAA', 'black', `${shapeColor}`);
            expect(square.svg).toEqual(coloredShape);
        })
    })
    describe('Triangle',() => {
        it('Should produce a svg of a triangle with a given color', () => {
            const coloredShape = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150 200, 300 20, 0 20" fill="blue"/><text x="150" y="100" font-size="65" text-anchor="middle" fill="black">AAA</text></svg>`
            const shapeColor = 'blue';
            const triangle = new shape.Triangle('AAA', 'black', `${shapeColor}`);
            expect(triangle.svg).toEqual(coloredShape);
        })
    })
})
