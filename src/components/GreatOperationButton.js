import {useContext} from 'react';
import {ScreenContext} from '../contexts/ScreenContext'
import {ActionContext} from '../contexts/ActionContext'
import classes from './amazingNumberButton.module.css';

const GreatOperationButton = (props) => {
  const { operationScreenState, setOperationScreenState, resultScreenState } =
    useContext(ScreenContext);
  const { actionState, setActionState } = useContext(ActionContext);
  const click = () => {
    setActionState('Operation')
    if (actionState === 'Operation')
      return setOperationScreenState(resultScreenState.slice(-1) + ' ' + props.val);
      if (!operationScreenState)
        return setOperationScreenState(resultScreenState + " " + props.val);
    setOperationScreenState('')
  }

  return (
    <button className={classes.button} style={{ gridArea: props.inline }} value={props.val} onClick={click}>
      {props.val}
    </button>
  ) 
}




export default GreatOperationButton;