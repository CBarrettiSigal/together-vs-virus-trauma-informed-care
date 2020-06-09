import React, { Component } from 'react';
import './App.css';
import Option from './components/Option/Option';
import classes from './components/Option/Option.module.css';
import CrisisNumber from './components/CrisisNumber/CrisisNumber';
import ScrollTo from 'react-scroll-into-view';

class App extends Component {
 state = {
    buttons: [
      { id: 1, text: 'i want trauma-informed resources to bring to my workplace' },
      { id: 2, text: 'i need help now' },
      { id: 3, text: 'i want ideas and resources to become a trauma-competent ally' }
    ],
    showCrisisNumber: false
  }

  toggleCrisisNumberHandler = () => {
    console.log('Was clicked!');
    const doesShow = this.state.showCrisisNumber;
    this.setState({ showCrisisNumber: !doesShow });
  };

  render () {
    return (
      <div className="App-container">
        <div className="App-header">
          <h1>
            Trauma Informed Care for Healthcare Workers
          </h1>
            <img src="allyship_logo.png" className="App-logo" alt="logo" />
        </div>
        <div className={classes.OptionContainer}>
        <Option
          text={this.state.buttons[0].text}
          key={this.state.buttons[0].id}/>
        <ScrollTo selector={classes.CrisisNumber}>
        <Option
          style={{
            fontSize: 'calc(30px + 1.5vmin)',
            paddingTop: '24px',
            textAlign: 'center'
          }}
          text={this.state.buttons[1].text}
          key={this.state.buttons[1].id}
          clicked={this.toggleCrisisNumberHandler}/>
        </ScrollTo>
        <Option
          text={this.state.buttons[2].text}
          key={this.state.buttons[2].id}/>
        </div>
          {this.state.showCrisisNumber &&
            <CrisisNumber
            />}
      </div>
    );
  }
};

export default App;
