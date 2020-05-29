import React from 'react';
import classes from './CrisisNumber.module.css';

const CrisisNumber = (props) => {
  return (
    <div className={classes.CrisisNumber}>
    <h1>If you're looking for a Crisis Line in Canada, please find one near you at
    </h1>
    <a
      className="App-link"
      href="https://suicideprevention.ca/need-help"
      target="_blank"
      rel="noopener noreferrer">SuicidePrevention.ca
    </a>
    </div>
  )
};


export default CrisisNumber;
