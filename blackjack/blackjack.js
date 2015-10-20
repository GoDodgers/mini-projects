/**
 * Creates a card object.
 * @param value The numerical value of the card. For ace, we just put 1 for now.
 * @param suit The suit of the card. Used when displaying card. Has no impact on the game.
 * @param name The name of the card. Used to distinguish between jack, queen and king.
 */
function Card(value, suit, name) {
    this.value = value;
    this.suit = suit;
    this.name = name;
}

/**
 * Creates a new 52 deck of cards out of Card objects. The deck is an array.
 */
function createDeck() {
    var deck = [];

    // Using the unicode characters for the suit
    var suits = ['\u2660', '\u2665', '\u2663', '\u2666'];
    for (var i=0; i < suits.length; i++) {
        var suit = suits[i];
        // Create the ace
        deck.push(new Card(1, suit, 'A'));
        // Create all the numerical cards.
        for (var rank=2; rank < 11; rank++) {
            deck.push(new Card(rank, suit, rank.toString()));
        }
        // Create the face cards
        deck.push(new Card(10, suit, 'J'));
        deck.push(new Card(10, suit, 'Q'));
        deck.push(new Card(10, suit, 'K'));
    }
    return deck;
}

/**
 * Picks a random card out of the deck and returns it and removes it from
 * the deck.
 *
 * NOTE: This method modifies the deck argument.
 */
function randomCard(deck) {
    var index = Math.floor(Math.random() * deck.length);
    var randomCard = deck[index];
    deck.splice(index, 1);
    return randomCard;
}

function newGame() {
    alert('start new game');
    var deck = createDeck();

    var dealerHand = [];
    dealerHand.push(randomCard(deck));
    dealerHand.push(randomCard(deck));

    var playerHand = [];
    playerHand.push(randomCard(deck));
    playerHand.push(randomCard(deck));

    // Call either the showDealerHand or showPlayerHand functions to show
    // their current hands.
    showDealerHand(dealerHand);
    showPlayerHand(playerHand);

    // TODO:
    // Compute if anyone has won
    // Ask user to hit/stay/split(maybe?)
    // Compute if there's a winner
    // Repeat
    // Show a game over message with winner
}
