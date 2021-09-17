import BeautifulScreen from "./BeautifulScreen";
import ButtonContainer from "./ButtonsContainer";

import classes from "./calculator.module.css";

const Calculator = () => {
  return (
    <div className={classes.calculator}>
      <BeautifulScreen />
      <ButtonContainer />
    </div>
  );
};
export default Calculator;
