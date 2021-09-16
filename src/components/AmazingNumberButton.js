import {useContext} from 'react';
import {ScreenContext} from '../contexts/ScreenContext'
import {ActionContext} from "../contexts/ActionContext";
import {OperatorContext} from "../contexts/OperatorContext";
import reset from '../helpers/Reset';

import classes from './amazingNumberButton.module.css';

const AmazingNumberButton = (props) => {
  const { actionState, setActionState } = useContext(ActionContext);
  const { resultScreenState, setResultScreenState } = useContext(ScreenContext);
  const { setOperationScreenState } = useContext(ScreenContext);
  const { setOperatorState } =
    useContext(OperatorContext);
  const maxBtnLength = 13;
  
  const clickButton = () => {
    setActionState('number');
    if(actionState === 'operation')
      return setResultScreenState(props.val);
    if(actionState === 'equal'){
      reset(
        setActionState,
        setOperatorState,
        setResultScreenState,
        setOperationScreenState
      );
      return setResultScreenState(props.val);
    }
    if((resultScreenState === '0' && props.val === '0') || resultScreenState.length > maxBtnLength)
      return;
    if(resultScreenState === '0') 
      return setResultScreenState(props.val)
    
    setResultScreenState(resultScreenState + props.val);
  }

  return (
    <>
      <button className={classes.button} style={{ gridArea: props.inline }} value={props.val} onClick={clickButton}>
        {props.val}
      </button>
    </>
  ) 
}

export default AmazingNumberButton;