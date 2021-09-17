import { useContext } from "react";
import { CalcContext } from "../contexts/CalcContext";

import Button from "./Button";

import classes from "./amazingNumberButton.module.css";

const AmazingNumberButton = (props) => {
  const {
    actionState,
    setActionState,
    setOperatorState,
    setOperationScreenState,
    resultScreenState,
    setResultScreenState,
  } = useContext(CalcContext);

  const handleClick = () => {
    if(actionState === "over9000") 
      return;

    setActionState("number");
    if (actionState === "operation") return setResultScreenState(props.val);

    if (actionState === "equal") {
      props.reset(
        setActionState,
        setOperatorState,
        setResultScreenState,
        setOperationScreenState
      );
      return setResultScreenState(props.val);
    }

    if (
      (resultScreenState === "0" && props.val === "0") ||
      resultScreenState.length > process.env.REACT_APP_MAX_INPUT_LENGTH
    )
      return;

    if (resultScreenState === "0") return setResultScreenState(props.val);

    setResultScreenState(resultScreenState + props.val);
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
