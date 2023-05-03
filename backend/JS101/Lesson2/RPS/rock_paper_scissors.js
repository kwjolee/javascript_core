const readline = require('readline-sync');

const ROUNDS_TO_WIN = 3;

const scorecardLabels = {
  round: "Round",
  userName: "You",
  CPUName: "CPU",
  lastUserMove: "lastUserMove",
  lastCPUMove: "lastCPUMove",
  lastWinner: "lastWinner",
  currentLeader: "leads",
  gameWinner: "winner"
};

const WINNING_LIST = {
  rock: {winsAgainst: ["lizard", "scissors"], shortHand: "(r)ock"},
  paper: {winsAgainst: ["rock", "spock"], shortHand: "(p)aper"},
  scissors: {winsAgainst: ["paper", "lizard"], shortHand: "(sc)issors"},
  lizard: {winsAgainst: ["lizard", "spock"], shortHand: "(l)izard"},
  spock: {winsAgainst: ["scissors", "rock"], shortHand: "(sp)ock"}
};

const VALID_MOVES = Object.keys(WINNING_LIST);
const VALID_SHORTHAND = VALID_MOVES.map(key => WINNING_LIST[key].shortHand);
const VALID_INITIALS = VALID_SHORTHAND.map(key => key.slice(1,key.lastIndexOf(")")));

const CHOICES_SPACE = Math.max(...VALID_MOVES.map(move => move.length)) + 1;
const LABEL_SPACE = scorecardLabels["round"].length;
const CPU_NAME_ADJUST = scorecardLabels["CPUName"].length;
const SCORE_SPACE = 5 + LABEL_SPACE + CPU_NAME_ADJUST;
const USER_SPACE = LABEL_SPACE + 9;
const CPU_SPACE = USER_SPACE + 6 + LABEL_SPACE + CPU_NAME_ADJUST;

const MESSAGES = {
  askMove: "Please choose your move :",
  invalidMove: "That is an invalid move. Please choose again:",
  askReplay: "Would you like to play again? (y)es/(n)o",
  invalidReplay: "Invalid response. Would you like to play again? (y)es/(n)o",
  thankyou: "Thank you for playing with us.\n",
  welcome: "Welcome to the game.",
  start: `First to winning ${ROUNDS_TO_WIN} rounds wins the game.\n`
};

function prompt(message) {
  console.log(`===> ${message}`);
}

function getUserMove() {
  prompt(`${MESSAGES["askMove"]}`);
  prompt(`${VALID_SHORTHAND.join(", ")}`);
  let userMove = readline.question().toLowerCase();
  while (checkInvalidMove(userMove)) {
    prompt(`${MESSAGES["invalidMove"]}`);
    prompt(`${VALID_SHORTHAND.join(", ")}`);
    userMove = readline.question().toLowerCase();
  }
  return VALID_MOVES.filter(key => key.startsWith(userMove))[0];
}

function checkInvalidMove(userMove) {
  const longNotationInvalid = !VALID_MOVES.includes(userMove);
  const shortNotationInvalid = !VALID_INITIALS.includes(userMove);
  return longNotationInvalid && shortNotationInvalid;
}

function getCPUMove() {
  const randCPU = Math.floor(Math.random() * VALID_MOVES.length);
  return VALID_MOVES[randCPU];
}

function getWinner(userMove, CPUMove) {
  if (WINNING_LIST[userMove].winsAgainst.includes(CPUMove)) {
    return scorecardLabels["userName"];
  } else if (userMove === CPUMove) {
    return "tie";
  } else {
    return scorecardLabels["CPUName"];
  }
}

function displayWinner(scorecard) {
  const userMove = scorecard[scorecardLabels["lastUserMove"]];
  const CPUMove = scorecard[scorecardLabels["lastCPUMove"]];
  const winner = scorecard[scorecardLabels["lastWinner"]];
  const userName = scorecardLabels["userName"];
  const CPUName = scorecardLabels["CPUName"];
  const moveSpace = CHOICES_SPACE - userMove.length;
  prompt(`${userName} chose ${userMove}.${spaces(moveSpace)}${CPUName} chose ${CPUMove}.`);
  if (winner !== "tie") {
    prompt(`${winner} won the round!\n`);
  } else {
    prompt("It's a tie.\n");
  }
}

