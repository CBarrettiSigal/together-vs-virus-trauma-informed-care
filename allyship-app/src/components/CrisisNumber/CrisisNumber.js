import React from 'react';
import classes from './CrisisNumber.module.css';

const CrisisNumber = (props) => {
  return (
    <div
        id="test-selector"
        className={classes.CrisisNumber}
        clicked={props.clicked}>
    <h1>If you're looking for a Crisis Line in Canada, please find one near you at
    </h1>
    <a
      className="App-link"
      href="https://suicideprevention.ca/need-help"
      target="_blank"
      rel="noopener noreferrer">SuicidePrevention.ca
    </a>
    <h3>
      If you're wondering whether or not to call, PLEASE CALL. They are not just a Suicide Resource.
    </h3>
    </div>
  )
};


export default CrisisNumber;
