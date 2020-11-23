'use strict';

const ticTocMatrix = [
    ['O', 'O', ''],
    ['X', 'X', ''],
    ['X', 'X', 'O']
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
const flatMatrix = ticTocMatrix.flat();
const stringO = flatMatrix.filter(item => item === 'O');
const stringX = flatMatrix.filter(item => item === 'X');
let startingPlayer = 'O';
function nextPlayer(startingPlayer) {
        if (startingPlayer === 'O' && stringO.length === stringX.length) {
            console.log('next player: O');
        } else if (startingPlayer === 'O' && stringO.length > stringX.length){
            console.log('next player: X');
        } else if (startingPlayer !== 'O' && stringO.length === stringX.length){
            console.log('next player: X');
        } else if (startingPlayer !== 'O' && stringO.length < stringX.length){
            console.log('next player: O');
        } else {
            console.log('Nem Te jössz!');
        }
};

