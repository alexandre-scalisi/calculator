import {useState, useEffect} from 'react';
import classes from './amazingNumberButton.module.css';

const AmazingNumberButton = (props) => {
  const [inputNumberState, setInputNumberState] = props.inputState; 
  const click = () => {
    if((inputNumberState === '0' && props.val === '0') || inputNumberState.length > 10)
      return;
    if(inputNumberState === '0') {
      setInputNumberState(props.val)
      return;
    }
    setInputNumberState(inputNumberState + props.val)
  }

  
  return (
    <button className={classes.button} style={{ gridArea: props.inline }} value={props.val} onClick={click}>
      {props.val}
    </button>
  ) 
}
export default AmazingNumberButton;