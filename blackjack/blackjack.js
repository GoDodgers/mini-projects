// Let's make blackjack game

/*
 * A blackjack game has a lot of moving parts. For a first project it's a lot to take
 * on at once. So let's try to break it up into small, bite-sized pieces so it's
 * understandable every step of the way and maybe we'll learn how to build more
 * complex programs out of smaller pieces.
 *
 * Since constructors, inheritence and prototypes are confusing concepts that aren't
 * absolutely necessary to get a working game of blackjack we'll avoid their use and
 * stick with using normal functions and basic data structures like objects and arrays.
 * We should never see the words `new` or `prototype` in our code.
 *
 * A few limitations our simplified version of blackjack. To trim down on complexity
 * our game won't have some features that are present in games of blackjack you'd see
 * in a casino. For example, we don't have any betting. This is just a win/lose/draw
 * game. Because there's no concept of money, we won't have insurance nor double
 * down. We'll forget about split for the time being, but we could add it later as
 * an example of how to modify an existing app (which is something a professional
 * developer spends 99% of their time doing). We also won't have shoes. Just one deck.
 */

/**
 * The first piece we'll need is a card since blackjack is obviously is a card game.
 * Let's create a function that will create a new object.
 *
 * What does a card have? Well, the obvious answer is rank and suit. For example, the
 * 8 of spades. That's basically all a card has. So let's create a constructor that
 * takes in a rank and a suit.
 *
 * The function will be card like `createCard(8, '♠')` and it should return a new object
 * that has the keys `rank` and `suit`.
 */
function createCard(rank, suit) {
    // TODO: fill me in
}

/**
 * Our game needs a deck of cards. It should contain 52 cards like a standard deck
 * with Ace, 2-10, Jack, Queen & King cards for all 4 suits. Be sure to create the
 * cards through the createCard function.
 *
 * Since a deck is just a list of cards, we can use Javascript's Array object.
 *
 * The function return a new array filled with the 52 cards of a standard deck.
 */
function createDeck() {
    // fill me in
}

/**
 * Now that we have a card what else do we need? Well, blackjack players don't have just
 * one card. They have multiple cards at once which is typically card their "hand".
 *
 * Since a hand is just a list of cards, we can use Javascript's Array object as a hand.
 *
 * The function creates a new, empty array. That's it. We can add cards to the
 * hand later.
 */
function createHand(cards) {
    // TODO: fill me in
}

/**
 * Hands are held by somebody so let's write a function that will create a player.
 * What properties does a player have? Well, they need a hand or else they can't play.
 * They can contain other nice but not strictly necessary information like a name.
 * We'll skip for now.
 *
 * The function creates a new object with a `hand` key.
 */
function createPlayer(hand) {
    // TODO: fill me in
}

/**
 * How about a dealer? Well, what does a dealer have that a player doesn't? Nothing,
 * really. Yes, you don't want to show the dealer's first card to the player but that's
 * a *behavior* difference. In terms of data, a dealer and a player are exactly the same.
 *
 * If we _really_ want to think of dealers as different from players we can still
 * create a function to create a dealer. Since a dealer will produce the exact same
 * object as a player why don't we just reuse the createPlayer function!
 */
var createDealer = createPlayer;

/*
 * We now have all the data we need that makes up a blackjack game. You may thinking,
 * "Wait a minute. What about the total of the hands? What about the winner?" You are
 * correct that we don't have *explicit* versions of this data, but couldn't you compute
 * the total from the player's (or dealer's) hand? Couldn't you determine the winner
 * by comparing the totals of the player and dealer? Yes! We just need to do a little
 * of work to get at those values.
 *
 * These data that are computed from other data are *dependent* on that other data.
 * Just like in 9th grade algebra we our functions have independent variables
 * (card, hand) and dependent variables (total, winner) that are computed from the
 * independent variables.
 *
 * We should avoid passing around dependent data around or saving it long term use since
 * their values can become out of sync from their independent variables and that would
 * be bad. The true value comes from the indenpendent variables so we should compute
 * the dependent data whenever we need them.
 *
 * On that note, let's create some functions to compute our dependent data.
 */

/**
 * Like we mentioned above, we need to know the total of hand. This funciton computes
 * the highest possible total a hand can have. If the hand has an ace and treating
 * it as an 11 keeps the total under 21 then we'll treat it as 11. Otherwise, it's
 * treated as 1.
 *
 * For example: A hand of (10, hearts) and (Ace, diamonds) will return 21 while a hand
 * of (2, clubs), (Jack, spades), (Ace, hearts) will return 13.
 */
