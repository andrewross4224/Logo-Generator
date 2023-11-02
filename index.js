// requiring inquirer
const inquirer = require('inquirer');
// requiring fs
const fs = require('fs')
// shapes
const shapes = require('./library/shapes')
// empty object for storing user data
const userInputs = {};
// Array of color values
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Brown', 'Gray', 'Black', 'White']
// Array of shape options
const shapeOptions = ['Circle', 'Square', 'Triangle']
// function to initialize the cli
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'enter up to three characters',
            name: 'text',
        }
    ]).then((res) => {
        // validating input length
        if (res.text.length > 3) {
            console.log("Too many characters");
            init();
        }
        else {
            userInputs.text = res.text.toUpperCase();
            prompt2();
        }
    })
}
// function for text color selection
function prompt2() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Pick a text color from the list, or choose "Enter hexadecimal number"',
            name: 'textColor',
            choices: ['Enter hexadecimal number', ...colors]
        }
    ]).then((res) => {
        // if user chose hex value allow them to enter
        if (res.textColor === 'Enter hexadecimal number') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter your hexadecimal number starting with # :',
                    name: 'textColor'
                }
            ]).then((res) => {userInputs.textColor = res.textColor.toUpperCase(); prompt3()})
        } else {
            userInputs.textColor = res.textColor;
            prompt3();
        }
    })
}
// function for third prompt
function prompt3() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please select a shape',
            name: 'shape',
            choices: [...shapeOptions]
        }
    ]).then((res) => {userInputs.shape = res.shape; prompt4()})
}
// function for shape color selection
function prompt4() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Pick a shape color from the list, or choose "Enter hexadecimal number"',
            name: 'shapeColor',
            choices: ['Enter hexadecimal number', ...colors]
        }
    ]).then((res) => {
        // if user chose hex value allow them to enter
        if (res.shapeColor === 'Enter hexadecimal number') {
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter your hexadecimal number starting with # :',
                    name: 'shapeColor'
                }
            ]).then((res) => {userInputs.shapeColor = res.shapeColor.toUpperCase(); generator()})
        } else {
            userInputs.shapeColor = res.shapeColor;
            // once all prompts done calling function to generate logo.svg
            generator();
        }
    })
}
// taking userdata to create logo.svg
function generator() {
    let template;
    switch(userInputs.shape) {
        case 'Circle':
            template = new shapes.Circle(userInputs.text, userInputs.textColor, userInputs.shapeColor, userInputs.shape)
            break;
        case 'Square':
            template = new shapes.Square(userInputs.text, userInputs.textColor, userInputs.shapeColor, userInputs.shape)
            break;
        case 'Triangle':
            template = new shapes.Triangle(userInputs.text, userInputs.textColor, userInputs.shapeColor, userInputs.shape)
            break;
    }
    console.log(template)
}

init();