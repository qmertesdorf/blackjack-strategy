import React from "react";
import "./playerHand.scss";
import Card from "./Card";

const PlayerHand = ({cardOne, cardTwo}) => {
  console.log("PlayerHand is", cardOne, cardTwo)
  // const questionAnswer;

  return (
    <div className="hand player-hand">
      <Card
        {...{
          suitId: cardOne.suitId,
          value: cardOne.value
        }}
      />
      <Card
        {...{
          suitId: cardTwo.suitId,
          value: cardTwo.value
        }}
      />
    </div>
  );
};

export default PlayerHand;
