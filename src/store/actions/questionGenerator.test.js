import { expect } from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import * as actions from './index';
import questionsObject from '../../../data.json';

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe('thunk creators', () => {
  let store;
  let mockAxios;

  const initialState = { questions: null, error: null };

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = mockStore(initialState);
  })

  afterEach(() => {
    mockAxios.restore();
    store.clearActions();
  })

  describe('getQuestionList', () => {
    xit('eventually dispatches the SET_QUESTIONS action', () => {
      const fakeItems = questionsObject.questions;
      mockAxios.onGet('https://gs-quiz-app.firebaseio.com/questions.json').replyOnce(200, fakeItems);
      return store.dispatch(actions.initQuestions())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].type).to.be.equal('SET_QUESTIONS');
          expect(actions[0].user).to.be.deep.equal(fakeItems);
        })
    })
  })
})
