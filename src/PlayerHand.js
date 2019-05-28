import React from "react";
import "./playerHand.scss";
import Card from "./Card";

const PlayerHand = ({cardOneData, cardTwoData}) => {
  console.log("PlayerHand is", cardOneData, cardTwoData)
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

export default PlayerHand;
