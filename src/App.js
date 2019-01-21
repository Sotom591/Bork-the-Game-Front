import React, { Component } from 'react';
import { Route, withRouter, Redirect} from 'react-router-dom';
import './App.css';
import Main from './containers/Main';
import HomeCont from './containers/HomeCont';
import BackStory from './components/BackStory';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => <HomeCont />}/>
        <Route exact path='/play' render={() => <Main />} />
        <Route exact path='/backstory' render={() => <BackStory />}/>
      </div>
    );
  }
}

export default withRouter(App);
