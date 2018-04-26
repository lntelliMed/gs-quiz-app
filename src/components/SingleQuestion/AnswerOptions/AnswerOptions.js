import React from 'react';
import classes from './AnswerOptions.css';

const answerOptions = (props) => {
    return (
        <div>
            {
                props.answers.map(answer => {
                    return (
                        <button key={answer.id} className={classes.AnswerOptions} onClick={() => props.answerChosenHandler(answer.score)}>
                            {answer.option}
                        </button>
                    )
                })
            }
        </div>
    );
};

export default answerOptions;
