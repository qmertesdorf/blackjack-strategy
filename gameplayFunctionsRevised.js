function determineIfStand(cardOne, cardTwo, dealerCard) {
  if (cardOne === VALUES.A || cardTwo === VALUES.A) {
    let nonAce;
    if (cardOne === VALUES.A) {
      nonAce = cardTwo;
    } else if (cardTwo === VALUES.A) {
      nonAce = cardOne;
    }
    if (
      nonAce === 9 ||
      (nonAce === 8 && dealerCard !== 6) ||
      (nonAce === 7 && (dealerCard === 7 || dealerCard === 8))
    ) {
      return true;
    }
  } else {
    const cardHardTotal = cardOne + cardTwo;
    if (
      cardHardTotal === 17 ||
      ([16, 15, 14, 13].includes(cardHardTotal) &&
        [2, 3, 4, 5, 6].includes(dealerCard)) ||
      (cardHardTotal === 12 && [4, 5, 6].includes(dealerCard))
    ) {
      return true;
    }
  }
}

function determineIfHit(cardOne, cardTwo, dealerCard) {
  if (cardOne === VALUES.A || cardTwo === VALUES.A) {
    let nonAce;
    if (cardOne === VALUES.A) {
      nonAce = cardTwo;
    } else if (cardTwo === VALUES.A) {
      nonAce = cardOne;
    }
    if (
      (nonAce === 7 && [9, 10, VALUES.A].includes(dealerCard)) ||
      (nonAce === 6 && ![3, 4, 5, 6].includes(dealerCard)) ||
      ((nonAce === 5 || nonAce === 4) && ![4, 5, 6].includes(dealerCard)) ||
      ((nonAce === 3 || nonAce === 2) && ![5, 6].includes(dealerCard))
    ) {
      return true;
    } else {
      const cardHardTotal = cardOne + cardTwo;
      if (
        ([16, 15, 14, 13].includes(cardHardTotal) &&
          ![2, 3, 4, 5, 6].includes(dealerCard)) ||
        (cardHardTotal === 12 && ![4, 5, 6].includes(dealerCard)) ||
        (cardHardTotal === 10 && [10, VALUES.A].includes(dealerCard)) ||
        (cardHardTotal === 9 && ![3, 4, 5, 6].includes(dealerCard)) ||
        cardHardTotal === 8
      ) {
        return true;
      }
    }
  }
}
