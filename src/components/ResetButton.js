import { useContext } from 'react';

import classes from './amazingNumberButton.module.css';
import {ScreenContext} from '../contexts/ScreenContext'
import {ActionContext} from "../contexts/ActionContext";
import {OperatorContext} from "../contexts/OperatorContext";

import reset from '../helpers/Reset';

const ResetButton = (props) => {
    const { actionState, setActionState } = useContext(ActionContext);
    const {
        resultScreenState,
        setResultScreenState,
        operationScreenState,
        setOperationScreenState
      } = useContext(ScreenContext)
    
      const {operatorState, setOperatorState} = useContext(OperatorContext)

    const clickButton = () => {
        reset(
            setActionState,
            setOperatorState,
            setResultScreenState,
            setOperationScreenState
          );
    }

    return (
        <button className={classes.button} style={{ gridArea: props.inline }} value={props.val} onClick={clickButton}>
        {props.val}
      </button>
    )
}

export default ResetButton;