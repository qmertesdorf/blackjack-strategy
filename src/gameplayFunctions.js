import { SUITS, VALUES, SPLITTING, CHOICES } from "./constants";
import { getRandomObjectValue } from "./utils";

export function generateCard() {
  //extract out random object value grabber
  const suitId = getRandomObjectValue(SUITS);
  const value = getRandomObjectValue(VALUES);

  return {
    suitId,
    value
  };
}

export function determineQuestionTypeFromCardData(cardOne, cardTwo) {
  if (cardOne.value === cardTwo.value) {
    return SPLITTING;
  } else {
    return CHOICES;
  }
}

export function determineCorrectAnswer(
  cardOne,
  cardTwo,
  dealerCard,
  questionType
) {
  const cardOneValue = cardOne.value;
  const cardTwoValue = cardTwo.value;
  const dealerCardValue = dealerCard.value;

  if (questionType === SPLITTING) {
    return determineCorrectSplittingAnswer(cardOneValue, dealerCardValue);
  } else if (questionType === CHOICES) {
    return determineCorrectNonSplittingAnswer(
      cardOneValue,
      cardTwoValue,
      dealerCardValue
    );
  }
}

function determineCorrectSoftTotalAnswer(nonAce, dealerCard) {
  if (nonAce === 10 || nonAce === 9) {
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
  if (cardHardTotal <= 8) {
    return CHOICES.HIT;
  }
}

function determineCorrectNonSplittingAnswer(cardOne, cardTwo, dealerCard) {
  if (cardOne === VALUES.A) {
    return determineCorrectSoftTotalAnswer(cardTwo, dealerCard);
  }
  if (cardTwo === VALUES.A) {
    return determineCorrectSoftTotalAnswer(cardOne, dealerCard);
  } else {
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
