const drawingBoard = document.querySelector('#drawing-space');
const gridSize = document.querySelector('#grid-size');
const rainbowButton = document.querySelector('#rainbow');
const eraserButton = document.querySelector('#eraser');
const color = document.querySelector('#color-picker');
const reset = document.querySelector('#clear-board');


defaultBoard();

function defaultBoard() {
    makeGrid(30, 18, "25px", "25px");
}

function makeGrid(column, row, width, height) {
    for (let y = 1; y <= row; y++) {
        for (let x = 1; x <= column; x++) {
            const cell = document.createElement('div');
            cell.setAttribute('id', 'cell')
            cell.classList.add('cell')
            cell.style.width = width;
            cell.style.height = height
            drawingBoard.appendChild(cell);
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = chooseColor();
                cell.style.borderStyle = 'none';
            })
        }
        const newLine = document.createElement('br');
        drawingBoard.appendChild(newLine);

    }
}

function clearBoard() {
    drawingBoard.innerHTML = '';
}

gridSize.addEventListener('change', () => {
    if (gridSize.value == 1) {
        clearBoard();
        makeGrid(30, 18, "25px", "25px");
    } else if (gridSize.value == 2) {
        clearBoard();
        makeGrid(50, 30, "15px", "15px")
    } else if (gridSize.value == 3) {
        clearBoard();
        makeGrid(75, 45, "10px", "10px")
    } else if (gridSize.value == 4) {
        clearBoard();
        makeGrid(150, 90, "5px", "5px")
    } else if (gridSize.value == 5) {
        clearBoard();
        makeGrid(250, 150, "3px", "3px")
    } else {
        console.log("There's been an error.")
    }
})


rainbowButton.addEventListener('click', () => {
    rainbowButton.classList.add('active');
    eraserButton.classList.remove('active');
    color.classList.remove('active');
    console.log("rainbow was clicked");
})

eraserButton.addEventListener('click', () => {
    eraserButton.classList.add('active');
    rainbowButton.classList.remove('active');
    color.classList.remove('active');
    console.log("eraser was clicked");
})

color.addEventListener('click', () => {
    color.classList.add('active');
    rainbowButton.classList.remove('active');
    eraserButton.classList.remove('active');
    console.log('choose a color')
})

reset.addEventListener('click', () => {
    clearBoard();
    if (gridSize.value == 1) {
        makeGrid(30, 18, "25px", "25px");
    } else if (gridSize.value == 2) {
        makeGrid(50, 30, "15px", "15px")
    } else if (gridSize.value == 3) {
        makeGrid(75, 45, "10px", "10px")
    } else if (gridSize.value == 4) {
        makeGrid(150, 90, "5px", "5px")
    } else if (gridSize.value == 5) {
        makeGrid(250, 150, "3px", "3px")
    } else {
        console.log("There's been an error.")
    }

})

function chooseColor() {
    if (rainbowButton.classList.contains('active')) {
        let randomR = Math.floor(Math.random() * 255);
        let randomG = Math.floor(Math.random() * 255);
        let randomB = Math.floor(Math.random() * 255);
        let newColor = `rgb(${randomR},${randomG},${randomB})`
        return newColor;
    } else if (color.classList.contains('active')) {
        let newColor = color.value;
        return newColor;
    } else if (eraserButton.classList.contains('active')) {
        let newColor = '#ffffff'
        return newColor;
    }
}

