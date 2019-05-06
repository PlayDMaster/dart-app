/* ################################## SCORE INPUT / GAME DISPLAY FORM ##################### */
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

export *;