function handTotal(hand) {
    // TODO: fill me in
}

/**
 * Since the handTotal function doesn't tell us whether totals like 16 or 17 are "soft"
 * or "hard" we'll need a separate function to determine that. This function returns
 * true if a hand is soft. Cards that contain no aces will always return false since
 * they can never be soft.
 *
 * For example: A hand (5, spades) and (Ace, clubs) returns true but a hand
 * (King, clubs), (9, diamonds), (Ace, hearts) return false.
 */
function isSoft(hand) {
    // TODO: fill me in
}

/**
 * The last piece of data we need to compute is who's the winner. Since there can be
 * no winner in blackjack (a "push") we need to return 3 possible values: a value to
 * represent the player winner, a value for the dealer winning and a value for a push.
 * What should those values be? We can pick three arbitrary values to represent each
 * state. For example, 1, 2, and 3 could represent the three possible results but those
 * values have nothing to do with our job of determining a winner.
 *
 * How about we create variables called PLAYER_WINS, DEALER_WINS and PUSH with random
 * values saved in the variables (so long as the values are different). Then when we
 * return a result or try to determine the winner can compare the result to these
 * variables. That way our code will always say something meaningful like:
 * if (determineWinner(player, dealer) == PLAYER_WINS) ...
 * That makes a lot more sense than a random number.
 *
 * This function returns PLAYER_WINS if the player has a greater total, DEALER_WINS if
 * dealer has a greater total or PUSH if the total are equal. Remember to define the
 * variables PLAYER_WINS, DEALER_WINS and PUSH!
 */
function determineWinner(player, dealer) {
    // TODO: fill me in
}

/*
 * With the basic game functions defined we can move to functions to interact with the
 * user. Since we're writing a game, we will have a human player that we need to
 * communicate with. We need to provide them with information like their hand and the
 * dealer's hand. We also need to tell them the winner after they decide to hold. We
 * also need to ask them a question: hit or hold?
 *
 * Let's write functions to take care of these interactions for us.
 */

/**
 * Because this tutorial focuses on Javascript, I am going to give you the function
 * showPlayerHand. This function does a lot of HTML manipulation that is out of the
 * scope of this tutorial.
 *
 * The showPlayerHand takes in one argument (the player's hand) and displays all cards
 * the user. If the player's hand changes, be sure to call this method again so the
 * user can see the update.
 */
// showPlayerHand already exists. Use it!

/**
 * Just like the showPlayerHand function, the showDealerHand function will be given to
 * you.
 *
 * The showDealerHand works just like the showPlayerHand except the first card is hidden
 * from the user.The will see an blank card. Again, be sure to call this method again
 * after the dealer's hand changes.
 */
// showDealerHand already exists. Use it!

/**
 * The game is over and there's a winner (or not). This function displays a message
 * to the user to tell them whether they won, lost or pushed.
 *
 * Extra credit: You can extend this message to also ask them if they want to play again.
 */
function showGameOverMessage(message) {
    // TODO: fill me in
}

/**
 * This function prompts the user with a question: "Hit or hold?" The user can choose
 * either. The function returns the decision the user chose.
 *
 * It will probably be useful to create constant variables CHOICE_HIT and CHOICE_STAY
 * so the code makes sense when you read it.
 */
function askPlayerToHitOrStay() {
    // TODO: fill me in
}

/**
 * This function returns true if the the dealer should hit and returns false if the
 * dealer shouldn't.
 */
function shouldDealerHit(hand) {
    // TODO: fill me in
}

/**
 * When dealing out cards we need to pick a random card from the deck. The function
 * picks a random card out of the deck argument and returns it. It will also remove
 * the card from the deck. After calling this function the deck will have one fewer
 * card in it.
 */
function getRandomCard(deck) {
    // TODO: fill me in
}

/*
 * That's it, those are the utility functions we define ahead of time. The game may
 * require--or benefit from--more utility methods so feel free to write more when
 * the need arises.
 *
 * Will still need to define at least one more function: the function that starts the
 * game.
 */

/**
 * This function is called when the "New game" button is pressed on the web page.
 *
 * This function kicks off a new game. It creates a new deck, new player, new dealer
 * and their respective hands. It will then deal out the cards and ask the player
 * to hit or stay until they are content or a winner has been determined. You know,
 * it should play a game of blackjack.
 */
function newGame() {
    // TODO: fill me in
}
