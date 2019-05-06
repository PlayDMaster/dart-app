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

// define scoreLeft for each player 
var player = [];
if (gameType.value === '301') {
    player = [301, 301];
} else if (gameType.value === '501') {
    player = [501, 501];
} else {
    player = [701, 701];
}

// define variables for score input
var scoreEntered = document.getElementById('numEntered');

// define form
var inputScoresForm = document.getElementById('inputScores');

// define score box id's
var scoreBoxes = document.querySelectorAll('[id ^= score]');

// create variables for looping through id's and choosing player
var count = 0;
var playerNum = 0;

inputScoresForm.addEventListener('submit', (event) => {
    console.log(gameType.value);
    document.getElementById(scoreBoxes[count].id).innerText = scoreEntered.value;
    count++;
    if (playerNum === 0) {
        player[playerNum] = player[playerNum] - parseInt(scoreEntered.value);
        document.getElementById(scoreBoxes[count].id).innerText = player[playerNum];
        playerNum++;
    } else {
        player[playerNum] = player[playerNum] - parseInt(scoreEntered.value);
        document.getElementById(scoreBoxes[count].id).innerText = player[playerNum];
        playerNum--;
    }
    count++;
    inputScoresForm.reset();
    event.preventDefault();
})

/* functionality to add:
    once game completes, reset all score boxes
    container on right side of page to keep track of averages
    options for more than 2 players
    buttons to enter common scores quickly
    options for users to pick and change color scheme
    clean up visual feel of page
*/
