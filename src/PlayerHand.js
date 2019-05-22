import { SUITS, values } from "./constants";
import React from "react";
import "./playerHand.scss";
import Card from "./Card";

const PlayerHand = () => {
  const cardOneData = generateCardData();
  const cardTwoData = generateCardData();

  

  return (
    <div className="player-hand">
      <Card {...cardOneData} />
      <Card {...cardTwoData} />
    </div>
  );
};

function generateCardData() {
  const suitId = Object.values(SUITS)[
    Math.floor(Math.random() * Object.values(SUITS).length)
  ];
  const value = Object.values(values)[
    Math.floor(Math.random() * Object.values(values).length)
  ];
  return {
    suitId: suitId,
    value: value
  };
}

function getCorrectAnswerFromCardData(cardOne, cardTwo) {
  const cardOneValue = cardOne.value;
  const cardTwoValue = cardTwo.value;


}

export default PlayerHand;
