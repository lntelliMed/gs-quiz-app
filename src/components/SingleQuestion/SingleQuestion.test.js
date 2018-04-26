import React from 'react';
import ReactDOM from 'react-dom';
import SingleQuestion from './SingleQuestion';

it('SingleQuestion component renders without crashing', () => {
    const question = {
        category: 'JavaScript',
        question: 'Is there HashMap data type in JasvaScript?'
    };
    const div = document.createElement('div');
    ReactDOM.render(<SingleQuestion question={question} />, div);
});
