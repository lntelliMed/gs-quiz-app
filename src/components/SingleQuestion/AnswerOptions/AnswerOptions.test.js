import React from 'react';
import ReactDOM from 'react-dom';
import AnswerOptions from './AnswerOptions';
import questionsObject from '../../../../data.json';

// const answers = questionsObject.questions.filter(question => (question.id === 1))[0].answers;
const answers = questionsObject.questions.find(question => question.id === 1).answers;

it('AnswerOptions component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AnswerOptions answers={answers} />, div);
});
