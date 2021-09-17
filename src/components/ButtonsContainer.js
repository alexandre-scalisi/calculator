import classes from './buttonsContainer.module.css';
import AmazingNumberButton from './AmazingNumberButton';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from "./MagnificientEqualButton";
import DelButton from "./DelButton";
import ResetButton from "./ResetButton";
import {AmazingNumberButtons, GreatOperationButtons} from '../data/buttons.json';
import ItSOverNineThousand from './ItSOverNineThousand';

const ButtonsContainer = () => {

  const calculate = (op, operand1, operand2) => {
  
    console.log(operand1)
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
        console.log(res)
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
    setResultScreenState,
    setOperationScreenState
  ) => {
    setActionState(process.env.REACT_APP_ACTION_STATE);
    setOperatorState(process.env.REACT_APP_OPERATOR_STATE);
    setResultScreenState(process.env.REACT_APP_RESULT_SCREEN_STATE);
    setOperationScreenState(process.env.REACT_APP_OPERATION_SCREEN_STATE);
  };


  const numberButtons = AmazingNumberButtons.map((amazingButton, i) =>
   <AmazingNumberButton val={amazingButton.val} inline={amazingButton.inline} reset={reset} key={i} />
  )

  const operationButtons = GreatOperationButtons.map((greatButton, i) => (
    <GreatOperationButton
      val={greatButton.val}
      inline={greatButton.inline}
      key={i}
      calculate={calculate}
    />
  ));

  


  return (
    <div className={classes.buttonsContainer}>
      <div className={classes.gridContainer}>
        {numberButtons}
        {operationButtons}
        <MagnificientEqualButton val="=" inline="equal" calculate={calculate}/>
        <DelButton val="<=" inline="del" />
        <ResetButton val="C" inline="C" reset={reset}/>
        <ItSOverNineThousand />
      </div>
    </div>
  );
}

export default ButtonsContainer;