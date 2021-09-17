import { useContext } from "react";
import { CalcContext } from "../contexts/CalcContext";

import Button from "./Button";
import classes from "./greatOperationButton.module.css";

const GreatOperationButton = (props) => {
  const {
    upperScreenState,
    setUpperScreenState,
    setLowerScreenState,
    lowerScreenState,
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
      return setUpperScreenState(
        parseFloat(lowerScreenState) + " " + props.val
      );
    }

    const val = props.calculate(
      operatorState,
      parseFloat(upperScreenState),
      parseFloat(lowerScreenState)
    );
    setUpperScreenState(val + " " + props.val);
    setLowerScreenState(val);
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
