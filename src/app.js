import React, { Component } from 'react';
import Router from './Router';

class App extends Component{
  componentWillMount () {
    console.log('root component mounted')
  }

  render () {
    return (
        <Router/>
    );
  }
}

export default App;
