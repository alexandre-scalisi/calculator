import { useContext } from "react";
import { CalcContext } from "../contexts/CalcContext";

import Button from "./Button";

import classes from "./amazingNumberButton.module.css";

const DelButton = (props) => {
  const {
    actionState,
    setUpperScreenState,
    lowerScreenState,
    setLowerScreenState,
  } = useContext(CalcContext);
  
  const handleClick = () => {
    if (actionState !== "equal" || actionState !== "number") return;

    if (actionState === "equal")
      return setUpperScreenState(
        process.env.REACT_APP_UPPER_SCREEN_STATE
      );

    if (lowerScreenState.length > 1)
      return setLowerScreenState(lowerScreenState.slice(0, -1));

    setLowerScreenState(process.env.REACT_APP_LOWER_SCREEN_STATE);
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
