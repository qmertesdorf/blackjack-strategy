import React from "react";
import {
  generateCard,
  determineQuestionSetFromCardData,
  determineCorrectAnswer
} from "./gameplayFunctions";
import { DealerHand } from "./DealerHand";
import PlayerHand from "./PlayerHand";
import { QuestionSet } from "./QuestionSet";

export class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOne: generateCard(),
      cardTwo: generateCard(),
      dealerCard: generateCard()
    };
  }
  render() {
    console.log("cardOne is...", this.state.cardOne);
    const correctAnswer = determineCorrectAnswer(
      this.state.cardOne,
      this.state.cardTwo,
      this.state.dealerCard,
      determineQuestionSetFromCardData(this.state.cardOne, this.state.cardTwo)
    );
    console.log("answer is ", correctAnswer)
    return (
      <div className="game-board">
        <DealerHand {...{ card: this.state.dealerCard }} />
        <PlayerHand
          {...{
            cardOne: this.state.cardOne,
            cardTwo: this.state.cardTwo
          }}
        />
        <QuestionSet {...{
          cardOne: this.state.cardOne,
          cardTwo: this.state.cardTwo
        }}/>
      </div>
    );
  }
}
