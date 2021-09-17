import { useContext } from "react";
import { CalcContext } from "../contexts/CalcContext";

import Button from "./Button";

import classes from "./magnificientEqualButton.module.css";

const MagnificientEqualButton = (props) => {
  const {
    operatorState,
    actionState,
    setActionState,
    resultScreenState,
    setResultScreenState,
    operationScreenState,
    setOperationScreenState,
  } = useContext(CalcContext);

  const handleClick = () => {
    if (actionState === "over9000") 
      return;

    setActionState("equal");

    if (!operatorState)
      return setOperationScreenState(resultScreenState + " =");

    const operands = operationScreenState.split(" " + operatorState);

    let op1;
    let op2;

    if (actionState === "number") {
      op1 = parseFloat(operands[0]);
      op2 = parseFloat(resultScreenState);
    } else {
      op1 =
        actionState === "number"
          ? parseFloat(operands[0])
          : parseFloat(resultScreenState);
      op2 = isNaN(parseFloat(operands[1])) ? op1 : parseFloat(operands[1]);
    }
    
    const res = props.calculate(operatorState, op1, op2);
    if (res > 9000) {
      setActionState("over9000");
      return;
    }
    setOperationScreenState(`${op1} ${operatorState} ${op2} =`);
    setResultScreenState(res);
  };

  return (
    <Button
      classes={classes}
      inline={props.inline}
      val={props.val}
      handleClick={handleClick}
    />
  );
};
export default MagnificientEqualButton;
