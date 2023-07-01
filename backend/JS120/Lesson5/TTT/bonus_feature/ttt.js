const readline = require('readline-sync');

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.reset();
  }

  reset() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter += 1) {
      this.squares[counter] = new Square();
    }
  }

  centerIsOpen() {
    return this.squares[5].marker === Square.UNUSED_SQUARE;
  }

  isFull() {
    let unusedSquares = this.unusedSquares();
    return unusedSquares.length === 0;
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  displayWithClear() {
    console.clear();
    console.log("\n\n");
    this.display();
  }

  display() {
    console.log();
    console.log(`     |     |`);
    console.log(`  ${this.squares[1]}  |  ${this.squares[2]}  |  ${this.squares[3]}`);
    console.log(`     |     |`);
    console.log(`-----+-----+-----`);
    console.log(`     |     |`);
    console.log(`  ${this.squares[4]}  |  ${this.squares[5]}  |  ${this.squares[6]}`);
    console.log(`     |     |`);
    console.log(`-----+-----+-----`);
    console.log(`     |     |`);
    console.log(`  ${this.squares[7]}  |  ${this.squares[8]}  |  ${this.squares[9]}`);
    console.log(`     |     |`);
    console.log();
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

}

class Player {
  constructor(marker) {
    this.marker = marker;
    this.score = 0;
  }

  getMarker() {
    return this.marker;
  }

  incrementScore() {
    this.score += 1;
  }

  resetScore() {
    this.score = 0;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.currentPlayer = this.human;
    this.firstPlayer = this.human;
  }

  static POSSIBLE_WINNING_ROWS = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
  ]

  static TARGET_SCORE = 3;

  static joinOr(arr, delim = ", ", word = "or") {
    if (arr.length <= 2) {
      return arr.join(` ${word} `);
    } else {
      return arr.slice(0, -1).join(`${delim}`) + delim + `${word} ` + arr.slice(-1);
    }
  }

  changeCurrentPlayer() {
    if (this.currentPlayer === this.human) {
      this.currentPlayer = this.computer;
    } else {
      this.currentPlayer = this.human;
    }
  }

  changeFirstPlayer() {
    if (this.firstPlayer === this.human) {
      this.firstPlayer = this.computer;
    } else {
      this.firstPlayer = this.human;
    }
    this.currentPlayer = this.firstPlayer;
  }

  reachedTargetScore() {
    let humanScore = this.human.score;
    let computerScore = this.computer.score;
    console.clear();
    console.log();
    return Math.max(humanScore, computerScore) === TTTGame.TARGET_SCORE;
  }

  play() {
    this.displayWelcomeMessage();

    do {
      this.resetScores();
      do {
        this.playOneGame();
        this.updateScore();
        this.changeFirstPlayer();
      } while (!this.reachedTargetScore());

      this.displayScores();
      this.board.display();
      this.displayResults();
    } while (this.playAgain());

    this.displayGoodbyeMessage();
  }

  playOneGame() {
    this.board.reset();
    this.displayScores();
    this.board.display();

    while (true) {

      this.playerMoves();
      this.changeCurrentPlayer();
      if (this.gameOver()) break;

      this.board.displayWithClear();
    }
    console.clear();
    this.displayScores();
    this.board.display();
    this.displayResults();
  }

  playerMoves() {
    if (this.currentPlayer === this.human) {
      this.humanMoves();
    } else {
      this.computerMoves();
    }
  }

  resetScores() {
    this.human.resetScore();
    this.computer.resetScore();
  }

  displayScores() {
    let humanScore = this.human.score;
    let computerScore = this.computer.score;
    console.log(`Your score is       ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  }

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
  }

  updateScore() {
    if (this.isWinner(this.human)) {
      this.human.incrementScore();
    } else if (this.isWinner(this.computer)) {
      this.computer.incrementScore();
    }
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log('Sorry, that is not a valid choice.\n');
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let choice;

    if (this.getAtRiskSquare(this.computer)) {
      choice = this.getAtRiskSquare(this.computer);
    } else if (this.getAtRiskSquare(this.human)) {
      choice = this.getAtRiskSquare(this.human);
    } else if (this.board.centerIsOpen()) {
      choice = 5;
    } else {
      choice = this.getRandomMove();
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  getAtRiskSquare(player) {
    for (let row of TTTGame.POSSIBLE_WINNING_ROWS) {
      if (this.board.countMarkersFor(player, row) === 2) {
        for (let square of row) {
          if (this.board.squares[square].isUnused()) {
            return square;
          }
        }
      }
    }
    return null;
  }

  getRandomMove() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((Math.random() * 9) + 1).toString();
    } while (!validChoices.includes(choice));

    return choice;
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  playAgain() {
    let choice = readline.question("Would you like to play again? (y/n): ").toLowerCase();
    while (!['yes', 'y', 'no', 'n'].includes(choice)) {
      choice = readline.question("Invalid choice. Would you like to play again? (y/n): ");
    }
    console.clear();
    console.log();
    return choice[0] === 'y';
  }
}

const game = new TTTGame();
game.play();