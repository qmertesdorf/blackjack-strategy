import React from "react";
import { determineQuestionSetFromCardData } from "./gameplayFunctions";
import { SPLITTING, CHOICES } from "./constants";

function QuestionSet({cardOneData, cardTwoData}) {
  const questionSet = determineQuestionSetFromCardData(this.state.cardOneData, this.state.cardTwoData);

  
  // const questionsComponent = getComponentFromQuestionSet(questionSet) 
  
  
  return (
    <div className="question-set-container">

    </div>
  )
}

// function getComponentFromQuestionSet(questionSet) {
//   if (questionSet === SPLITTING) {
//     return <SplittingQuestions />
//   } else if (questionSet === CHOICES) {
//     return <ChoicesQuestions />
//   }
// }

// function SplittingQuestions()