import React, { Component } from 'react';
import './App.css';
import Option from './components/Option/Option';
import classes from './components/Option/Option.module.css';
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
    console.log('Was clicked');
    const doesShow = this.state.showCrisisNumber;
    this.setState({ showCrisisNumber: !doesShow });
  };

  render () {
    let crisisNumber = null;

    const buttons = this.state.buttons.map(button => {
      if (button.id === 2) {
       return <Option
          // onClick={this.props.clicked}
          key={button.id}
          text={button.text}
          showCrisisNumber={this.state.showCrisisNumber}
          onClick={this.toggleCrisisNumberHandler} />;
      } else {
        return <Option
          key={button.id}
          text={button.text}
          onClick={this.toggleCrisisNumberHandler} />;
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
        <div className={classes.OptionContainer}>
          {buttons}
          <button onClick={this.toggleCrisisNumberHandler}>Test</button>
        </div>
          {this.state.showCrisisNumber ? (
            crisisNumber =
            <CrisisNumber
            />
            ) : null}
      </div>
    );
  }
};

export default App;
