import { useContext } from "react";
import { CalcContext } from "../contexts/CalcContext";

import Button from "./Button";

import classes from "./resetButton.module.css";

const ResetButton = (props) => {
  const {
    setActionState,
    setResultScreenState,
    setOperationScreenState,
    setOperatorState,
  } = useContext(CalcContext);

  const handleClick = () => {
    props.reset(
      setActionState,
      setOperatorState,
      setResultScreenState,
      setOperationScreenState
    );
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

export default ResetButton;
