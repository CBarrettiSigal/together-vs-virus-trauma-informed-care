import React from 'react';
import classes from './Option.module.css';

const Option = (props) => {
  return (
    <div
      className={classes.Option}
      >{props.text}
    </div>
  )
};


export default Option;
