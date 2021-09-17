import { useContext } from "react";
import { CalcContext } from "../contexts/CalcContext";

import Button from "./Button";

import classes from "./amazingNumberButton.module.css";

const DelButton = (props) => {
  const {
    actionState,
    setOperationScreenState,
    resultScreenState,
    setResultScreenState,
  } = useContext(CalcContext);
  const handleClick = () => {
    if (actionState !== "equal" || actionState !== "number") return;

    if (actionState === "equal")
      return setOperationScreenState(
        process.env.REACT_APP_OPERATION_SCREEN_STATE
      );

    if (resultScreenState.length > 1)
      return setResultScreenState(resultScreenState.slice(0, -1));

    setResultScreenState(process.env.REACT_APP_RESULT_SCREEN_STATE);
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

export default DelButton;
