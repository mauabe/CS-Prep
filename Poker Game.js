Deck // Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom



function pokerGame() {
  // dynamic stored data
  
  // wins, losses, and ties
  const gameScore = {wins: 0, losses: 0, ties: 0};
  
  // static stored data
  
  // suits and ranks
  const allSuits = ['spades', 'diamonds', 'hearts', 'clubs'];
  const allRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; 
  
  // hand valuations
  const handValues = ['high card', 'one pair', 'two pair', 'three of a kind', 'straight', 'flush', 'full house', 'four of a kind', 'straight flush', 'royal flush'];
  //                        0                 1       2            3                     4        5          6                7               8                    9
  
  
  // helper functions for game engine
  
  // create a card based on index (0-51)
  function createCard(index) {
    const suit = allSuits[index % allSuits.length];
    const rankIndex = Math.floor(index / allSuits.length);
    const rank = allRanks[rankIndex];
    
    
    return {rankIndex, rank, suit};
  }
  
  // generate 
  function generate13() {
    // get 13 random numbers out of 0-51
    const cardIndexes13 = _.sampleSize(_.range(52), 13);
    
    return cardIndexes13.map(createCard);
  }


  // hand evaluation
  function evaluateHand(hand_) {
    // sort the hand ascending based on rankIndex
    const hand = hand_.slice().sort((card1, card2) => {
      return card1.rankIndex - card2.rankIndex;
    });
    
    // check for a flush
    const isFlush = hand.every((card) => card.suit === hand[0].suit);
    
    // check for a straight
    
    const isStraight = (() => {
      for (let i = 1; i < hand.length; i++) {
        if (hand[i - 1].rankIndex + 1 !== hand[i].rankIndex)
          return false;
      }
      
      return true;
    })();
    
    // check for pairs, two pairs, trips, full house, quads
    
    // example:
    // rankIndexCounts: {'A': 1, 'Q': 3 , '4': 1}
    // collectionType: [3, 1, 1]
    
    const rankCounts = _.countBy(hand, (el) => el.rank);
    const collectionType = Object.values(rankCounts).sort((a, b) => b - a);
    
    // check for hand results
    if (isFlush && isStraight) {
      if (rankCounts['A'])
        return 9; // royal flush
      else
        return 8; // straight flush
    }
    else if (collectionType[0] === 4)
      return 7; // quads
    else if (collectionType[0] === 3 && collectionType[1] === 2)
      return 6; // full house
    else if (isFlush)
      return 5; // flush
    else if (isStraight)
      return 4; // straight
    else if (collectionType[0] === 3)
      return 3; // trips
    else if (collectionType[0] === 2 && collectionType[1] === 2)
      return 2; // two pair
    else if (collectionType[0] === 2)
      return 1; // pair
    else
      return 0; // high card
  }
  
  // tests
  
  //console.log(generate13());
  // straight flush
  //console.log(evaluateHand([3, 4, 5, 6, 7]
  //                         .map((i) => ({rankIndex: i, rank: allRanks[i], suit: 'hearts'}))));
  
  
  // helper functions for input/output
  
  function printGameScore() {
    console.log(`wins: ${gameScore.wins}, losses: ${gameScore.losses}, ties: ${gameScore.ties}`);
  }
  
  function printHand(hand) {
    hand.forEach((card) => {
      console.log(`${card.rank} of ${card.suit}`);
    });
  }
  
  // 7 of clubs
  // Q of hearts
  // etc...
  
  function promptAndDiscard(playerHand, extraCards) {
    // prompt user input
    let discardString = window.prompt('Enter the card numbers you want to discard (up to 3, comma separated with no space)');
    if (discardString === null)
      discardString = '';
    
    // ex: 5,1,2 
    const indexes = discardString.split(',').map((char) => {
      return parseInt(char) - 1;
    });
    
    // discard cards in playerHand, replacing with cards in extraCards as needed
    indexes.forEach((index) => {
      playerHand[index] = extraCards.pop();
    });
  }
  
  
  // main game: logic for playing a turn of poker
  return function playTurn() {
    console.log('Game starting');
    
    // log current results
    printGameScore();
    
    // create initial 13 cards, computer hand, player hand, and extra cards.
    const cards13 = generate13();
    // computer, player, extra
    const computerHand = cards13.slice(0, 5);
    const playerHand = cards13.slice(5, 10);
    const extraCards = cards13.slice(10, 13);
    
    // log initial player hand
    console.log('player hand:')
    printHand(playerHand);
    
    // prompt for cards to discard
    promptAndDiscard(playerHand, extraCards);
    
    // log new player hand
    console.log('player hand:')
    printHand(playerHand);
    
    // log opponent hand
    console.log('opponent hand:')
    printHand(computerHand);
    
    // evaluate hands, and store results
    const playerHandEval = evaluateHand(playerHand);
    const computerHandEval = evaluateHand(computerHand);
    
    // log our and opponent's evaluations
    
    console.log(`player score: ${handValues[playerHandEval]}`);
    console.log(`opponent score: ${handValues[computerHandEval]}`);
    
    // log whether we won/lost/tied, and change the game score
    
    if (playerHandEval > computerHandEval) { // win
      console.log('You won!');
      gameScore.wins++;
    }
    else if (playerHandEval < computerHandEval) { // loss
      console.log('You lost...💩');
      gameScore.losses++;
    }
    else { // tie
      console.log('You tied.');
      gameScore.ties++;
    }
    
    // log new gameScore
    printGameScore();
    console.log('Game complete');
  }
}

// run game

const game = pokerGame();
_.range(1).map(game);


