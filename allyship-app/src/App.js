import React, { Component } from 'react';
import './App.css';
import OptionButton from './components/OptionButton/OptionButton';
import classes from './components/OptionButton/OptionButton.module.css';
import CrisisNumber from './components/CrisisNumber/CrisisNumber';

class App extends Component {
 state = {
    buttons: [
      { id: 1, text: 'i want trauma-informed resources to bring to my workplace' },
      { id: 2, text: 'i need help now' },
      { id: 3, text: 'i want ideas and resources to become a trauma-competent ally' }
    ],
    showCrisisNumber: true
  }

  toggleCrisisNumberHandler = () => {
    const doesShow = this.state.showCrisisNumber;
    this.setState({ showCrisisNumber: !doesShow });
  };

  render () {
    let crisisNumber = null;

    const buttons = this.state.buttons.map(button => {
      if (button.id === 2) {
       return <OptionButton
          onClick={this.props.click}
          key={button.id}
          text={button.text}
          showCrisisNumber={this.state.showCrisisNumber}
          clicked={this.toggleCrisisNumberHandler} />;
      } else {
        return <OptionButton
          key={button.id}
          text={button.text} />;
      }
      });

    return (
      <div className="App-container">
        <div className="App-header">
          <h1>
            What is Trauma Informed Care for Healthcare Workers?
          </h1>
            <img src="allyship_logo.png" className="App-logo" alt="logo" />
        </div>
        <div className={classes.OptionButtonContainer}>
          {buttons}
        </div>
          {this.state.showCrisisNumber ? (
            crisisNumber =
            <CrisisNumber
              showCrisisNumber={this.state.showCrisisNumber}
            />
            ) : null}
      </div>
    );
  }
};

export default App;
