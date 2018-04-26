import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import QuestionGenerator from './QuestionGenerator';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import questionGeneratorReducer from '../../store/reducers/questionGenerator';
import userAnswersReducer from '../../store/reducers/userAnswers';

const rootReducer = combineReducers({
  questionGenerator: questionGeneratorReducer,
  userAnswers: userAnswersReducer
});

const store = createStore(rootReducer,(applyMiddleware(thunk)));

it('QuestionGenerator component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><QuestionGenerator /></Provider>, div);
});


