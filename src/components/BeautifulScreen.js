import classes from "./beautifulScreen.module.css";
import { useContext } from "react";
import { CalcContext } from "../contexts/CalcContext";

const BeautifulScreen = () => {
  const { resultScreenState, operationScreenState } = useContext(CalcContext);

  return (
    <div className={classes.container}>
      <input
        type="text"
        className={`${classes.input} ${classes.operation}`}
        value={operationScreenState}
        disabled
      />
      <input
        type="text"
        className={`${classes.input} ${classes.result}`}
        value={resultScreenState}
        disabled
      />
    </div>
  );
};

export default BeautifulScreen;
