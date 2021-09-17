import { useContext } from "react";
import { ScreenContext } from "../contexts/ScreenContext";
import { ActionContext } from "../contexts/ActionContext";
import { OperatorContext } from "../contexts/OperatorContext";
import classes from "./magnificientEqualButton.module.css";

const MagnificientEqualButton = (props) => {

  const {operatorState} = useContext(OperatorContext);
  const {actionState, setActionState} = useContext(ActionContext);
  const { resultScreenState, setResultScreenState, operationScreenState, setOperationScreenState } =
    useContext(ScreenContext);

  const click = async () => {
    setActionState("equal");
    
    if(!operatorState)
      return setOperationScreenState(resultScreenState + ' =');
    const operands = operationScreenState.split(' ' + operatorState)
    console.log(actionState)
    let op1;
    let op2;
    if(actionState === 'number') {
      op1 = parseFloat(operands[0]);
      op2 = parseFloat(resultScreenState);
    } else {
      op1 = actionState === 'number' ? parseFloat(operands[0]) : parseFloat(resultScreenState);
      op2 = isNaN(parseFloat(operands[1])) ? op1 : parseFloat(operands[1]); 
    }
    console.log(operands, op1, op2)
    const res = props.calculate(operatorState, op1, op2)
    if(res > 9000) {
      await setActionState('over9000')
      return;
    }
    setOperationScreenState(`${op1} ${operatorState} ${op2} =`)
    setResultScreenState(res)
  }

  return (
    <button
      className={classes.button}
      style={{ gridArea: props.inline }}
      value={props.val}
      onClick={click}
    >
      {props.val}
    </button>
  ); 
};
export default MagnificientEqualButton;
