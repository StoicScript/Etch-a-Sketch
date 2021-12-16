const container = document.querySelector('.container')
const clear = document.getElementById('clear-btn')
const range = document.getElementById('range')
const rangeNum = document.getElementById("range-num").innerHTML = `${range.value} x ${range.value}`
const colorSelection = document.getElementById('color-picker')
const rainbox = document.getElementById('rainbow')

let columns = 16
let cells = []
let row 
let cell
let cellDimensions

// Table Creation

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
    cell.style.height = (container.offsetWidth - (columns * 2)) / columns + "px"
    cell.style.width = (container.offsetWidth - (columns * 2)) / columns + "px"
    cell.style.border = '1px solid black'
    cell.style.backgroundColor = 'white'
    cell.classList.add('cell')
    cells.push(cell); 
    return cell
};

// Cell Color

function cellHoverColor(){
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            if(rainbox.checked){
                e.target.style.backgroundColor = getRandomColor()
            } else {
                e.target.style.backgroundColor = colorSelection.value
            }
        })
    })
};

// Update Container Size 

function resetContainer(){
    while (container.firstChild) {
        container.firstChild.remove()
    }
    cells = [];
    gridSizeSelection();
}

function gridSizeSelection(){
    columns = range.value
};

// Update Grid Size Text 

range.addEventListener('input', (e) => {
    gridSizeText(e.target.value)
})

function gridSizeText(val) {
    document.getElementById("range-num").innerHTML = `${val} x ${val}`;
}

// Update Grid Size 

range.addEventListener('change', newSize)

function newSize(){
    resetColor();
    resetContainer();
    createTable();
}

// Reset Cell Color

clear.addEventListener('click', () => {
    resetColor();
})

function resetColor(){
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}

// Random Color Generator

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }