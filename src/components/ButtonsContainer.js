import AmazingNumberButton from "./AmazingNumberButton";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import DelButton from "./DelButton";
import ResetButton from "./ResetButton";
import UnusedButton from "./UnusedButton";
import ItSOverNineThousand from "./ItSOverNineThousand";

import {
  AmazingNumberButtons,
  GreatOperationButtons,
  UnusedButtons
} from "../data/buttons.json";

import classes from "./buttonsContainer.module.css";

const ButtonsContainer = () => {

  // Je n'ai pas géré les erreures comme division par zero 
  // et je n'ai pas géré les nombres à virgule trop longs

  const calculate = (op, operand1, operand2) => {
    if (isNaN(operand1)) {
      return operand2;
    }
    let res;
    switch (op) {
      case "+":
        res = operand1 + operand2;
        break;
      case "-":
        res = operand1 - operand2;
        break;
      case "/":
        res = operand1 / operand2;
        break;
      case "x":
        res = operand1 * operand2;
        break;
      default:
        break;
    }
    return res;
  };

  const reset = (
    setActionState,
    setOperatorState,
    setLowerScreenState,
    setUpperScreenState
  ) => {
    setActionState(process.env.REACT_APP_ACTION_STATE);
    setOperatorState(process.env.REACT_APP_OPERATOR_STATE);
    setLowerScreenState(process.env.REACT_APP_LOWER_SCREEN_STATE);
    setUpperScreenState(process.env.REACT_APP_UPPER_SCREEN_STATE);
  };

  /* Je récupere les données de certains boutons dans src/data/buttons.json
     puis je les mets dans un tableau pour ne pas avoir trop de components à
     écrire dans mon return.operation.
     inline me sert à créer une classe pour mon grid-template-areas
  */
  const numberButtons = AmazingNumberButtons.map((amazingButton, i) => (
    <AmazingNumberButton
      val={amazingButton.val}
      inline={amazingButton.inline}
      reset={reset}
      key={i}
    />
  ));

  const operationButtons = GreatOperationButtons.map((greatButton, i) => (
    <GreatOperationButton
      val={greatButton.val}
      inline={greatButton.inline}
      key={i}
      calculate={calculate}
    />
  ));

  const unusedButtons = UnusedButtons.map((unusedButton, i) => (
    <UnusedButton val={unusedButton.val} inline={unusedButton.inline} key={i} />
  ));

  return (
    <div className={classes.buttonsContainer}>
      <div className={classes.gridContainer}>
        {numberButtons}
        {operationButtons}
        {unusedButtons}
        <MagnificientEqualButton val="=" inline="equal" calculate={calculate} />
        <DelButton val="<=" inline="del" />
        <ResetButton val="C" inline="C" reset={reset} />
        <ItSOverNineThousand />
      </div>
    </div>
  );
};

export default ButtonsContainer;
