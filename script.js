const container = document.querySelector('.container')
const reset = document.getElementById('reset-btn')
let row 
let cell
let cells = []

let columns = 16
let rows = 16

function createTable(){
    for (let i = 0; i < columns; i++){
        createRows() 
    }
};

function createRows(){
    row = document.createElement('div')
    for (let i = 0; i < rows; i++){
        row.appendChild(createCell());
        row.classList.add('row')
        container.appendChild(row)
    }
};

function createCell(){
    cell = document.createElement('div')
    cell.style.minHeight = '35px'
    cell.style.minWidth = '35px'
    cell.style.maxHeight = '70px'
    cell.style.maxWidth = '70px'
    cell.style.border = '1px solid black'
    cell.classList.add('cell')
    cell.style.backgroundColor = 'lightGrey'
    cells.push(cell)
    return cell
};

createTable()

cells.forEach(cell => {
    cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'blue'
    })
})

reset.addEventListener('click', () => {
    cells.forEach(cell => cell.style.backgroundColor = 'lightGrey')
})

