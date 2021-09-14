import { useState } from 'react';
import classes from './calculator.module.css';
import BeautifulScreen from './BeautifulScreen';
import ButtonContainer from './ButtonsContainer';

const Calculator = () => {
  const inputState = useState('0');

  return (
    <div className={classes.calculator}>
      <BeautifulScreen inputState={inputState}/>
      <ButtonContainer inputState={inputState}/>
    </div>
  )
}
export default Calculator;