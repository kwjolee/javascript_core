const readline = require('readline-sync');
const USER_ID = " X ";
const CPU_ID = " O ";

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[square] = `(${square})`;
  }

  return board;
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${USER_ID}. Computer is ${CPU_ID}`);
  console.log('');
  console.log('     |     |');
  console.log(` ${board['1']} | ${board['2']} | ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(` ${board['4']} | ${board['5']} | ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(` ${board['7']} | ${board['8']} | ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function getUserInput(board) {
  displayBoard(board);
  let userInput = readline.question("Please select a board position (1-9)\n");

  while (!isOpenPosition(userInput)) {
    displayBoard(board);
    userInput = readline.question("Please select a valid, open position (1-9)\n");
  }
  return userInput;

  function isOpenPosition(input) {
    const BOARD_POSITIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return BOARD_POSITIONS.includes(input) && !"XO".includes(board[input]);
  }
}

function makeCPUSelection(board) {
  let openBoard = getOpenBoard(board);
  let randInd = Math.floor(Math.random() * openBoard.length);
  let CPUSelection = openBoard[randInd][1];
  return CPUSelection;
}

function getOpenBoard(board) {
  let currentBoard = Object.values(board);
  return currentBoard.filter(val => val !== USER_ID && val !== CPU_ID);
}

function updateBoard(boardPosition, playerID, board) {
  board[boardPosition] = playerID;
}

function checkGameWinner(board) {
  let openBoard = getOpenBoard(board);

  let rowWinner = checkRowWinner(board);
  let colWinner = checkColWinner(board);
  let diaWinner = checkDiaWinner(board);
  let winners = [rowWinner, colWinner, diaWinner];
  let gameWinner = winners.filter(val => val !== null);
  if (gameWinner.length > 0) {
    return gameWinner[0];
  } else if (openBoard.length === 0 ) {
    return "tie";
  } else {
    return null;
  }
}

function checkRowWinner(board) {
  for (let ind = 1; ind <= 7; ind += 3) {
    let entries = [board[ind], board[ind + 1], board[ind + 2]];
    if (entries.every(val => val === USER_ID)) {
      return USER_ID;
    } else if (entries.every(val => val === CPU_ID)) {
      return CPU_ID;
    }
  }
  return null;
}

function checkColWinner(board) {
  for (let ind = 1; ind <= 3; ind += 1) {
    let entries = [board[ind], board[ind + 3], board[ind + 6]];
    if (entries.every(val => val === USER_ID)) {
      return USER_ID;
    } else if (entries.every(val => val === CPU_ID)) {
      return CPU_ID;
    }
  }
  return null;
}

function checkDiaWinner(board) {
  const DIAGS = [["1", "5", "9"], ["3", "5", "7"]];
  for (let diag of DIAGS) {
    let entries = [];
    for (let ind of diag) {
      entries.push(board[ind]);
    }
    if (entries.every(val => val === USER_ID)) {
      return USER_ID;
    } else if (entries.every(val => val === CPU_ID)) {
      return CPU_ID;
    }
  }
  return null;
}

function declareWinner(winnerID) {
  if (winnerID === USER_ID) {
    console.log("You won the game!");
  } else if (winnerID === "tie") {
    console.log("There is no winner.");
  } else {
    console.log("You lost the game.");
  }
}

function askReplay() {
  let replay = readline.question("Would you like to play again (y/n)?\n").toLowerCase();
  while (!['yes', 'no', 'y', 'n'].includes(replay)) {
    replay = readline.question("Please enter a valid entry (y/n)\n");
  }
  return replay === 'y' || replay === 'yes';
}

function goodbye() {
  console.log("Thanks for playing Tic Tac Toe!");
}

// /*

do {
  let board = initializeBoard();
  do {
    displayBoard(board);
    updateBoard(getUserInput(board), USER_ID, board);
    if (checkGameWinner(board)) break;
    updateBoard(makeCPUSelection(board), CPU_ID, board);
  } while (!checkGameWinner(board));

  displayBoard(board);
  declareWinner(checkGameWinner(board));
} while (askReplay());

goodbye();
// */