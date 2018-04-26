import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import questionGeneratorReducer from './store/reducers/questionGenerator';
import userAnswersReducer from './store/reducers/userAnswers';

const rootReducer = combineReducers({
  questionGenerator: questionGeneratorReducer,
  userAnswers: userAnswersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

it('App component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(app, div);
});
