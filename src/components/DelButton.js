import { useContext } from 'react';

import classes from './amazingNumberButton.module.css';
import {ScreenContext} from '../contexts/ScreenContext'
import {ActionContext} from "../contexts/ActionContext";
import {OperatorContext} from "../contexts/OperatorContext";

const DelButton = (props) => {
    const { actionState, setActionState } = useContext(ActionContext);
    const {
        resultScreenState,
        setResultScreenState,
        operationScreenState,
        setOperationScreenState
      } = useContext(ScreenContext)

    const clickButton = () => {
        if(actionState==="equal") {
            setOperationScreenState(process.env.REACT_APP_OPERATION_SCREEN_STATE)
            return
        }

        if(actionState === 'number') {
            if(resultScreenState.length > 1)
                setResultScreenState(resultScreenState.slice(0, -1))
            else 
            setResultScreenState(process.env.REACT_APP_RESULT_SCREEN_STATE)
        } 
    }

    return (
        <button className={classes.button} style={{ gridArea: props.inline }} value={props.val} onClick={clickButton}>
        {props.val}
      </button>
    )
}

export default DelButton;