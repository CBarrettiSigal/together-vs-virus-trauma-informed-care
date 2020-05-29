import React from 'react';
import classes from './OptionButton.module.css';

const OptionButton = (props) => {
  return (
    <div
      className={classes.OptionButton}
      >{props.text}
    </div>
  )
};


export default OptionButton;
