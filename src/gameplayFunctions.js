import { SUITS, VALUES, SPLITTING, CHOICES } from "./constants";

export function generateCard() {
  //use actually data, not the values of anything;
  const suitId = Object.values(SUITS)[
    Math.floor(Math.random() * Object.values(SUITS).length)
  ];
  console.log(suitId);
  const cardValKey = Object.keys(VALUES)[
    Math.floor(Math.random() * Object.keys(VALUES).length)
  ];
  const cardValValue = VALUES[cardValKey];
  return {
    suitId: suitId,
    value: { cardValKey: cardValValue }
  };
}

export function determineQuestionSetFromCardData(cardOne, cardTwo) {
  const cardOneValue = cardOne.value.cardValKey;
  const cardTwoValue = cardTwo.value.cardValKey;
  
  console.log(cardOneValue + " " + cardTwoValue);
  if (cardOneValue === cardTwoValue) {
    return SPLITTING;
  } else {
    return CHOICES;
  }
}

export function determineCorrectAnswer(cardOne, cardTwo, dealerCard, questionSet) {
  const ace = VALUES.A;
  const cardOneValue = cardOne.value.cardValKey;
  console.log(questionSet);
  const cardTwoValue = cardTwo.value.cardValKey;
  const dealerCardValue = dealerCard.value.cardValKey;
  console.log("SPLITTING?", questionSet === SPLITTING)
  console.log("CHOICES?", questionSet === CHOICES)

  if (questionSet === SPLITTING) {
    return determineCorrectSplittingAnswer(cardOneValue, dealerCardValue);
  } else if (questionSet === CHOICES) {
    return determineCorrectNonSplittingAnswer(
      cardOneValue,
      cardTwoValue,
      dealerCardValue
    );
  }
}

// export const CHOICES = {
//   HIT: 0,
//   STAND: 1,
//   DOUBLE_HIT: 2,
//   DOUBLE_STAND: 3
// }

function determineCorrectSoftTotalAnswer(nonAce, dealerCard) {
  if (nonAce === 9) {
    return CHOICES.STAND;
  }
  if (nonAce === 8) {
    if (dealerCard === 6) {
      return CHOICES.DOUBLE_STAND;
    } else {
      return CHOICES.STAND;
    }
  }
  if (nonAce === 7) {
    if (dealerCard === 7 || dealerCard === 8) {
      return CHOICES.STAND;
    } else if ([9, 10, VALUES.A].includes(dealerCard)) {
      return CHOICES.HIT;
    } else {
      return CHOICES.DOUBLE_STAND;
    }
  }
  if (nonAce === 6) {
    if ([3, 4, 5, 6].includes(dealerCard)) {
      return CHOICES.DOUBLE_HIT;
    } else {
      return CHOICES.HIT;
    }
  }
  if (nonAce === 5 || nonAce === 4) {
    if ([4, 5, 6].includes(dealerCard)) {
      return CHOICES.DOUBLE_HIT;
    } else {
      return CHOICES.HIT;
    }
  }
  if (nonAce === 3 || nonAce === 2) {
    if ([5, 6].includes(dealerCard)) {
      return CHOICES.DOUBLE_HIT;
    } else {
      return CHOICES.HIT;
    }
  }
}

function determineCorrectHardTotalAnswer(cardOne, cardTwo, dealerCard) {
  const cardHardTotal = cardOne + cardTwo;
  console.log(cardHardTotal);
  if (cardHardTotal >= 17) {
    return CHOICES.STAND;
  }
  if ([16, 15, 14, 13].includes(cardHardTotal)) {
    if ([2, 3, 4, 5, 6].includes(dealerCard)) {
      return CHOICES.STAND;
    } else {
      return CHOICES.HIT;
    }
  }
  if (cardHardTotal === 12) {
    if ([4, 5, 6].includes(dealerCard)) {
      return CHOICES.STAND;
    } else {
      return CHOICES.HIT;
    }
  }
  if (cardHardTotal === 11) {
    return CHOICES.DOUBLE_HIT;
  }
  if (cardHardTotal === 10) {
    if ([10, VALUES.A].includes(dealerCard)) {
      return CHOICES.HIT;
    } else {
      return CHOICES.DOUBLE_HIT;
    }
  }
  if (cardHardTotal === 9) {
    if ([3, 4, 5, 6].includes(dealerCard)) {
      return CHOICES.DOUBLE_HIT;
    } else {
      return CHOICES.HIT;
    }
  }
  if (cardHardTotal === 8) {
    return CHOICES.HIT;
  }
}

function determineCorrectNonSplittingAnswer(cardOne, cardTwo, dealerCard) {
  if (cardOne === VALUES.A) {
    return determineCorrectSoftTotalAnswer(cardTwo, dealerCard);
  }
  if (cardTwo === VALUES.A) {
    return determineCorrectSoftTotalAnswer(cardOne, dealerCard);
  }
  else {
    return determineCorrectHardTotalAnswer(cardOne, cardTwo, dealerCard);
  }
}

function determineCorrectSplittingAnswer(pair, dealerCard) {
  const ace = VALUES.A;
  if (pair === ace) {
    return SPLITTING.SPLIT;
  }
  if (pair === 10) {
    return SPLITTING.NO_SPLIT;
  }
  if (pair === 9) {
    if ([7, 10, ace].includes(dealerCard)) {
      return SPLITTING.NO_SPLIT;
    } else {
      return SPLITTING.SPLIT;
    }
  }
  if (pair === 8) {
    return SPLITTING.SPLIT;
  }
  if (pair === 7) {
    if ([8, 9, 10, ace].includes(dealerCard)) {
      return SPLITTING.NO_SPLIT;
    } else {
      return SPLITTING.SPLIT;
    }
  }
  if (pair === 6) {
    if (dealerCard === 2) {
      return SPLITTING.SPLIT_DAS;
    } else if ([3, 4, 5, 6].includes(dealerCard)) {
      return SPLITTING.SPLIT;
    } else {
      return SPLITTING.NO_SPLIT;
    }
  }
  if (pair === 5) {
    return SPLITTING.NO_SPLIT;
  }
  if (pair === 4) {
    if (dealerCard === 5 || dealerCard === 6) {
      return SPLITTING.SPLIT_DAS;
    } else {
      return SPLITTING.NO_SPLIT;
    }
  }
  if (pair === 3 || pair === 2) {
    if (dealerCard === 2 || dealerCard === 3) {
      return SPLITTING.SPLIT_DAS;
    } else if ([4, 5, 6, 7].includes(dealerCard)) {
      return SPLITTING.SPLIT;
    } else {
      return SPLITTING.NO_SPLIT;
    }
  }
}