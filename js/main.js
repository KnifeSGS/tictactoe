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

// Start
let currentPlayer = 'X';
let nextP = nextPlayer();
function nextPlayer() {
    if (currentPlayer === 'X') {
        return 'O'
    } else {
        return 'X'
    }
}
// Lépések

const playerTurn = document.querySelector('.nextPlayerIcon')
const cell = document.querySelectorAll('.field');
const cellArr = Array.from(cell);
let cellArrIt = cellArr.map(item => item.textContent);
// const cellIt = cellArrIt.forEach((item, index) => console.log(index, '-', item));

(function next() {
    playerTurn.textContent = currentPlayer;
})();

(function play() {
    cellArr.forEach(function(item) {
        item.addEventListener('click', (event) => {
            event.target.textContent = currentPlayer;
            currentPlayer = nextP
        })
    } 
    )
})();

/* function switchPlayer() {
    if (playerTurn === ' X') {
        cell.innerText = 'X'
    } else {
        cell.innerText = 'O'
    } return
} */

