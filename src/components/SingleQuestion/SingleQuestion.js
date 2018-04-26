import React from 'react';
import classes from './SingleQuestion.css';

const singleQuestion = (props) => {
    return (
        <div className={classes.SingleQuestion}>
            <h2>{props.question.category}</h2>
            <br />
            <h3>{props.question.question}</h3>
        </div>
    )
};

export default singleQuestion;
