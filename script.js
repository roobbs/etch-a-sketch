let defaultColor = "#277CA0";
let defaultMode = "color";
let defaultSize = 16; 
//
let currentColor = defaultColor;
let currentMode = defaultMode;
let currentSize = defaultSize;
//
let selectedColor = document.querySelector('.color');
let colorBtn = document.querySelector('.colorBtn');
let rainbowBtn = document.querySelector('.rainbowBtn');
let eraserBtn = document.querySelector('.eraserBtn');
let clearBtn = document.querySelector('.clearBtn')
let square = document.querySelector('.square');
//
function createGridItems (size) {
    square.style.cssText = "grid-template-columns: repeat("+size+", 1fr) ; grid-template-rows: ("+size+", 1fr);";
    
    for (let i = 0; i< size*size ; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        square.appendChild(gridItem);
    }
}
//
function clearGrid () {
    square.innerHTML = "";    
}
//
function newCurrentColor (color) {
    currentColor = color;
}
//
function newCurrentMode (mode) {
    switch (currentMode) {
        case "color": 
            //remover class de nombre que yo elija
            break;
        case "rainbow":
            break;
        case "eraser":
            break;
    } 
    switch (mode) {
        case "color": 
            //agregar class del nombre que yo elija
            break;
        case "rainbow":
            break;
        case "eraser":
            break;
    }
    currentMode = mode;
}
/*
crear una funcion para dibujar los cuadros creados en square
*/