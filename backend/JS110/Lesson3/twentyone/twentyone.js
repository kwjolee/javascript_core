const readline = require('readline-sync');

const PLAYER_NAME = "Player";
const COMPUTER_NAME = "Computer";

const COMPUTER_HIT = 17;

const CARD_TYPES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];

const CARD_VALUES = {
  2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
  jack: 10, queen: 10, king: 10,
  ace: [1, 11]
};

function prompt(message) {
  console.log(`==> ${message}`);
}

function initializeDeck() {
  let deck = [];
  for (let card of CARD_TYPES) {
    let count = 0;
    while (count < 4) {
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

function initializeGame() {
  const DECK = initializeDeck();
  const getHands = initializeHands(DECK);
  const GAME_INFO = {deckInfo: DECK, handInfo: getHands};
  return GAME_INFO;
}

function dealCard(deck, hand) {
  let nextCard = getNextCard(deck);
  hand.push(nextCard);
}

function splitHand(hand) {
  let nonAces = hand.filter(val => val !== "ace");

  let aces = [];
  hand.forEach(val => {
    if (val === "ace") aces.push(CARD_VALUES["ace"]);
  });

  return [nonAces, aces];
}

function getHandScore(hand) {
  let [nonAces, aces] = splitHand(hand);

  let nonAceScore = nonAces.reduce((acc, val) => acc + CARD_VALUES[val], 0);

  let score = Infinity;

  if (aces.length > 0) {
    let acesCombo = cartesianProduct(...aces);
    for (let subCombo of acesCombo) {
      let aceScore = subCombo.reduce((acc, val) => acc + val, 0);
      let subScore = nonAceScore + aceScore;
      if (subScore <= 21) {
        score = Math.min(21, subScore);
      } else {
        score = Math.min(score, subScore);
      }
    }
  } else {
    score = nonAceScore;
  }

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
  return getHandScore(hand) > 21;
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

function updateScoreboard(getHands) {
  console.clear();
  showHand(getHands, COMPUTER_NAME, false);
  showHand(getHands, PLAYER_NAME);
}

function runPlayerTurn(gameInfo) {
  const getHands = gameInfo.handInfo;
  const deck = gameInfo.deckInfo;

  updateScoreboard(getHands);

  while (hitOrStay() === "h") {
    dealCard(deck, getHands(PLAYER_NAME));
    updateScoreboard(getHands);
    if (doesThisBust(getHands(PLAYER_NAME))) return PLAYER_NAME;
  }
  return null;
}

function hitOrStay() {
  prompt(`Do you want to (h)it or (s)tay?`);
  let playerAction = readline.question().toLowerCase();
  while (!["hit", "h", "stay", "s"].includes(playerAction)) {
    prompt(`Please enter a valid action`);
    prompt(`Do you want to (h)it" or (s)tay?`);
    playerAction = readline.question().toLowerCase();
  }
  return playerAction[0];
}

function showHand(getHands, whoseHand, showFullHand) {
  if (whoseHand === PLAYER_NAME) {
    prompt(`Your cards are [${joinHand(getHands(PLAYER_NAME))}] for a score of ${getHandScore(getHands(PLAYER_NAME))}.`);
  } else if (showFullHand) {
    prompt(`Computer's cards are [${joinHand(getHands(COMPUTER_NAME))}] for a score of ${getHandScore(getHands(COMPUTER_NAME))}.`);
  } else {
    prompt(`Computer's cards are [${getHands(COMPUTER_NAME)[0]} and unknown].`);
  }
}

function runComputerTurn(gameInfo) {
  const getHands = gameInfo.handInfo;
  const deck = gameInfo.deckInfo;

  console.log();
  while (getHandScore(getHands(COMPUTER_NAME)) < COMPUTER_HIT) {
    showHand(getHands, COMPUTER_NAME, true);
    prompt(`Computer must hit.\n`);
    dealCard(deck, getHands(COMPUTER_NAME));
    if (doesThisBust(getHands(COMPUTER_NAME))) {
      showHand(getHands, COMPUTER_NAME, true);
      return COMPUTER_NAME;
    }
  }
  showHand(getHands, COMPUTER_NAME, true);
  prompt(`Computer must stay.\n`);
  return null;
}

function showWinner(loser, getHands) {
  if (!loser) {
    let winner = getWinner(getHands);
    if (winner) {
      prompt(`${winner} won the game!`);
    } else {
      prompt(`It is a tie.`);
    }
  } else {
    let winner = (loser === PLAYER_NAME) ? COMPUTER_NAME : PLAYER_NAME;
    prompt(`${loser} busted.\n`);
    prompt(`${winner} won the game!`);
  }
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

//

do {
  const GAMEINFO = initializeGame();

  let loser = runPlayerTurn(GAMEINFO);

  if (!loser) {
    loser = runComputerTurn(GAMEINFO);
  }

  showWinner(loser, GAMEINFO.handInfo);
} while (doReplay());

