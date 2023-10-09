const canvas = document.querySelector('.canvas')
const gridMenu = document.getElementById('grid-menu')
const hideGridBtn = document.querySelector('.grid-button')
const clearCanvasBtn = document.querySelector('.clear-canvas')
let randomColorMode;
let colorPicker;
let grid;
let grids;
let gridSize = 64;
let gridProportion = 74
let flag;

clearCanvasBtn.addEventListener('click', clearCanvas)
hideGridBtn.addEventListener('click', hideGrid)

createGrid()

gridMenu.addEventListener('change', () => {
    gridSize = gridMenu.value;
    gridProportion = 592 / Math.sqrt(gridSize)
    console.log(gridSize)
    console.log(gridProportion)
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
        i.style.backgroundColor = 'white'
    }
}

function draw() {
    grid.addEventListener('mousedown', function(event) {
        flag = true;
        randomColorMode = document.getElementById('random-color').checked
        if (randomColorMode) {
            event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * (230 - 50 + 1)) + 100}, ${Math.floor(Math.random() * (230 - 100 + 1)) + 100}, ${Math.floor(Math.random() * (230 - 100 + 1)) + 100})`
            console.log(event.target.style.backgroundColor)
        } else {
            colorPicker = document.getElementById('color-picker').value
            event.target.style.backgroundColor = colorPicker
        }
    });

    grid.addEventListener('mouseenter', function(event) {
    if (flag) {
        randomColorMode = document.getElementById('random-color').checked
        if (randomColorMode) {
            event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * (230 - 50 + 1)) + 100}, ${Math.floor(Math.random() * (230 - 100 + 1)) + 100}, ${Math.floor(Math.random() * (230 - 100 + 1)) + 100})`
            console.log(event.target.style.backgroundColor)
        } else {
            colorPicker = document.getElementById('color-picker').value
            event.target.style.backgroundColor = colorPicker
        }
        
    }
    });

    grid.addEventListener('click', function(event) {
        randomColorMode = document.getElementById('random-color').checked
        if (randomColorMode) {
            event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * (230 - 100 + 1)) + 100}, ${Math.floor(Math.random() * (230 - 100 + 1)) + 100}, ${Math.floor(Math.random() * (230 - 100 + 1)) + 100})`
            console.log(event.target.style.backgroundColor)
        } else {
            colorPicker = document.getElementById('color-picker').value
            event.target.style.backgroundColor = colorPicker
        }
        
    });

    grid.addEventListener('mouseup', function(event) {
        flag = false;
    });
}
    


