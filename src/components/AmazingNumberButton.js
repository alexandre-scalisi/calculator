import {useContext} from 'react';
import {ScreenContext} from '../contexts/ScreenContext'
import classes from './amazingNumberButton.module.css';

const AmazingNumberButton = (props) => {
  const { resultScreenState, setResultScreenState } = useContext(ScreenContext);
  const maxBtnLength = 13;
  
  const clickButton = () => {

    if((resultScreenState === '0' && props.val === '0') || resultScreenState.length > maxBtnLength)
      return;
    if(resultScreenState === '0') 
      return setResultScreenState(props.val)
    
    setResultScreenState(resultScreenState + props.val);
  }

  return (
    <button className={classes.button} style={{ gridArea: props.inline }} value={props.val} onClick={clickButton}>
      {props.val}
    </button>
  ) 
}

export default AmazingNumberButton;