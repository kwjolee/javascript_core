const readline = require("readline-sync");

const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const INITIAL_MARKER = ' ';
const BOARDSIZE = 3;
const GAMES_TO_WIN = 5;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}\n`);

  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |\n-----+-----+-----\n     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |\n-----+-----+-----\n     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |\n');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= (BOARDSIZE ** 2); square++) {
    board[String(square)] = ' ';
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
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

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function initializeScore() {
  let scorecard = {Player: 0, Computer: 0};
  const incrementScore = name => {
    scorecard[name] += 1;
  };
  const getScore = name => scorecard[name];
  return [incrementScore, getScore];
}

function doReplay() {
  prompt('Play again? (yes/no)');
  return readline.question().toLowerCase()[0] === "y";
}

//

do {
  const [incrementScore, getScore] = initializeScore();
  let winner;

  do {
    let board = initializeBoard();

    while (true) {
      displayBoard(board);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      winner = detectWinner(board);
      prompt(`${winner} won!`);
      readline.question("=> Press Enter for next round");
      incrementScore(winner);
    } else {
      prompt("It's a tie!");
      readline.question("=> Press Enter for next round");
    }

  } while (getScore(winner) < GAMES_TO_WIN);
  console.log(`${winner} won ${GAMES_TO_WIN} rounds!`);
} while (doReplay());

prompt('Thanks for playing Tic Tac Toe!');