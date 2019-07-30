import { ScoreDisplay } from './ScoreDisplay';
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
      dealerCard: generateCard(),
      totalScore: 0,
      totalQuestionCount: 0
    };
  }
  newGame = () => {
    this.incrementTotalQuestionCount();
    this.setState({
      cardOne: generateCard(),
      cardTwo: generateCard(),
      dealerCard: generateCard()
    });
  }

  incrementScoreCount = () => {
    this.setState({totalScore: this.state.totalScore + 1})
  }

  incrementTotalQuestionCount = () => {
    this.setState({totalQuestionCount: this.state.totalQuestionCount + 1})
  }

  render() {
    const questionSet = determineQuestionSetFromCardData(this.state.cardOne, this.state.cardTwo)
    const correctAnswerId = determineCorrectAnswer(
      this.state.cardOne,
      this.state.cardTwo,
      this.state.dealerCard,
      questionSet
    );
    
    return (
      <div className="game-board">
        <DealerHand {...{ card: this.state.dealerCard }} />
        <PlayerHand
          {...{
            cardOne: this.state.cardOne,
            cardTwo: this.state.cardTwo
          }}
        />
        <ScoreDisplay {...{
          totalScore: this.state.totalScore,
          totalQuestionCount: this.state.totalQuestionCount,
        }}/>
        <QuestionSet {...{
          incrementScoreCount: this.incrementScoreCount,
          incrementTotalQuestionCount: this.incrementTotalQuestionCount,
          correctAnswerId: correctAnswerId,
          questionSet: questionSet,
          newGame: this.newGame
        }}/>
      </div>
    );
  }
}
