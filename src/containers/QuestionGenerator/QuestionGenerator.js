import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './QuestionGenerator.css';
import SingleQuestion from '../../components/SingleQuestion/SingleQuestion';
import AnswerOptions from '../../components/SingleQuestion/AnswerOptions/AnswerOptions';
import Score from '../../components/Score/Score';
import * as actions from '../../store/actions';

class QuestionGenerator extends Component {
  state = {
      currentQuestionId: 1,
      quizEnded: false
  }

  componentDidMount () {
    this.props.onInitQuestions();
  }

  answerChosenHandler = (questionScore) => {
    this.props.onUserAnswer(this.state.currentQuestionId, questionScore);
    const newQuestionId = this.state.currentQuestionId + 1;
    const quizEnded = newQuestionId > this.props.questions.length ? true : false;
    this.setState({
      currentQuestionId: newQuestionId,
      quizEnded
    });
  }

  goBack = () => {
    if (this.state.currentQuestionId > 1) {
      this.setState({
        currentQuestionId: this.state.currentQuestionId - 1
      });
    }
  }

  resetQuiz = () => {
    this.setState({
      currentQuestionId: 1,
      quizEnded: false
    });
    this.props.onResetQuiz();
  }

  render() {
    let questionPage = <p>Questions are loading. Please wait!</p>;

    if (this.props.questions) {
      let singleQuestion = null;
      let answerOptions = null;
      let backButton = null;
      let score = null;
      const currentQuestion = this.props.questions.find(question => question.id === this.state.currentQuestionId);

      if(!this.state.quizEnded) {
        const possibleAnswers = this.props.questions.find(question => question.id === this.state.currentQuestionId).answers;
        singleQuestion = <SingleQuestion question={currentQuestion} />;
        answerOptions = <AnswerOptions answers={possibleAnswers}
                            answerChosenHandler={this.answerChosenHandler} />;
        if (this.state.currentQuestionId !== 1) {
          backButton = <button className={classes.BackButton} onClick={() => this.goBack()}>Go Back</button>;
        }
      } else {
        score = <Score reset={this.resetQuiz}
                    score={this.props.finalScore}
                    totalQuestions={this.props.questions.length} />;
      }

      questionPage = (
        <div className={classes.QuestionGenerator}>
          {singleQuestion}
          {answerOptions}
          {backButton}
          {score}
        </div>
      );
    }
    return questionPage;
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questionGenerator.questions,
    userAnswers: state.userAnswers.userAnswers,
    finalScore: state.userAnswers.finalScore,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitQuestions: () => dispatch(actions.initQuestions()),
    onUserAnswer: (questionId, userScore) => dispatch(actions.addUserAnswer({ questionId, userScore })),
    onResetQuiz: () => dispatch(actions.resetQuiz())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionGenerator);
