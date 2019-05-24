import { SUITS, VALUES, SPLITTING, CHOICES } from "./constants";
import React from "react";
import "./playerHand.scss";
import Card from "./Card";

const PlayerHand = () => {
  const cardOneData = generateCardData();
  const cardTwoData = generateCardData();
  const dealerCard = generateCardData();
  const questionSet = determineQuestionSetFromCardData();

  const correctAnswer = determineCorrectAnswer(cardOneData, cardTwoData, dealerCard, questionSet);
  // const questionAnswer;

  return (
    <div className="player-hand">
      <Card
        {...{
          suitId: cardOneData.suitId,
          value: cardOneData.value.cardValKey
        }}
      />
      <Card
        {...{
          suitId: cardTwoData.suitId,
          value: cardTwoData.value.cardValKey
        }}
      />
    </div>
  );
};

function generateCardData() {
  const suitId = Object.values(SUITS)[
    Math.floor(Math.random() * Object.values(SUITS).length)
  ];
  const cardValKey = Object.keys(VALUES)[
    Math.floor(Math.random() * Object.keys(VALUES).length)
  ];
  const cardValValue = VALUES[cardValKey];
  return {
    suitId: suitId,
    value: { cardValKey: cardValValue }
  };
}

function determineQuestionSetFromCardData(cardOne, cardTwo) {
  const cardOneValue = cardOne.value.cardValValue;
  const cardTwoValue = cardTwo.value.cardValValue;

  if (cardOneValue === cardTwoValue) {
    return SPLITTING;
  } else {
    return CHOICES;
  }

}

function determineCorrectAnswer(cardOne, cardTwo, dealerCard, questionSet) {
  if (questionSet === SPLITTING) {
    
  }
}

export default PlayerHand;
