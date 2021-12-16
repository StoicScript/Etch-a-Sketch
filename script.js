const container = document.querySelector('.container')
const clear = document.getElementById('clear-btn')
const range = document.getElementById('range')
const rangeNum = document.getElementById("range-num").innerHTML = `${range.value} x ${range.value}`


let columns = 16
let cells = []
let row 
let cell
let cellDimensions

function createTable(){
    for (let i = 0; i < columns; i++){
        createRows() 
    }
    cellHoverColor()
};

createTable()

function createRows(){
    row = document.createElement('div')
    for (let i = 0; i < columns; i++){
        row.appendChild(createCell());
        row.classList.add('row')
        container.appendChild(row)
    }
};

function createCell(){
    cell = document.createElement('div')
    cell.style.height = (container.clientWidth - (columns * 2)) / columns + "px"
    cell.style.width = (container.clientWidth - (columns * 2)) / columns + "px"
    cell.style.border = '1px solid black'
    cell.style.backgroundColor = 'white'
    cell.classList.add('cell')
    cells.push(cell); 
    return cell
};

function cellHoverColor(){
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'skyblue'
        })
    })
};

function resetColor(){
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}

function resetContainer(){
    while (container.firstChild) {
        container.firstChild.remove()
    }
    cells = [];
    askForCells();
}

function newSize(){
    resetColor();
    resetContainer();
    createTable();
}

function askForCells(){
    columns = range.value
};

function gridSizeText(val) {
    document.getElementById("range-num").innerHTML = `${val} x ${val}`;
}

clear.addEventListener('click', () => {
    resetColor();
})

range.addEventListener('input', (e) => {
    myFunction(e.target.value)
})

range.addEventListener('input', (e) => {
    gridSizeText(e.target.value)
})

range.addEventListener('change', newSize)

