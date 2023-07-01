const readline = require('readline-sync');

class Deck {
  static POINTS = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
    A: 11
  }

  constructor() {
    this.cards = [];
    const suits = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    for (let count = 1; count <= 4; count += 1) {
      for (let suit of suits) {
        this.cards.push(suit);
      }
    }
    this.shuffle(this.cards);
  }

  shuffle(array) {
    for (let index = array.length - 1; index > 0; index -= 1) {
      let otherIndex = Math.floor(Math.random() * (index + 1));
      [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
    }
  }

  deal() {
    return this.cards.shift();
  }
}

class Player {
  static BUST_SCORE = 21;

  constructor() {
    this.score = 0;
    this.hand = [];
    this.stayed = false;
  }

  clearHand() {
    this.hand = [];
    this.stayed = false;
  }

  getScore() {
    let score = this.hand.reduce((acc, val) => {
      return acc + Deck.POINTS[val];
    }, 0);

    let aces = this.hand.filter(val => val === "A");

    while (aces.length > 0) {
      if (score > Player.BUST_SCORE) {
        score -= 10;
        aces.shift();
      } else {
        break;
      }
    }
    return score;
  }

  updateScore() {
    this.score = this.getScore();
  }

  busted() {
    return this.score > Player.BUST_SCORE;
  }

  hideOneCardString() {
    let firstCard = "unknown";
    let otherCards = this.hand.slice(1);
    return `${firstCard} and ${otherCards.join(", ")}`;
  }

  getAllCardsString() {
    return `${this.hand.join(", ")}`;
  }

  showScore() {
    let score = this.getScore();
    console.log(`The score of this hand is ${score}.\n`);
  }

}

class Human extends Player {
  static STARTING_CASH = 5;
  static BROKE_AMOUNT = 0;
  static RICH_AMOUNT = 10;

  constructor() {
    super();
    this.cash = Human.STARTING_CASH;
  }

  showAllHands() {
    console.log(`You have: [${this.getAllCardsString()}]`);
  }

  stayOrHit() {
    let choice = readline.question("(S)tay or (H)it? ").toLowerCase();
    while (!["stay", "s", "hit", "h"].includes(choice) ) {
      choice = readline.question("Invalid choice. (S)tay or (H)it? ");
    }
    console.log();
    return choice[0];
  }

  winCash() {
    this.cash += 1;
  }

  loseCash() {
    this.cash -= 1;
  }

  showCash() {
    console.log(`You have $${this.cash}.`);
  }

  isBroke() {
    return this.cash === Human.BROKE_AMOUNT;
  }

  isRich() {
    return this.cash === Human.RICH_AMOUNT;
  }

  isDone() {
    return this.isBroke() || this.isRich() || this.busted() || this.stayed;
  }
}

class Dealer extends Player {
  static MUST_HIT = 17;

  constructor() {
    super();
  }

  mustHit() {
    return this.score < Dealer.MUST_HIT;
  }

  isDone() {
    return !this.mustHit() || this.busted();
  }

  showAllHands() {
    console.log(`Dealer had: [${this.getAllCardsString()}]`);
  }

  hideOneCard() {
    console.log(`Dealer has: [${this.hideOneCardString()}]\n`);
  }
}

class TwentyOneGame {
  constructor() {
    this.human = new Human();
    this.dealer = new Dealer();
  }

  dealOnce(player) {
    player.hand.push(this.deck.deal());
  }

  dealTwice(player) {
    this.dealOnce(player);
    this.dealOnce(player);
  }

  displayWelcomeMessage() {
    console.log("Welcome to TwentyOne.\n");
  }

  displayGoodbyeMessage() {
    console.log("Thank you for playing TwentyOne.");
  }

  humanTurn() {
    this.human.showCash();
    this.dealer.hideOneCard();
    while (!this.human.isDone()) {
      this.human.showAllHands();
      this.human.showScore();
      if (this.human.stayOrHit() === "h") {
        this.dealOnce(this.human);
      } else {
        this.stay(this.human);
      }
      this.human.updateScore();
    }
  }

  dealerTurn() {
    this.dealer.showAllHands();
    this.dealer.showScore();
    while (!this.dealer.isDone()) {
      this.dealOnce(this.dealer);
      this.dealer.updateScore();
      this.dealer.showAllHands();
      this.dealer.showScore();
    }
    this.stay(this.dealer);
  }

  displayResults() {
    let winner = this.getWinner();

    if (this.human.busted()) {
      console.log("You busted!");
    } else if (this.dealer.busted()) {
      console.log("The dealer busted!");
    } else if (this.human.isBroke()) {
      console.log("You have no more cash.");
    } else if (this.human.isRich()) {
      console.log("You have more cash than you know what to do with.");
    } else if (winner) {
      console.log(`${winner} won the game!`);
    } else {
      console.log("It's a tie game.");
    }
  }

  updateCash() {
    let winner = this.getWinner();

    if (this.human.busted()) {
      this.human.loseCash();
    } else if (this.dealer.busted()) {
      this.human.winCash();
    } else if (winner === "You") {
      this.human.winCash();
    } else if (winner === "Dealer") {
      this.human.loseCash();
    }
  }

  getWinner() {
    let humanScore = this.human.getScore();
    let dealerScore = this.dealer.getScore();

    if (humanScore > dealerScore) {
      return "You";
    } else if (humanScore < dealerScore) {
      return "Dealer";
    } else {
      return null;
    }
  }

  gameOver() {
    return this.human.isBroke() || this.human.isRich();
  }

  play() {
    this.displayWelcomeMessage();

    do {
      this.resetGame();
      this.humanTurn();

      if (!this.human.busted()) this.dealerTurn();

      this.displayResults();
      this.updateCash();

      if (this.gameOver()) break;

    } while (this.playAgain());

    this.displayGoodbyeMessage();
  }

  resetGame() {
    this.deck = new Deck();

    this.human.clearHand();
    this.dealTwice(this.human);
    this.human.updateScore();

    this.dealer.clearHand();
    this.dealTwice(this.dealer);
    this.dealer.updateScore();
  }

  playAgain() {
    let choice = readline.question("Would you like to play again? (y/n) ").toLowerCase();
    while (!["yes", "y", "no", "n"].includes(choice)) {
      choice = readline.question("Invalid choice. Would you like to play again? (y/n) ");
    }
    console.clear();
    return choice[0] === "y";
  }

  stay(player) {
    player.stayed = true;
  }

}

const game = new TwentyOneGame();
game.play();