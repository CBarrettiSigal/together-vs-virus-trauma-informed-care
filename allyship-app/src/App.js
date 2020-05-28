import React, { Component } from 'react';
import './App.css';
import OptionButton from './components/OptionButton/OptionButton';
import classes from './components/OptionButton/OptionButton.module.css';

class App extends Component {
 state = {
    buttons: [
      { id: 1, text: 'Test1' },
      { id: 2, text: 'Test2' },
      { id: 3, text: 'Test3' }
    ]
  }

render () {
    const buttons = this.state.buttons.map(button => {
      return <OptionButton
        className={classes.OptionButtonContainer}
        key={button.id}
        text={button.title} />;
    });

    return (
      <div className="App-container">
        <div className="App-header">
          <h1>
            What is Trauma Informed Care?
          </h1>
            <img src="allyship_logo.png" className="App-logo" alt="logo" />
        </div>
        <div  >
          {buttons}
        </div>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer">Dummy Link
        </a>
      </div>
    );
  }
};

export default App;