function askReplay() {
  prompt(`${MESSAGES["askReplay"]}`);
  let replay = readline.question();
  while (checkInvalidYesNo(replay)) {
    prompt(`${MESSAGES["invalidReplay"]}`);
    replay = readline.question();
  }
  return replay.toLowerCase()[0] === "y";
}

function checkInvalidYesNo(replay) {
  return !["y", "yes", "n", "no"].includes(replay);
}

function displayScore(leadStatus, scorecard) {
  const round = scorecard[scorecardLabels["round"]];
  const roundName = scorecardLabels["round"];
  const userScore = scorecard[scorecardLabels["userName"]];
  const CPUScore = scorecard[scorecardLabels["CPUName"]];
  const CPUName = scorecardLabels["CPUName"];
  const ROUND_SPACE = (round < 10) ? 9 : 8;
  prompt(`This is${spaces(LABEL_SPACE)}Your score${spaces(LABEL_SPACE)}${CPUName} score`);
  prompt(`${roundName} ${round}${spaces(ROUND_SPACE)}${userScore}${spaces(SCORE_SPACE)}${CPUScore}`);
  if (userScore > CPUScore) {
    prompt(`${spaces(USER_SPACE)}${leadStatus}\n`);
  } else if (userScore < CPUScore) {
    prompt(`${spaces(CPU_SPACE)}${leadStatus}\n`);
  } else {
    prompt("\n");
  }
}

function spaces(number) {
  return " ".repeat(number);
}

function getLeadScore(scorecard) {
  let userScore = scorecard[scorecardLabels["userName"]];
  let CPUScore = scorecard[scorecardLabels["CPUName"]];
  return Math.max(userScore, CPUScore);
}

function sayBye() {
  console.clear();
  prompt(`${MESSAGES["thankyou"]}`);
}

function displayHeader(scorecard, leadStatus = scorecardLabels["currentLeader"]) {
  if (scorecard[scorecardLabels["round"]] === 1) {
    prompt(`${MESSAGES["welcome"]}`);
    prompt(`${MESSAGES["start"]}`);
    displayScore(leadStatus, scorecard);
  } else {
    displayWinner(scorecard);
    displayScore(leadStatus, scorecard);
  }
}

function makeScorecard() {
  const scorecard = {
    [scorecardLabels["round"]]: 1, [scorecardLabels["userName"]]: 0, [scorecardLabels["CPUName"]]: 0,
    [scorecardLabels["lastUserMove"]]: '',  [scorecardLabels["lastCPUMove"]]: '', [scorecardLabels["lastWinner"]]: ''
  };

  const incrementRound = function() {
    scorecard[scorecardLabels["round"]] += 1;
  };

  const getScorecard = () => scorecard;

  const incrementWinner = function(winner) {
    scorecard[winner] += 1;
  };

  const updateLastMoves = function(userMove, CPUMove, winner) {
    scorecard[scorecardLabels["lastUserMove"]] = userMove;
    scorecard[scorecardLabels["lastCPUMove"]] = CPUMove;
    scorecard[scorecardLabels["lastWinner"]] = winner;
  };

  return [incrementRound, getScorecard, incrementWinner, updateLastMoves];
}

function announceVictor(victor) {
  prompt(`${victor} won the game!\n`);
}

function playRound() {
  const userMove = getUserMove();
  const CPUMove = getCPUMove();
  const winner = getWinner(userMove, CPUMove);
  return [userMove, CPUMove, winner];
}

//
do {
  const [incrementRound, getScorecard,
    incrementWinner, updateLastMoves] = makeScorecard();

  let leadScore = 0;

  do {
    console.clear();

    displayHeader(getScorecard());

    const [userMove, CPUMove, winner] = playRound();

    incrementRound();
    incrementWinner(winner);
    updateLastMoves(userMove, CPUMove, winner);

    leadScore = getLeadScore(getScorecard());
  } while (leadScore < ROUNDS_TO_WIN);

  console.clear();
  displayHeader(getScorecard(), scorecardLabels["gameWinner"]);
  announceVictor(getScorecard()[[scorecardLabels["lastWinner"]]]);

} while (askReplay());
sayBye();