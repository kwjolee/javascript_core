class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}

/*
if we directly add a play method to the Bingo class, then that method will get invoked
when we call the method on the Bingo class, not the one in the Game class
in the prototype search hierarchy, the property of the name play will be found first
in the Bingo class, and it will stop searching up the chain before it can find the
one in the Game class

this is called method overriding
*/