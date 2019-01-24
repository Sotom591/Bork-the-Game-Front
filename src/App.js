import React, { Component } from 'react';
import { Route, withRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Main from './containers/Main';
import HomeCont from './containers/HomeCont';
import BackStory from './components/BackStory';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path='/play' render={() => <Main />} />
        <Route exact path='/backstory' render={() => <BackStory />}/>
        <Route exact path='/' render={() => <HomeCont />}/>
        <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
