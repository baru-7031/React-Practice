import React, { Component } from 'react';
import FirstComponent from './Component/learn_example/FirstComponent'
import SecondComponent from './Component/learn_example/SecondComponent'
import Count from './Component/learn_example/Counter/Counter';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Count by="1"/>
        <Count by="5"/>
        <Count by="10"/>
      </div>
    );
  }
}

function Learn () {
  return (
    <div className="Learn">
      Hello World
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}


export default App;
