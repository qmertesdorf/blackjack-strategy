import React from "react";
import { determineQuestionSetFromCardData } from "./gameplayFunctions";
import { SPLITTING, CHOICES } from "./constants";

export function QuestionSet({ cardOne, cardTwo }) {
  const questionSet = determineQuestionSetFromCardData(
    cardOne,
    cardTwo
  );

  const QuestionsComponent = () => getComponentFromQuestionSet(questionSet)
  return (
    <div className="question-set-container">
    <QuestionsComponent/>
  </div>
  )
}

function getComponentFromQuestionSet(questionSet) {
  if (questionSet === SPLITTING) {
    return <SplittingQuestions />;
  } else if (questionSet === CHOICES) {
    return <ChoicesQuestions />;
  }
}

function SplittingQuestions() {
  return (
    <ul>
      <li>Split</li>
      <li>Don't split</li>
      <li>Split, but only if "Double After Split" is offered.</li>
    </ul>
  );
};

function ChoicesQuestions() {
  return (
    <ul>
      <li>Hit</li>
      <li>Stand</li>
      <li>Double Down, then hit</li>
      <li>Double Down, then stand</li>
    </ul>
  );
};
