import * as actionTypes from './actionTypes';

export const addUserAnswer = (userAnswer) => {
  return {
    type: actionTypes.ADD_USER_ANSWER,
    userAnswer
  };
};

export const resetQuiz = () => {
  return {
    type: actionTypes.RESET_QUIZ,
  };
};
