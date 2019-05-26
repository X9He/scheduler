import React, { Component } from 'react';
import Router from './Router';
import { Provider }  from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'


class App extends Component{
  componentWillMount () {
    console.log('root component mounted')
  }

  render () {
    return (
        // provider is the glue that glues redux and react
        <Provider store={createStore(reducers)}>
          <Router/>
        </Provider>
    );
  }
}

export default App;
