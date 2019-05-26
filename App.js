import React, { Component } from 'react';
import Router from './src/Router';
//
//
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

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
