import React from "react";
import { SPLITTING, CHOICES } from "./constants";
import "./questionType.scss";

export function QuestionType({ checkIfCorrect, questionType }) {
  return (
    <div className="question-set-container">
      {questionType === SPLITTING && (
        <SplittingQuestions {...{ checkIfCorrect }} />
      )}
      {questionType === CHOICES && <ChoicesQuestions {...{ checkIfCorrect }} />}
    </div>
  );
}

//Refactor to use Array
function SplittingQuestions({ checkIfCorrect }) {
  // const choiceList = [
  //   "Split",
  //   "Don't split",
  //   'Split, but only if "Double After Split" is offered.'
  // ];
  return (
    <ul className="answers-list">
      <li onClick={() => checkIfCorrect(0)}>Split</li>
      <li onClick={() => checkIfCorrect(1)}>Don't split</li>
      <li onClick={() => checkIfCorrect(2)}>
        Split, but only if "Double After Split" is offered.
      </li>
    </ul>
  );
}

function ChoicesQuestions({ checkIfCorrect }) {
  return (
    <ul className="answers-list">
      <li onClick={() => checkIfCorrect(0)}>Hit</li>
      <li onClick={() => checkIfCorrect(1)}>Stand</li>
      <li onClick={() => checkIfCorrect(2)}>Double Down, then hit</li>
      <li onClick={() => checkIfCorrect(3)}>Double Down, then stand</li>
    </ul>
  );
}
