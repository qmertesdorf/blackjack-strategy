import React from "react";

export const ScoreDisplay = props => {
  return (
    <div className="score-display">
      <h4>Total Questions: {props.totalQuestionCount}</h4>
      <h4>Correct Answers: {props.totalScore}</h4>
    </div>
  );
};
