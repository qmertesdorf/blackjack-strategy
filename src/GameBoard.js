import { ScoreDisplay } from "./ScoreDisplay";
import React, { useState } from "react";
import {
  generateCard,
  determineQuestionTypeFromCardData,
  determineCorrectAnswer
} from "./gameplayFunctions";
import { DealerHand } from "./DealerHand";
import PlayerHand from "./PlayerHand";
import { QuestionType } from "./QuestionType";

export function GameBoard() {
  //Hooks implementation
  const [cardOne, setCardOne] = useState(generateCard());
  const [cardTwo, setCardTwo] = useState(generateCard());
  const [dealerCard, setDealerCard] = useState(generateCard());
  const [totalScore, setTotalScore] = useState(0);
  const [totalQuestionCount, setTotalQuestionCount] = useState(0);

  const newHand = () => {
    setTotalQuestionCount(totalQuestionCount + 1);
    setCardOne(generateCard());
    setCardTwo(generateCard());
    setDealerCard(generateCard());
  };

  const checkIfCorrect = choiceId => {
    const questionType = determineQuestionTypeFromCardData(cardOne, cardTwo);
    //extract into another function that is more specialized - return "true" or "false"
    const correctAnswerId = determineCorrectAnswer(
      cardOne,
      cardTwo,
      dealerCard,
      questionType
    );
    if (choiceId === correctAnswerId) {
      setTotalScore(totalScore + 1);
    }
    newHand();
  };

  //way to do state updates based on previous state (since state updates are always asyc)
  // incrementTotalQuestionCount = () => {
  //   this.setState((prevState) => ({
  //     totalQuestionCount: prevState.totalQuestionCount + 1,
  //     //totalScore: prevState.totalScore + 1
  //   }));
  // };

  //setState takes a second argument, which is a callback function (not typically used, probably don't use)
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
          questionType,
          checkIfCorrect,
        }}
      />
    </div>
  );
}
