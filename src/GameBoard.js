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
  };

  render() {
    const {incrementScoreCount, incrementTotalQuestionCount, newGame, state} = this;
    const {cardOne, cardTwo, dealerCard, totalQuestionCount, totalScore} = state;
    const questionSet = determineQuestionSetFromCardData(cardOne, cardTwo);

    const correctAnswerId = determineCorrectAnswer(
      cardOne,
      cardTwo,
      dealerCard,
      questionSet
    );
    
    
    return (
      <div className="game-board">
        <DealerHand {...{ card: dealerCard }} />
        <PlayerHand
          {...{
            cardOne: cardOne,
            cardTwo: cardTwo
          }}
        />
        <ScoreDisplay {...{
          totalScore: totalScore,
          totalQuestionCount: totalQuestionCount,
        }}/>
        <QuestionSet {...{
          incrementScoreCount: incrementScoreCount,
          incrementTotalQuestionCount: incrementTotalQuestionCount,
          correctAnswerId: correctAnswerId,
          questionSet: questionSet,
          newGame: newGame
        }}/>
      </div>
    );
  }
}
