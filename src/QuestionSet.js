import React from "react";
import { SPLITTING, CHOICES } from "./constants";

export function QuestionSet({ correctAnswerId, incrementScoreCount, questionSet, newGame }) {


  const checkIfCorrect = (choiceId) => {
    if (choiceId === correctAnswerId) {
      incrementScoreCount();
    }
    newGame();
  }

  return (
    <div className="question-set-container">
      {questionSet === SPLITTING
        && <SplittingQuestions {...{checkIfCorrect}}/>}
      {questionSet === CHOICES
        && <ChoicesQuestions {...{checkIfCorrect}}/>
      }
  </div>
  )
}



//How could this be done better?
function SplittingQuestions({checkIfCorrect}) {
  const choiceList = ["Split", "Don't split", 'Split, but only if "Double After Split" is offered.']
  return (
    <ul>
      <li onClick={() => checkIfCorrect(0)}>Split</li>
      <li onClick={() => checkIfCorrect(1)}>Don't split</li>
      <li onClick={() => checkIfCorrect(2)}>Split, but only if "Double After Split" is offered.</li>
    </ul>
  );
};

function ChoicesQuestions({checkIfCorrect}) {
  return (
    <ul>
      <li onClick={() => checkIfCorrect(0)}>Hit</li>
      <li onClick={() => checkIfCorrect(1)}>Stand</li>
      <li onClick={() => checkIfCorrect(2)}>Double Down, then hit</li>
      <li onClick={() => checkIfCorrect(3)}>Double Down, then stand</li>
    </ul>
  );
};
