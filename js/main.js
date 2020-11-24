'use strict';

const ticTocMatrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Végig megy a tömbön és minden elemet listáz indexével
// ticTocMatrix.forEach(item => item.forEach((cell, index) => console.log(cell, index)));
// Végig megy a külső tömbön és listázza belső tömböket indexükkel
// ticTocMatrix.forEach((item, index) => console.log(item, index));
// Végig megy és listáz mindent
// ticTocMatrix.forEach((item, index1) => item.forEach((cell, index2) => console.log(item, index1, cell, index2)));
// Végig megy és listázza az indexeket
// ticTocMatrix.forEach((item, index1) => item.forEach((cell, index2) => console.log(index1, index2)));

const cellAr = document.querySelectorAll('.field');
const cellArray = Array.from(cellAr);
let currentP = 'O';

function play() {
    cellArray.forEach((item) => {
        item.addEventListener('click', handleClick)
    })
};

const currentPlayer = () => {
    currentP = currentP === 'X' ? 'O' : 'X';
};

const handleClick = (event) => {
    modifyCell(event.target);
    currentPlayer();
    changeMatrixValue(event.target);
    checkWinner();
};

const modifyCell = (element) => {
    element.removeEventListener('click', handleClick);
    element.textContent = currentP;
};

const changeMatrixValue = (element) => {
    const row = parseInt(element.dataset.row, 10);
    const cell = parseInt(element.dataset.cell, 10);
    ticTocMatrix[row][cell] = element.textContent;
};

const newGame = () => {
    ticTocMatrix.forEach(index => ticTocMatrix[index] = [])
        .forEach(index => target[index] = '')
    removeEventListener()
};

const removeListener = () => {
    cellArray.forEach(element => {
        element.removeListener('click', handleClick)
    });
};

const checkRowValues = () => {
    const values = ticTocMatrix.map(row =>
        row.every((value) => value === 'X') ||
        row.every((value) => value === 'O'))
    console.log(values);
    return values.indexOf(true) !== -1;
}

ticTocMatrix.forEach((value) => value.forEach(data => console.log(data)));
const checkColumnValues = () => {
    const valuesCol = column.map(col =>
        col.every((value) => value === 'X') ||
        col.every((value) => value === 'O'))
    console.log(valuesCol);
    return valuesCol.indexOf(true) !== -1;
}

const checkDiagonalValues = () => { }

const checkWinner = () => {

    console.log(checkRowValues());
    console.log(checkColumnValues());
}

play();
