import {useState, useContext} from 'react';
import {ScreenContext} from '../contexts/ScreenContext'
import classes from './amazingNumberButton.module.css';

const AmazingNumberButton = (props) => {
  const { screenState, setScreenState } = useContext(ScreenContext);
  const maxBtnLength = 13;
  
  const clickButton = () => {

    if((screenState === '0' && props.val === '0') || screenState.length > maxBtnLength)
      return;
    if(screenState === '0') 
      return setScreenState(props.val)
    
    setScreenState(screenState + props.val)
  }

  return (
    <button className={classes.button} style={{ gridArea: props.inline }} value={props.val} onClick={clickButton}>
      {props.val}
    </button>
  ) 
}

export default AmazingNumberButton;