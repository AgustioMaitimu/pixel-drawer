const canvas = document.querySelector('.canvas')
const gridMenu = document.getElementById('grid-menu')
const hideGridBtn = document.querySelector('.grid-button')
const clearCanvasBtn = document.querySelector('.clear-canvas')
const randomColorBtn = document.getElementById('random-color')
const singleColorBtn = document.getElementById('single-color')
const eraseColorBtn = document.getElementById('erase-color')
const modeButtons = [randomColorBtn, singleColorBtn, eraseColorBtn]
let buttonsContainer = document.querySelector('.mode-buttons')
let pickedMode;
let colorPicker;
let grid;
let grids;
let gridSize = 64;
let gridProportion = 74
let flag;

buttonsContainer.addEventListener('click', (e) => {
    if (modeButtons.includes(e.target)) {
        e.target.style.backgroundColor = 'gray'
        pickedMode = e.target.innerHTML
        for (button of modeButtons) {
            if (button != e.target) {
                button.style.backgroundColor = 'white'
            }
        }
    }
})

clearCanvasBtn.addEventListener('click', (event) => {
    const target = event.target
    target.style.backgroundColor = 'gray'
    setTimeout(function(){
        target.style.backgroundColor = 'white'
    }, 150);
    clearCanvas()
})
hideGridBtn.addEventListener('click', (event) => {
    const target = event.target
    target.style.backgroundColor = 'gray'
    setTimeout(function(){
        target.style.backgroundColor = 'white'
    }, 150);
    hideGrid()
})

createGrid()

gridMenu.addEventListener('change', () => {
    gridSize = gridMenu.value;
    gridProportion = 592 / Math.sqrt(gridSize)
    createGrid()
})

function createGrid() {
    while (canvas.lastElementChild) {
        canvas.removeChild(canvas.lastElementChild)
    }
    for (let i = 0; i < gridSize; i++) {
        grid = document.createElement('div')
        grid.classList.add(`grid`)
        grid.classList.add(`grid-no-border`)
        grid.style.height = `${gridProportion}px`
        grid.style.width = `${gridProportion}px`
        canvas.appendChild(grid)

        draw()
        
    }
    grids = document.querySelectorAll('.grid')
    
}

function hideGrid() {
    if (grids[0].classList.contains('grid-border')) {
        for (i of grids) {
            i.classList.remove('grid-border')
            i.classList.add('grid-no-border')
            hideGridBtn.innerHTML = 'Show Grid'
        }
    } else if (grids[0].classList.contains('grid-no-border')) {
        for (i of grids) {
            i.classList.remove('grid-no-border')
            i.classList.add('grid-border')
            hideGridBtn.innerHTML = 'Hide Grid'
        }
    }
}

function clearCanvas() {
    for (i of grids) {
        i.style.backgroundColor = ''
    }
}

function draw() {
    grid.addEventListener('mousedown', function(event) {
        flag = true;
        if (pickedMode == 'Random Color') {
            event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * (230 - 50 + 1)) + 100}, ${Math.floor(Math.random() * (230 - 100 + 1)) + 100}, ${Math.floor(Math.random() * (230 - 100 + 1)) + 100})`
        } else if (pickedMode == 'Single Color') {
            colorPicker = document.getElementById('color-picker').value
            event.target.style.backgroundColor = colorPicker
        } else if (pickedMode == 'Erase Color') {
            colorPicker = ''
            event.target.style.backgroundColor = colorPicker
        }
    });

    grid.addEventListener('mouseenter', function(event) {
    if (flag) {
        if (pickedMode == 'Random Color') {
            event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * (230 - 50 + 1)) + 100}, ${Math.floor(Math.random() * (230 - 100 + 1)) + 100}, ${Math.floor(Math.random() * (230 - 100 + 1)) + 100})`
        } else if (pickedMode == 'Single Color') {
            colorPicker = document.getElementById('color-picker').value
            event.target.style.backgroundColor = colorPicker
        } else if (pickedMode == 'Erase Color') {
            colorPicker = ''
            event.target.style.backgroundColor = colorPicker
        }
        
    }
    });

    grid.addEventListener('mouseup', function(event) {
        flag = false;
    });
}
    


