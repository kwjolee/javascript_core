const readline = require('readline-sync');

const PLAYER_NAME = "Player";
const COMPUTER_NAME = "Dealer";

const COMPUTER_MUST_HIT = 17;
const TARGET_SCORE = 21;

const ROUNDS_TO_WIN = 3;

const NUMBER_OF_SUITS = 4;

const CARD_TYPES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];

const CARD_VALUES = {
  2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
  jack: 10, queen: 10, king: 10,
  ace: [1, 11]
};

function prompt(message) {
  console.log(`==> ${message}`);
}

function greet() {
  prompt(`Welcome to Twenty One`);
  prompt(`First to win ${ROUNDS_TO_WIN} rounds wins the game.`);
  prompt(`If you go over ${TARGET_SCORE}, you will bust and lose the round.`);
  prompt(`${COMPUTER_NAME} must hit if its score is less than ${COMPUTER_MUST_HIT}.`);
  prompt(`Please hit Enter to start the game:`);
  readline.question();
}

function initializeDeck() {
  let deck = [];
  for (let card of CARD_TYPES) {
    let count = 0;
    while (count < NUMBER_OF_SUITS) {
      deck.push(card);
      count += 1;
    }
  }
  shuffleDeck(deck);
  return deck;
}

function shuffleDeck(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

function getNextCard(deck) {
  return deck.shift();
}

function initializeHands(deck) {
  const PLAYER_HAND = [];
  dealCard(deck, PLAYER_HAND);
  dealCard(deck, PLAYER_HAND);

  const COMPUTER_HAND = [];
  dealCard(deck, COMPUTER_HAND);
  dealCard(deck, COMPUTER_HAND);

  const allHands = {};
  allHands[PLAYER_NAME] = PLAYER_HAND;
  allHands[COMPUTER_NAME] = COMPUTER_HAND;

  const getHands = (playerName) => allHands[playerName];
  return getHands;
}

function initializeRound() {
  const DECK = initializeDeck();
  const getHands = initializeHands(DECK);
  const GAME_INFO = {deckInfo: DECK, handInfo: getHands};
  return GAME_INFO;
}

function dealCard(deck, hand) {
  let nextCard = getNextCard(deck);
  hand.push(nextCard);
}

function parseHand(hand) {
  let nonAces = hand.filter(val => val !== "ace");

  let aces = [];
  hand.forEach(val => {
    if (val === "ace") aces.push(CARD_VALUES["ace"]);
  });

  return [nonAces, aces];
}
let ct = 0;
function getHandScore(hand) {

  let [nonAces, aces] = parseHand(hand);

  let nonAceScore = nonAces.reduce((acc, val) => acc + CARD_VALUES[val], 0);

  let score = Infinity;

  if (aces.length > 0) {
    let acesCombo = cartesianProduct(...aces);
    for (let subCombo of acesCombo) {
      let aceScore = subCombo.reduce((acc, val) => acc + val, 0);
      let subScore = nonAceScore + aceScore;
      if (subScore <= TARGET_SCORE) {
        score = Math.min(TARGET_SCORE, subScore);
      } else {
        score = Math.min(score, subScore);
      }
    }
  } else {
    score = nonAceScore;
  }
  ct += 1;
  console.log(`I was just run ${ct}`)
  return score;
}

function cartesianProduct(...arr) {
  return arr.reduce((acc,val) => {
    return acc.map(el => {
      return val.map(element => {
        return el.concat([element]);
      });
    }).reduce((acc,val) => acc.concat(val) ,[]);
  }, [[]]);
}

function doesThisBust(hand) {
  return getHandScore(hand) > TARGET_SCORE;
}

function joinHand(hand) {
  switch (hand.length) {
    case 2:
      return hand.join(` and `);
    default: {
      let frontStr = hand.slice(0, hand.length - 1).join(", ");
      return frontStr + ", and " + hand[hand.length - 1];
    }
  }
}

function showScoreboard(getHands, getGameScore) {
  console.clear();
  showGameScore(getGameScore);
  console.log();
  showHand(getHands, COMPUTER_NAME, false);
  showHand(getHands, PLAYER_NAME);
}

function showGameScore(getGameScore) {
  let [playerScore, computerScore] = [getGameScore()[0], getGameScore()[1]];
  prompt(`Your score is ${playerScore}. ${COMPUTER_NAME}'s score is ${computerScore}`);
}

function runPlayerTurn(roundInfo, getGameScore) {
  const getHands = roundInfo.handInfo;
  const deck = roundInfo.deckInfo;

  showScoreboard(getHands, getGameScore);

  while (hitOrStay() === "h") {
    dealCard(deck, getHands(PLAYER_NAME));
    showScoreboard(getHands, getGameScore);
    if (doesThisBust(getHands(PLAYER_NAME))) return PLAYER_NAME;
  }
  prompt('You decided to stay.');
  return null;
}

function hitOrStay() {
  prompt(`Do you want to (h)it or (s)tay?`);
  let playerAction = readline.question().toLowerCase();
  while (!["hit", "h", "stay", "s"].includes(playerAction)) {
    prompt(`Please enter a valid action`);
    prompt(`Do you want to (h)it or (s)tay?`);
    playerAction = readline.question().toLowerCase();
  }
  return playerAction[0];
}

function showHand(getHands, whoseHand, showFullHand) {
  if (whoseHand === PLAYER_NAME) {
    prompt(`Your cards are [${joinHand(getHands(PLAYER_NAME))}] for a score of ${getHandScore(getHands(PLAYER_NAME))}.`);
  } else if (showFullHand) {
    prompt(`${COMPUTER_NAME}'s cards are [${joinHand(getHands(COMPUTER_NAME))}] for a score of ${getHandScore(getHands(COMPUTER_NAME))}.`);
  } else {
    prompt(`${COMPUTER_NAME}'s cards are [${getHands(COMPUTER_NAME)[0]} and unknown].`);
  }
}

function runComputerTurn(roundInfo) {
  const getHands = roundInfo.handInfo;
  const deck = roundInfo.deckInfo;

  console.log();
  while (getHandScore(getHands(COMPUTER_NAME)) < COMPUTER_MUST_HIT) {
    showHand(getHands, COMPUTER_NAME, true);
    prompt(`${COMPUTER_NAME} must hit.\n`);
    dealCard(deck, getHands(COMPUTER_NAME));
    if (doesThisBust(getHands(COMPUTER_NAME))) {
      showHand(getHands, COMPUTER_NAME, true);
      return COMPUTER_NAME;
    }
  }
  showHand(getHands, COMPUTER_NAME, true);
  prompt(`${COMPUTER_NAME} must stay.\n`);
  return null;
}

function showRoundWinner(loser, getHands, incrementGameScore) {
  let winner;
  if (loser === null) {
    winner = getWinner(getHands);
    if (winner) {
      prompt(`${winner} won the game!`);
    } else {
      prompt(`It is a tie.`);
    }
  } else {
    winner = (loser === PLAYER_NAME) ? COMPUTER_NAME : PLAYER_NAME;
    prompt(`${loser} busted.\n`);
    prompt(`${winner} won the game!`);
  }
  showHand(getHands, PLAYER_NAME, true);
  showHand(getHands, COMPUTER_NAME, true);
  incrementGameScore(winner);
}

function getWinner(getHands) {
  let playerScore = getHandScore(getHands(PLAYER_NAME));
  let computerScore = getHandScore(getHands(COMPUTER_NAME));
  if (playerScore > computerScore) {
    return PLAYER_NAME;
  } else if (computerScore > playerScore) {
    return COMPUTER_NAME;
  } else {
    return null;
  }
}

function doReplay() {
  console.log();
  prompt("Would you like to play again? (yes/no)");
  let replay = readline.question().toLowerCase();
  while (!['yes', 'no', 'y', 'n'].includes(replay)) {
    prompt("Please enter a valid entry: (yes/no)");
    replay = readline.question().toLowerCase();
  }
  return replay[0] === 'y';
}

function initializeGame() {
  const GAME_INFO = {};
  GAME_INFO[PLAYER_NAME] = 0;
  GAME_INFO[COMPUTER_NAME] = 0;
  GAME_INFO[null] = -Infinity;

  const getGameScore = () => {
    return [GAME_INFO[PLAYER_NAME], GAME_INFO[COMPUTER_NAME]];
  };

  const incrementGameScore = name => {
    GAME_INFO[name] += 1;
  };

  return [getGameScore, incrementGameScore];
}

function toNextRound() {
  console.log();
  prompt('Please hit Enter to begin the next round.');
  readline.question();
}

function showGameWinner(getGameScore) {
  let [playerScore, computerScore] = [getGameScore()[0], getGameScore()[1]];
  if (playerScore > computerScore) {
    prompt(`You won ${ROUNDS_TO_WIN} rounds and won the game!`);
  } else {
    prompt(`${COMPUTER_NAME} won ${ROUNDS_TO_WIN} and won the game!`);
  }
}

//

do {
  greet();
  let roundsWon = 0;
  const [getGameScore, incrementGameScore] = initializeGame();

  do {
    const ROUND_INFO = initializeRound();

    let loser = runPlayerTurn(ROUND_INFO, getGameScore);

    if (loser === null) {
      loser = runComputerTurn(ROUND_INFO);
    }

    showRoundWinner(loser, ROUND_INFO.handInfo, incrementGameScore);

    roundsWon = Math.max(...getGameScore());
    if (roundsWon < ROUNDS_TO_WIN) toNextRound();

  } while (roundsWon < ROUNDS_TO_WIN);

  showGameWinner(getGameScore);

} while (doReplay());

prompt('Thank you for playing Twenty-One.');