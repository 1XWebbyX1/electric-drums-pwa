import React, { Component } from 'react';
import asyncComponent from './components/asyncComponent/async';
import './App.scss';

//dynamic import
const Wrapper = asyncComponent(() =>
      import('./components/Wrapper').then(module => module.default)
  );


class App extends Component {
  render() {
    return (
      <Wrapper />
    );
  }
}

export default App;
