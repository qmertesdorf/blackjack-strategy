import React from "react";
import {
  generateCard,
  determineQuestionSetFromCardData,
  determineCorrectAnswer
} from "./gameplayFunctions";
import DealerHand from "./DealerHand";
import PlayerHand from "./PlayerHand";

export class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOne: generateCard(),
      cardTwo: generateCard(),
      dealerCard: generateCard()
    };
  };
  render() {
    const correctAnswer = determineCorrectAnswer(
      this.state.cardOne,
      this.state.cardTwo,
      this.state.dealerCard,
      // questionSet
    );
    return (
      <div className="game-board">
        <DealerHand {...{ card: this.state.dealerCard }} />
        <PlayerHand {...{
          cardOne: this.state.cardOne,
          cardTwo: this.state.cardTwo
        }} />
       {/* <QuestionSet /> */}
      </div>
    );
  };
};