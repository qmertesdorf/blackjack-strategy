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
    

    const correctAnswer = determineCorrectAnswer(
      this.state.cardOneData,
      this.state.cardTwoData,
      this.state.dealerCard,
      questionSet
    );


    return (
      <div className="gameboard">
        <DealerHand {...{ cardData: this.state.dealerCard }} />
        <PlayerHand {...{
          cardOneData: this.state.cardOneData,
          cardTwoData: this.state.cardTwoData
        }} />
       <QuestionSet /> 
      </div>
    );
  }
}


export default GameBoard;