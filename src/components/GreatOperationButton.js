import { useContext } from "react";
import { CalcContext } from "../contexts/CalcContext";

import Button from "./Button";
import classes from "./greatOperationButton.module.css";

const GreatOperationButton = (props) => {
  const {
    operationScreenState,
    setOperationScreenState,
    setResultScreenState,
    resultScreenState,
    actionState,
    setActionState,
    operatorState,
    setOperatorState,
  } = useContext(CalcContext);

  const handleClick = () => {

    if(actionState === "over9000")
      return;

    setActionState("operation");

    if (actionState === "equal" || actionState === "operation") {
      setOperatorState(props.val);
      return setOperationScreenState(
        parseFloat(resultScreenState) + " " + props.val
      );
    }

    const val = props.calculate(
      operatorState,
      parseFloat(operationScreenState),
      parseFloat(resultScreenState)
    );
    setOperationScreenState(val + " " + props.val);
    setResultScreenState(val);
    setOperatorState(props.val);
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

export default GreatOperationButton;
