import { useEffect } from 'react';
import classes from './beautifulScreen.module.css';

const BeautifulScreen = ({ inputState }) => {
  const [inputNumberState, setInputNumberState] = inputState; 

  // useEffect(() => {
  //   document.title = `Vous avez cliqué ${inputNumberState} fois`;
  // });

  document.title = Date.now()

  return (
    <div className={classes.container}>
      <input type="text" className={classes.input} value="0" disabled />
    </div>
  );
};

export default BeautifulScreen;