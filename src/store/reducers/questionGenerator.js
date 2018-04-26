import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  questions: null,
  error: null
};

const setQuestions = (state, action) => {
  return updateObject(state, {
    questions: action.questions,
    error: null
  });
};

const fetchQuestionsFailed = (state, action) => {
  return updateObject(state, { error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_QUESTIONS: return setQuestions(state, action);
    case actionTypes.FETCH_QUESTIONS_FAILED: return fetchQuestionsFailed(state, action);
    default: return state;
  }
}

export default reducer;
