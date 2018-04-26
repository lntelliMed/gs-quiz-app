import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './App';
import questionGeneratorReducer from './store/reducers/questionGenerator';
import userAnswersReducer from './store/reducers/userAnswers';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  questionGenerator: questionGeneratorReducer,
  userAnswers: userAnswersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(createLogger(), thunk)));

const app = (
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
