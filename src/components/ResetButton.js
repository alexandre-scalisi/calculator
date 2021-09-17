import { useContext } from "react";
import { CalcContext } from "../contexts/CalcContext";

import Button from "./Button";

import classes from "./resetButton.module.css";

const ResetButton = (props) => {
  const {
    setActionState,
    setLowerScreenState,
    setUpperScreenState,
    setOperatorState,
  } = useContext(CalcContext);

  const handleClick = () => {
    props.reset(
      setActionState,
      setOperatorState,
      setLowerScreenState,
      setUpperScreenState
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
