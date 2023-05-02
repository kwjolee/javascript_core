const readline = require('readline-sync');

const WINNING_LIST = {
  rock: {winsAgainst: ["lizard", "scissors"], shortName: "(r)ock"},
  paper: {winsAgainst: ["rock", "spock"], shortName: "(p)aper"},
  scissors: {winsAgainst: ["paper", "lizard"], shortName: "(sc)issors"},
  lizard: {winsAgainst: ["lizard", "spock"], shortName: "(l)izard"},
  spock: {winsAgainst: ["scissors", "rock"], shortName: "(sp)ock"}
};

const VALID_MOVES = Object.keys(WINNING_LIST);
const VALID_MOVES_SHORT = VALID_MOVES.map(key => WINNING_LIST[key].shortName);
const VALID_MOVES_FIRST = VALID_MOVES_SHORT.map(key => key.slice(1,key.lastIndexOf(")")));

const scoreKeeper = {
  round: 1,
  You: 0,
  CPU: 0,
  lastUser: '',
  lastCPU: '',
  lastWinner: ''
};

// prompter
function prompt(message) {
  console.log(`===> ${message}`);
}

// ask user move
function askUserMove() {
  prompt(`Please choose your move :`);
  prompt(`${VALID_MOVES_SHORT.join(", ")}`);
  let userMove = readline.question();
  while (checkInvalidMove(userMove)) {
    prompt('That is an invalid move. Please choose again:');
    prompt(`${VALID_MOVES_SHORT.join(", ")}`);
    userMove = readline.question();
  }
  return VALID_MOVES.filter(key => key.startsWith(userMove))[0];
}

// validate user input
function checkInvalidMove(userMove) {

  let longNotationInvalid = !VALID_MOVES.includes(userMove);
  let shortNotationInvalid = !VALID_MOVES_FIRST.includes(userMove);
  return longNotationInvalid && shortNotationInvalid;
}

// generate computer move
function getCPUMove() {
  const randCPU = Math.floor(Math.random() * VALID_MOVES.length);
  return VALID_MOVES[randCPU];
}

// determine winner
function getWinner(userMove, CPUMove) {
  if (WINNING_LIST[userMove].winsAgainst.includes(CPUMove)) {
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
    prompt(`${winner} won the round!\n`);
  } else {
    prompt("It's a tie.\n");
  }
}

// ask play again
function askReplay() {
  prompt(`${scoreKeeper["lastWinner"]} won the game!\n`);
  prompt("Would you like to play again? (y)es/(n)o");
  let replay = readline.question();
  while (checkInvalidYesNo(replay)) {
    prompt("Invalid response. Would you like to play again? (y)es/(n)o");
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

function resetScore() {
  scoreKeeper.round = 1;
  scoreKeeper.CPU = 0;
  scoreKeeper.You = 0;
}

//
do {
  resetScore();
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