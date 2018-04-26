import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import classes from './App.css';
import QuestionGenerator from './containers/QuestionGenerator/QuestionGenerator';
import logo from './logo.svg';


class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <header className={classes.AppHeader}>
                    <img src={logo} className={classes.AppLogo} alt="logo" />
                    <h1 className={classes.AppTitle}>Welcome to Quiz App</h1>
                </header>
                <Switch >
                    <Route path="/assessment" exact component={QuestionGenerator} />
                    <Redirect from="/" to="assessment" />
                </Switch>
            </div>
        );
    }
}

export default App;
