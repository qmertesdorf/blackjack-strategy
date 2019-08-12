import { ScoreDisplay } from "./ScoreDisplay";
import React from "react";
import {
  generateCard,
  determineQuestionTypeFromCardData,
  determineCorrectAnswer
} from "./gameplayFunctions";
import { DealerHand } from "./DealerHand";
import PlayerHand from "./PlayerHand";
import { QuestionType } from "./QuestionType";

export class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardOne: generateCard(),
      cardTwo: generateCard(),
      dealerCard: generateCard(),
      totalScore: 0,
      totalQuestionCount: 0
    };
  }
  newHand = () => {
    this.incrementTotalQuestionCount();
    this.setState({
      cardOne: generateCard(),
      cardTwo: generateCard(),
      dealerCard: generateCard()
    });
  };

  checkIfCorrect = choiceId => {
    const { cardOne, cardTwo, dealerCard } = this.state;
    const questionType = determineQuestionTypeFromCardData(cardOne, cardTwo);
    const correctAnswerId = determineCorrectAnswer(
      cardOne,
      cardTwo,
      dealerCard,
      questionType
    );
    if (choiceId === correctAnswerId) {
      this.incrementScoreCount();
    }
    this.newHand();
  };

  incrementScoreCount = () => {
    this.setState({ totalScore: this.state.totalScore + 1 });
  };
  //way to do state updates based on previous state (since state updates are always asyc)
  incrementTotalQuestionCount = () => {
    this.setState((prevState) => ({
      totalQuestionCount: prevState.totalQuestionCount + 1,
      //totalScore: prevState.totalScore + 1
    }));
  };
  //setState takes a second argument, which is a callback function (not typically used, probably don't use)

  render() {
    const {
      incrementScoreCount,
      incrementTotalQuestionCount,
      newHand,
      checkIfCorrect,
      state
    } = this;
    const {
      cardOne,
      cardTwo,
      dealerCard,
      totalQuestionCount,
      totalScore
    } = state;
    const questionType = determineQuestionTypeFromCardData(cardOne, cardTwo);
    return (
      <div className="game-board">
        <DealerHand {...{ card: dealerCard }} />
        <PlayerHand
          {...{
            cardOne,
            cardTwo
          }}
        />
        <ScoreDisplay
          {...{
            totalScore,
            totalQuestionCount
          }}
        />
        <QuestionType
          {...{
            incrementScoreCount,
            incrementTotalQuestionCount,
            questionType,
            checkIfCorrect,
            newHand
          }}
        />
      </div>
    );
  }
}
