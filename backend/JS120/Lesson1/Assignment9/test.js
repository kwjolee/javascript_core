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

const computerMoves = ['scissors', 'paper', 'rock', 'rock', 'paper'];
const humanMoves = ['paper', 'paper', 'rock', 'scissors', 'rock'];

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
  return null;
}

let count = 0;
let moves = {rock: 0, paper: 0, scissors: 0, lizard: 0, spock: 0};
while (count < 100000) {
  let move = getIdealMove(computerMoves, humanMoves);
  moves[move] = moves[move] + 1 || 1;
  count += 1;
}
console.log(moves);