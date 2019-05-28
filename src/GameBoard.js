import React from "react";
import {
  generateCardData,
  determineQuestionSetFromCardData,
  determineCorrectAnswer
} from "./gameplayFunctions";
import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOneData: generateCardData(),
      cardTwoData: generateCardData(),
      dealerCard: generateCardData()
    };
  }
  render() {
    const questionSet = determineQuestionSetFromCardData(this.state.cardOneData, this.state.cardTwoData);

    const correctAnswer = determineCorrectAnswer(
      this.state.cardOneData,
      this.state.cardTwoData,
      this.state.dealerCard,
      questionSet
    );
    console.log(this.state.cardOneData);
    return (
      <div className="gameboard">
        <DealerHand {...{ cardData: this.state.dealerCard }} />
        <PlayerHand {...{
          cardOneData: this.state.cardOneData,
          cardTwoData: this.state.cardTwoData
        }} />
      </div>
    );
  }
}


export default GameBoard;