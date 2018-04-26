import React from 'react';
import classes from './Score.css';

const score = (props) => {
    const scorePercentage = ((props.score / props.totalQuestions) * 100).toFixed(2);
    return (
      <div>
        <h2 className={classes.Score}>
          You were able to answer {props.score} questions out of {props.totalQuestions}! Your score is {scorePercentage}%
        </h2>
        <button onClick={() => props.reset() } className={classes.ResetButton}>Try Again</button>
      </div>
    )
};

export default score;
