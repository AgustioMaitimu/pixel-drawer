const canvas = document.querySelector('.canvas')
const gridMenu = document.getElementById('grid-menu')
const hideGridBtn = document.querySelector('.grid-button')
let grid;
let grids;
let gridSize = 64;
let gridProportion = 80
let flag;

hideGridBtn.addEventListener('click', hideGrid)

createGrid()

gridMenu.addEventListener('change', () => {
    gridSize = gridMenu.value;
    gridProportion = 640 / Math.sqrt(gridSize)
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
        grid.classList.add(`grid-border`)
        grid.style.height = `${gridProportion}px`
        grid.style.width = `${gridProportion}px`
        canvas.appendChild(grid)
        grid.addEventListener('mousedown', function(event) {
            flag = true;
        });
    
        grid.addEventListener('mousemove', function(event) {
        if (flag) {
            event.target.style.backgroundColor = 'red'
        }
        });

        grid.addEventListener('click', function(event) {
            event.target.style.backgroundColor = 'red'
        });
    
        grid.addEventListener('mouseup', function(event) {
            flag = false;
        });
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

