import { useContext } from "react";
import { CalcContext } from "../contexts/CalcContext";

import Button from "./Button";

import classes from "./amazingNumberButton.module.css";

const AmazingNumberButton = (props) => {
  const {
    actionState,
    setActionState,
    setOperatorState,
    setUpperScreenState,
    lowerScreenState,
    setLowerScreenState,
  } = useContext(CalcContext);

  const handleClick = () => {
    if(actionState === "over9000") 
      return;

    setActionState("number");
    if (actionState === "operation") return setLowerScreenState(props.val);

    if (actionState === "equal") {
      props.reset(
        setActionState,
        setOperatorState,
        setLowerScreenState,
        setUpperScreenState
      );
      return setLowerScreenState(props.val);
    }

    if (
      (lowerScreenState === "0" && props.val === "0") ||
      lowerScreenState.length > process.env.REACT_APP_MAX_INPUT_LENGTH
    )
      return;

    if (lowerScreenState === "0") return setLowerScreenState(props.val);

    setLowerScreenState(lowerScreenState + props.val);
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

export default AmazingNumberButton;
