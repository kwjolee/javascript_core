const readline = require("readline-sync");

const HUMAN_MARKER = 'X';
const PLAYER_NAME = 'Player';

const COMPUTER_MARKER = 'O';
const COMPUTER_NAME = 'Computer';

const INITIAL_MARKER = ' ';

const PLAYERS = {p: PLAYER_NAME, c: COMPUTER_NAME};

const BOARDSIZE = 3;
const ROUNDS_TO_WIN = 5;

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function whoGoesFirst() {
  prompt("Please select who goes first: (P)layer or (C)omputer");
  prompt("This player will go first every round.");
  let goFirst = readline.question().toLowerCase();
  let playLower = PLAYER_NAME.toLowerCase();
  let cpuLower = COMPUTER_NAME.toLowerCase();

  while (![playLower, playLower[0], cpuLower, cpuLower[0]].includes(goFirst)) {
    prompt("Please select who goes first: (P)layer or (C)omputer");
    goFirst = readline.question().toLowerCase();
  }
  return PLAYERS[goFirst[0]];
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === PLAYER_NAME) {
    return PLAYERS["c"];
  } else {
    return PLAYERS["p"];
  }
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}. First to win ${ROUNDS_TO_WIN} rounds wins the game.\n`);

  console.log('     |     |');
  console.log(` ${board['1']['display']} | ${board['2']['display']} | ${board['3']['display']}`);
  console.log('     |     |\n-----+-----+-----\n     |     |');
  console.log(` ${board['4']['display']} | ${board['5']['display']} | ${board['6']['display']}`);
  console.log('     |     |\n-----+-----+-----\n     |     |');
  console.log(` ${board['7']['display']} | ${board['8']['display']} | ${board['9']['display']}`);
  console.log('     |     |\n');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= (BOARDSIZE ** 2); square++) {
    board[String(square)] = {display: `(${square})`, marker: INITIAL_MARKER};
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key]['marker'] === INITIAL_MARKER);
}

function joinOr(arr, delim = ", ", word = "or") {
  switch (arr.length) {
    case 0:
      return "";
    case 1:
      return arr.join();
    case 2:
      return arr.join(` ${word} `);
    default: {
      let frontStr = arr.slice(0, arr.length - 1).join(delim);
      return frontStr + delim + word + " " + arr[arr.length - 1];
    }
  }
}

function markSquare(board, currentPlayer) {
  if (currentPlayer === "Player") {
    playerMarksSquare(board);
  } else {
    computerMarksSquare(board);
  }
}

function playerMarksSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
  board[square]['display'] = ` ${HUMAN_MARKER} `;
  board[square]['marker'] = HUMAN_MARKER;
}

function computerMarksSquare(board) {
  let square;
  if (findAtRiskSquare(board, HUMAN_MARKER)) {
    square = findAtRiskSquare(board, HUMAN_MARKER);
  } else if (findAtRiskSquare(board, COMPUTER_MARKER)) {
    square = findAtRiskSquare(board, COMPUTER_MARKER);
  } else if (board[5]['marker'] === INITIAL_MARKER) {
    square = 5;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square]['display'] = ` ${COMPUTER_MARKER} `;
  board[square]['marker'] = COMPUTER_MARKER;
}

function findAtRiskSquare(board, player) {
  let opponent;
  if (player === HUMAN_MARKER) opponent = COMPUTER_MARKER;
  else if (player === COMPUTER_MARKER) opponent = HUMAN_MARKER;

  for (let sqArr of WINNING_LINES) {
    let sqVals = sqArr.map(sqPos => board[sqPos]['marker']);
    let oppSqs = sqVals.filter(sqVal => sqVal === opponent).length;
    let empSqs = sqVals.filter(sqVal => sqVal === INITIAL_MARKER).length;
    if (oppSqs === 2 && empSqs === 1) {
      return sqArr[sqVals.indexOf(INITIAL_MARKER)];
    }
  }
  return null;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWonRound(board) {
  return detectRoundWinner(board);
}

function detectRoundWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1]['marker'] === HUMAN_MARKER &&
        board[sq2]['marker'] === HUMAN_MARKER &&
        board[sq3]['marker'] === HUMAN_MARKER
    ) {
      return PLAYER_NAME;
    } else if (
      board[sq1]['marker'] === COMPUTER_MARKER &&
        board[sq2]['marker'] === COMPUTER_MARKER &&
        board[sq3]['marker'] === COMPUTER_MARKER
    ) {
      return COMPUTER_NAME;
    }
  }

  return null;
}

function initializeScore() {
  let scorecard = {Player: 0, Computer: 0};
  const incrementScore = name => {
    scorecard[name] += 1;
  };
  const getScore = () => scorecard;
  return [incrementScore, getScore];
}

function doReplay() {
  prompt("Would you like to play again (yes/no)?");
  let replay = readline.question().toLowerCase();
  while (!['yes', 'no', 'y', 'n'].includes(replay)) {
    prompt("Please enter a valid entry (yes/no)");
    replay = readline.question().toLowerCase();
  }
  return replay[0] === 'y';
}

function getRoundScores(getScore) {
  let scoreCard = getScore();
  let playerScore = scoreCard[PLAYER_NAME];
  let computerScore = scoreCard[COMPUTER_NAME];
  return [playerScore, computerScore];
}

function displayGameScore(getScore) {
  let [playerScore, computerScore] = getRoundScores(getScore);
  console.log(`Player score is: ${playerScore}. Computer score is: ${computerScore}`);
}

function getGameWinner(getScore) {
  let [playerScore, computerScore] = getRoundScores(getScore);
  if (playerScore === ROUNDS_TO_WIN) return PLAYER_NAME;
  else if (computerScore === ROUNDS_TO_WIN) return COMPUTER_NAME;
  else return null;
}

function greet() {
  console.clear();
  prompt("Welcome to Tic Tac Toe");
}

function playRounds(board, currentPlayer, getScore) {
  do {
    displayBoard(board);
    displayGameScore(getScore);
    markSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
  } while (!someoneWonRound(board) && !boardFull(board));
}

function displayRoundWinner(board, incrementScore) {
  if (someoneWonRound(board)) {
    let roundWinner = detectRoundWinner(board);
    prompt(`${roundWinner} won!`);
    incrementScore(roundWinner);
  } else {
    prompt("It's a tie!");
  }
}

//

do {
  greet();
  const [incrementScore, getScore] = initializeScore();
  let startingPlayer = whoGoesFirst();
  let gameWinner;

  do {
    let board = initializeBoard();

    playRounds(board, startingPlayer, getScore);

    displayBoard(board);

    displayRoundWinner(board, incrementScore);

    displayGameScore(getScore);

    gameWinner = getGameWinner(getScore);

    if (!gameWinner) {
      readline.question("=> Press Enter for next round");
    }

  } while (!gameWinner);
  prompt(`${gameWinner} won ${ROUNDS_TO_WIN} rounds!`);
} while (doReplay());

prompt('Thanks for playing Tic Tac Toe!');

