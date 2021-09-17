import {useContext} from 'react';
import {ScreenContext} from '../contexts/ScreenContext'
import {ActionContext} from '../contexts/ActionContext'
import {OperatorContext} from '../contexts/OperatorContext'
import classes from './amazingNumberButton.module.css';




const GreatOperationButton = (props) => {

  const click = () => {
    setActionState('operation')

    if(actionState === 'equal') {
      setOperatorState(props.val);
      return setOperationScreenState(
        parseFloat(resultScreenState) + " " + props.val
      );
    }

    if (actionState === 'operation') {
      setOperatorState(props.val);
      return setOperationScreenState(parseFloat(operationScreenState) + ' ' + props.val);
    }

    const val = props.calculate(
      operatorState,
      parseFloat(operationScreenState),
      parseFloat(resultScreenState),
    );
    setOperationScreenState(val + " " + props.val);
    setResultScreenState(val);
    setOperatorState(props.val);
  }
  

  const { operationScreenState, setOperationScreenState, setResultScreenState, resultScreenState } =
    useContext(ScreenContext);
  const { actionState, setActionState } = useContext(ActionContext);
  const { operatorState, setOperatorState } = useContext(OperatorContext);
  
  return (
    <button className={classes.button} style={{ gridArea: props.inline }} value={props.val} onClick={click}>
      {props.val}
    </button>
  ) 
}

export default GreatOperationButton;