import React, { Component } from 'react';
import { Route, withRouter, Redirect} from 'react-router-dom';
import './App.css';
import Main from './Main';
import Home from './containers/Home'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => <Home />}/>
        <Route exact path='/play' render={() =><Main />} />
      </div>
    );
  }
}

export default withRouter(App);
