import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Score from './Score';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('UserHome', () => {
  let scoreResult;
  let finalScore;
  let totalQuestions;

  beforeEach(() => {
    finalScore = 2;
    totalQuestions = 4;
    scoreResult = shallow(<Score score={finalScore} totalQuestions={totalQuestions} />);
  })

  it('Score component renders the score in an h2', () => {
    expect(scoreResult.find('h2').text()).to.be.equal('You were able to answer 2 questions out of 4! Your score is 50.00%');
  });

  it('Score component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Score score={finalScore} totalQuestions={totalQuestions} />, div);
});
})
