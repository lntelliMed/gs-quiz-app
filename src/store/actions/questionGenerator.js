import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setQuestions = (questions) => {
  return {
    type: actionTypes.SET_QUESTIONS,
    questions
  };
};

export const fetchQuestionsFailed = (error) => {
  return {
    type: actionTypes.FETCH_QUESTIONS_FAILED,
    error
  };
};

export const initQuestions = () => {
  return dispatch => {
    axios.get('https://gs-quiz-app.firebaseio.com/questions.json')
      .then(response => {
        dispatch(setQuestions(response.data));
      })
      .catch(error => {
        dispatch(fetchQuestionsFailed(error));
      });
  }
};
