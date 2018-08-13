import React, { Component } from 'react';
import './App.css';
import {AppWrapper, Header} from './components/Theme'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppWrapper>
          <div className='header'></div>
          <Header>Header</Header>
          <div className='main'></div>
          <div className='footer'></div>
          </AppWrapper>
      </div>
    );
  }
}

export default App;
