const canvas = document.querySelector('.canvas')
const gridMenu = document.getElementById('grid-menu')
let grid;
let gridSize = 64;
let gridProportion = 80

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
        grid.style.height = `${gridProportion}px`
        grid.style.width = `${gridProportion}px`
        canvas.appendChild(grid)
    }
}

