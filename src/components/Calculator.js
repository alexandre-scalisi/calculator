import { useState, useContext } from 'react';

import classes from './calculator.module.css';
import BeautifulScreen from './BeautifulScreen';
import ButtonContainer from './ButtonsContainer';



const Calculator = () => {
  return (
    <div className={classes.calculator}>
      <BeautifulScreen/>
      <ButtonContainer/>
    </div>
  )
}
export default Calculator;