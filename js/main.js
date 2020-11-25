'use strict';

let ticTocMatrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
const rows = 3;
const cols = 3;
let pointsO = 0;
const pointOArea = document.querySelector('.standing__O--points')
let pointsX = 0;
const pointXArea = document.querySelector('.standing__X--points')


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
    restart();
    addClickListener();
    newGame();
};

const newGame = () => {
    document
        .querySelector('.start__btn')
        .addEventListener('click', () => {
            restart();
            addClickListener();
            setMessage('');
            currentPlayer()
        })
}

const addClickListener = () => {
    cellArray
        .forEach(element => {
            element.addEventListener('click', handleClick)
        });
}

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

const removeListener = () => {
    cellArray.forEach(element => {
        element.removeEventListener('click', handleClick)
    });
};

/* const checkRowValues = (array) => {
    const values = array.map(row =>
        row.every((value) => value === 'X') ||
        row.every((value) => value === 'O'))
    return values.indexOf(true) !== -1;
} */
const checkValues = (arr) => arr.map(row =>
    row.every((value) => value === 'X') ||
    row.every((value) => value === 'O'))
    .indexOf(true) !== -1;

/* const checkColumnValues = () => {
    let valuesCol = [];
    valuesCol = [getColumn(ticTocMatrix, 0), getColumn(ticTocMatrix, 1), getColumn(ticTocMatrix, 2)];
    // console.log(valuesCol);
    return checkRowValues(valuesCol)
} */
/* function getColumn(matrix, col) {
    const column = [];
    for (let i = 0; i < matrix.length; i++) {
        column.push(matrix[i][col]);
    }

    return column
}; */

const checkColumnValues = () =>
    checkValues(ticTocMatrix.map((arr, i) => arr.map((item, j) => ticTocMatrix[j][i])))

/* const checkDiagonalValues = () => {
    const diagonal1 = [ticTocMatrix[0][0], ticTocMatrix[1][0], ticTocMatrix[2][0]];

    return checkValues(diagonal1)
} */

const checkDiagonalValues = () =>
    checkValues([
        ticTocMatrix.map((arr, i) => ticTocMatrix[i][i]),
        ticTocMatrix.map((arr, i) => ticTocMatrix[i][ticTocMatrix[i].length - i - 1])
    ])

const endGame = () => {
    setMessage(`A győztes: ${currentP === 'X' ? 'O' : 'X'}`);
    removeListener();
    addPoints();
    showPoints();
}

const addPoints = () => {
    if (currentP === 'X') {
        return pointsO += 1;
    } else if (currentP === 'O') {
        return pointsX += 1;
    } else {
        return
    }
}

const showPoints = () => {
    pointOArea.textContent = pointsO;
    pointXArea.textContent = pointsX;

}


const setMessage = (message) => {
    document
        .querySelector('.winner')
        .textContent = message
}

const checkWinner = () => {
    console.log(checkColumnValues(), checkDiagonalValues());
    if (checkValues(ticTocMatrix) || checkColumnValues() || checkDiagonalValues()) {
        endGame();
    }
}

const restart = () => {
    ticTocMatrix = Array(cols).fill('').map(() => Array(rows).fill(''));
    resetCell();
}

const resetCell = () => {
    cellArray.forEach((element) => {
        element.textContent = '';
    });
    removeListener();
};

const restartBtn = () => {
    const btn = document.querySelector('.start__btn');
    btn.addEventListener('click', restart)
}

restartBtn();
play();
