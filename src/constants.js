export const SUITS = {
  CLUBS: 0,
  DIAMONDS: 1,
  HEARTS: 2,
  SPADES: 3
};

//card types vs values
//get value for card type function*, or an obj mapping them
// export const values = {
//   ace: "A",
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
//   ten: 10,
//   jack: "J",
//   queen: "Q",
//   king: "K"
// }

export const VALUES = {
  A: "Ace",
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
  K: 10
};
//update structure to differentiate values from actual card types
//make function to extract values from card types
//get card value function, "get point value of card"

export const CHOICES = {
  HIT: 0,
  STAND: 1,
  DOUBLE_HIT: 2,
  DOUBLE_STAND: 3
};

export const SPLITTING = {
  NO_SPLIT: 0,
  SPLIT: 1,
  SPLIT_DAS: 2
};
