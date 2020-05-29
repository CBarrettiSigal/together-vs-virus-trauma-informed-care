import React from 'react';
import classes from './Option.module.css';

const Option = (props) => {
  return (
    <div
      className={classes.Option}
      onClick={props.clicked}
      >{props.text}
    </div>
  )
};


export default Option;
