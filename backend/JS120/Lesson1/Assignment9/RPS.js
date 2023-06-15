const readline = require('readline-sync');

const TARGET_SCORE = 5;

const ALL_MOVES = {
  r: "rock", rock: "rock",
  p: "paper", paper: "paper",
  sc: "scissors", scissors: "scissors",
  l: "lizard", lizard: "lizard",
  sp: "spock", spock: "spock"
};

const WINNING_LIST = {
  rock: {winsAgainst: ["lizard", "scissors"], losesAgainst: ["paper", "spock"]},
  paper: {winsAgainst: ["rock", "spock"], losesAgainst: ["scissors", "lizard"]},
  scissors: {winsAgainst: ["paper", "lizard"], losesAgainst: ["rock", "spock"]},
  lizard: {winsAgainst: ["paper", "spock"], losesAgainst: ["rock", "scissors"]},
  spock: {winsAgainst: ["scissors", "rock"], losesAgainst: ["paper", "lizard"]}
};

function createPlayer() {
  return {
    move: null,

    score: 0,
    incrementScore() {
      this.score += 1;
    },
    resetScore() {
      this.score = 0;
    },

    moveHistory: [],
    addMove(choice) {
      this.moveHistory.push(choice);
    }
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('==> Please choose (r)ock, (p)aper, (sc)issors, (l)izard, or (sp)ock:');
        choice = readline.question().toLowerCase();
        if (Object.keys(ALL_MOVES).includes(choice)) break;
        console.log('==> Sorry, invalid choice.');
      }
      choice = ALL_MOVES[choice];
      this.move = choice;
      this.addMove(choice);
    }
  };

  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose(humanMoves) {
      let choice;
      if (this.moveHistory.length === 0) {
        choice = getRandomMove();
      } else {
        choice = getIdealMove(this.moveHistory, humanMoves);
      }
      this.move = choice;
      this.addMove(choice);
    },
  };

  return Object.assign(playerObject, computerObject);
}

function getIdealMove(computerMoves, humanMoves) {
  let weights = getWeights(computerMoves, humanMoves);
  let randNum = Math.random();
  let weightSum = 0;
  for (let move of Object.keys(WINNING_LIST)) {
    weightSum += weights[move];
    if (randNum <= weightSum)  {
      return move;
    }
  }
  return getRandomMove();
}

function getWeights(computerMoves, humanMoves) {
  let winCounts = {};
  for (let ind = 0; ind < computerMoves.length; ind += 1) {
    let computerMove = computerMoves[ind];
    let humanMove = humanMoves[ind];
    if (WINNING_LIST[computerMove].winsAgainst.includes(humanMove)) {
      winCounts[computerMove] = winCounts[computerMove] + 1 || 1;
    }
  }
  let totalWeight = Object.keys(WINNING_LIST).length;
  totalWeight += Object.values(winCounts).reduce((acc, val) => acc + val, 0);

  let weights = {};
  Object.keys(WINNING_LIST).forEach(move => {
    weights[move] = winCounts[move] + 1 || 1;
  });

  Object.keys(weights).forEach(move => {
    weights[move] /= totalWeight;
  });
  return weights;
}

function getRandomMove() {
  const choices = Object.keys(WINNING_LIST);
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  lastWinner: null,
  round: 1,

  incrementRound() {
    this.round += 1;
  },

  displayWelcomeMessage() {
    console.clear();
    console.log('==> Welcome to Rock, Paper, Scissors! And Lizard and Spock.');
    console.log(`==> First player to win ${TARGET_SCORE} rounds wins the game.\n`);
  },

  displayRules() {
    let allMoves = Object.keys(WINNING_LIST);
    const MAX_MOVE_LENGTH = Math.max(...allMoves.map(move => move.length));
    for (let move of allMoves) {
      let buffer1 = MAX_MOVE_LENGTH - move.length;
      let wins = WINNING_LIST[move].winsAgainst;
      let [win1, win2] = [wins[0].toUpperCase(), wins[1].toUpperCase()];
      let buffer2 = MAX_MOVE_LENGTH - win1.length;
      console.log(`${move.toUpperCase()} ${" ".repeat(buffer1)}beats ${win1} ${" ".repeat(buffer2)}and ${win2}`);
    }
    console.log();
  },

  displayGoodbyeMessage() {
    console.log('==> Thanks for playing Rock, Paper, Scissors. And Lizard and Spock. Goodbye!');
  },

  displayRoundWinner() {
    console.clear();
    let humanMove = ALL_MOVES[this.human.move];
    let CPUMove = ALL_MOVES[this.computer.move];

    let winner = this.getWinner();
    console.log(`==> You chose:      ${humanMove}`);
    console.log(`==> Computer chose: ${CPUMove}\n`);

    if (winner === "human") {
      console.log(`==> You won the round!`);
    } else if (winner === "tie") {
      console.log("==> It's a tie");
    } else {
      console.log(`==> Computer won the round!`);
    }
  },

  updateScores() {
    let winner = this.getWinner();

    if (winner === "human") {
      this.human.incrementScore();
      this.lastWinner = "human";
    } else if (winner === "tie") {
      this.lastWinner = null;
    } else {
      this.computer.incrementScore();
      this.lastWinner = "computer";
    }
  },

  getWinner() {
    let humanMove = ALL_MOVES[this.human.move];
    let CPUMove = ALL_MOVES[this.computer.move];

    if (WINNING_LIST[CPUMove].losesAgainst.includes(humanMove)) {
      return "human";
    } else if (WINNING_LIST[CPUMove].winsAgainst.includes(humanMove)) {
      return "computer";
    } else {
      return "tie";
    }
  },

  playAgain() {
    console.log('==> Would you like to play again? (y)es/(n)o');
    let answer = readline.question().toLowerCase();
    while (checkInvalidYesNo(answer)) {
      console.log('==> Invalid response. Would you like to play again? (y)es/(n)o');
      answer = readline.question().toLowerCase();
    }
    console.clear();
    return answer.toLowerCase()[0] === 'y';

    function checkInvalidYesNo(replay) {
      return !["y", "yes", "n", "no"].includes(replay);
    }
  },

  displayScoreboard() {
    let humanScore = this.human.score;
    let computerScore = this.computer.score;
    console.log(`==> You have won:     ${humanScore} round${humanScore === 1 ? "" : "s"}.`);
    console.log(`==> Computer has won: ${computerScore} round${computerScore === 1 ? "" : "s"}.\n`);
  },

  displayGameWinner() {
    let winner = this.lastWinner;
    if (winner === "human") {
      console.log("==> You won the game!");
    } else {
      console.log("==> Computer won the game!");
    }
  },

  resetScores() {
    this.human.resetScore();
    this.computer.resetScore();
    this.resetRoundNumber();
  },

  resetRoundNumber() {
    this.round = 1;
  },

  initializeGame() {
    this.displayWelcomeMessage();
    this.displayRules();
  },

  play() {
    this.initializeGame();
    do {
      this.resetScores();
      do {
        if (this.round > 1) {
          this.displayRoundWinner();
          this.displayScoreboard();
        }
        this.human.choose();
        this.computer.choose(this.human.moveHistory);
        this.updateScores();
        this.incrementRound();
      } while (Math.max(this.human.score, this.computer.score) < TARGET_SCORE);

      this.displayRoundWinner();
      this.displayGameWinner();

    } while (this.playAgain());
    console.clear();
    this.displayGoodbyeMessage();
  }
};

//

RPSGame.play();