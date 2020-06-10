import React, { Component } from 'react';
import './App.css';
import Option from './components/Option/Option';
import classes from './components/Option/Option.module.css';
import CrisisNumber from './components/CrisisNumber/CrisisNumber';
import ScrollIntoView from 'react-scroll-into-view';

class App extends Component {
  state = {
    buttons: [
      {
        id: 1,
        text: "i want trauma-informed resources to bring to my workplace",
      },
      { id: 2, text: "i need help now" },
      {
        id: 3,
        text: "i want ideas and resources to become a trauma-competent ally",
      },
    ]
  };
  render() {
    const { buttons } = this.state;
    return (
      <div className="App-container">
        <div className="App-header">
          <h1>Trauma Informed Care for Healthcare Workers</h1>
          <img src="allyship_logo.png" className="App-logo" alt="logo" />
        </div>
        <div className={classes.OptionContainer}>
          {buttons.map((button, index) => {
            if (index === 1) {
              return (
                <ScrollIntoView selector={"#test-selector"} key={button.id}>
                  <Option
                    className={classes.Option}
                    text={button.text}
                    key={button.id}
                    style={{
                      fontSize: "calc(30px + 1.5vmin)",
                      paddingTop: "24px",
                      textAlign: "center",
                    }}
                  />
                </ScrollIntoView>
              )
            } else {
              return <Option
                className={classes.Option}
                text={button.text}
                key={button.id}
              />
            }
          })};
        </div>
        <CrisisNumber />
      </div>
    );
  }
}
export default App;
