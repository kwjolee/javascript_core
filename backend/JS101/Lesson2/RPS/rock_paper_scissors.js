const readline = require('readline-sync');

const WINNING_LIST = {
  rock: ["lizard", "scissors"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["lizard", "spock"],
  spock: ["scissors", "rock"]
};

const VALID_MOVES = Object.keys(WINNING_LIST);

const BLANK_SCORES = {
  round: 1,
  You: 0,
  CPU: 0,
  lastUser: '',
  lastCPU: '',
  lastWinner: ''
};

let scoreKeeper = Object.assign({},BLANK_SCORES);


// prompter
function prompt(message) {
  console.log(`===> ${message}`);
}

// ask user move
function askUserMove() {
  prompt(`Please choose your move :`);
  prompt(`${VALID_MOVES.join(", ")}`);
  let userMove = readline.question();
  while (checkInvalidMove(userMove)) {
    prompt('That is an invalid move. Please choose again:');
    prompt(`${VALID_MOVES.join(", ")}`);
    userMove = readline.question();
  }
  return userMove;
}

// validate user input
function checkInvalidMove(userMove) {
  return !VALID_MOVES.includes(userMove);
}

// generate computer move
function getCPUMove() {
  const randCPU = Math.floor(Math.random() * VALID_MOVES.length);
  return VALID_MOVES[randCPU];
}

// determine winner
function getWinner(userMove, CPUMove) {
  if (WINNING_LIST[userMove].includes(CPUMove)) {
    return "You";
  } else if (userMove === CPUMove) {
    return "tie";
  } else {
    return "CPU";
  }
}

// show winner
function displayWinner() {
  let userMove = scoreKeeper["lastUser"];
  let CPUMove = scoreKeeper["lastCPU"];
  let winner = scoreKeeper["lastWinner"];
  prompt(`You chose ${userMove}. Computer chose ${CPUMove}.`);
  if (winner !== "tie") {
    prompt(`${winner} won!\n`);
  } else {
    prompt("It's a tie game.\n");
  }
}

// ask play again
function askReplay() {
  prompt(`${scoreKeeper["lastWinner"]} won the game!\n`);
  prompt("Would you like to play again? (y/n)");
  let replay = readline.question();
  while (checkInvalidYesNo(replay)) {
    prompt("Invalid response. Would you like to play again? (y/n)");
    replay = readline.question();
  }
  return replay.toLowerCase()[0] === "y";
}

// validate yes/no
function checkInvalidYesNo(replay) {
  return !["y", "yes", "n", "no"].includes(replay);
}

// increment round
function incrementRound() {
  scoreKeeper["round"] += 1;
}

// increment winner
function incrementWinner(winner) {
  scoreKeeper[winner] += 1;
}

// display round and winner
function displayScore(status) {
  let round = scoreKeeper["round"];
  let userScore = scoreKeeper["You"];
  let CPUScore = scoreKeeper["CPU"];
  prompt(`This is     Your score     Computer score`);
  prompt(`Round ${round}${" ".repeat(9)}${userScore}${" ".repeat(17)}${CPUScore}`);
  if (userScore > CPUScore) {
    prompt(`${" ".repeat(14)}${status}\n`);
  } else if (userScore < CPUScore) {
    prompt(`${" ".repeat(32)}${status}\n`);
  } else {
    prompt("\n");
  }
}

function getLeadScore() {
  let userScore = scoreKeeper["You"];
  let CPUScore = scoreKeeper["CPU"];
  return Math.max(userScore, CPUScore);
}

function updateLastMoves(userMove, CPUMove, winner) {
  scoreKeeper["lastUser"] = userMove;
  scoreKeeper["lastCPU"] = CPUMove;
  scoreKeeper["lastWinner"] = winner;
}

function sayBye() {
  console.clear();
  prompt("Thank you for playing with us.\n");
}

function displayHeader(status) {
  if (scoreKeeper["round"] === 1) {
    prompt("Welcome to the game.");
    prompt("Let's get started.\n");
    displayScore(status);
  } else {
    displayWinner();
    displayScore(status);
  }
}

//
do {
  scoreKeeper = Object.assign({},BLANK_SCORES);
  let leadScore = 0;

  do {
    console.clear();

    displayHeader("leads");

    let userMove = askUserMove();
    let CPUMove = getCPUMove();
    let winner = getWinner(userMove, CPUMove);

    incrementRound();
    incrementWinner(winner);
    updateLastMoves(userMove, CPUMove, winner);

    leadScore = getLeadScore();
  } while (leadScore < 3);
  console.clear();
  displayHeader("winner");
} while (askReplay());
sayBye();