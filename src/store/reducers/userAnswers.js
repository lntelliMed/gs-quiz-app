import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  userAnswers: [],
  finalScore: 0
};

const addUserAnswer = (state, action) => {
  let newAnswers = null;
  if (!state.userAnswers) {
    newAnswers = [action.userAnswer];
  } else if (state.userAnswers.filter(answer => answer.questionId === action.userAnswer.questionId).length > 0) {
    newAnswers = state.userAnswers.map(answer => {
      if(answer.questionId === action.userAnswer.questionId) {
        let newEntry = { questionId: answer.questionId, userScore: action.userAnswer.userScore };
        return newEntry;
      } else {
        return answer;
      }
    });
  } else {
    newAnswers = [...state.userAnswers, action.userAnswer]
  }

  let newScore = 0;
  for (let question of newAnswers) {
    newScore += question.userScore;
  }

  return updateObject(state, { userAnswers: newAnswers, finalScore: newScore });
};

const resetQuiz = (state, action) => {
  return updateObject(state, { userAnswers: [], finalScore: 0 });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER_ANSWER: return addUserAnswer(state, action);
    case actionTypes.RESET_QUIZ: return resetQuiz(state, action);
    default: return state;
  }
}

export default reducer;
