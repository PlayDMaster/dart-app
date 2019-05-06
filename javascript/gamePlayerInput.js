/* ################################## GAME / PLAYERS INPUT FORM ########################### */

// define variables for input options
var p1Name = document.getElementById('p1Name');
var p2Name = document.getElementById('p2Name');
var gameType = document.getElementById('gameType');

// define variables for output 
var player1Name = document.getElementById('player1Name');
var player2Name = document.getElementById('player2Name');
var gameOf = document.getElementById('gameOf');

// define form
var playersForm = document.getElementById('playersForm');

playersForm.addEventListener('submit', (event) => {
    player1Name.innerText = p1Name.value;
    player2Name.innerText = p2Name.value;
    gameOf.innerText = gameType.value;
    event.preventDefault();
})

export *;