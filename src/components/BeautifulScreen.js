import classes from "./beautifulScreen.module.css";
import { useContext } from "react";
import { CalcContext } from "../contexts/CalcContext";

const BeautifulScreen = () => {
  const { lowerScreenState, upperScreenState } = useContext(CalcContext);

  return (
    <div className={classes.container}>
      <input
        type="text"
        className={`${classes.input} ${classes.operation}`}
        value={upperScreenState}
        disabled
      />
      <input
        type="text"
        className={`${classes.input} ${classes.result}`}
        value={lowerScreenState}
        disabled
      />
    </div>
  );
};

export default BeautifulScreen;
