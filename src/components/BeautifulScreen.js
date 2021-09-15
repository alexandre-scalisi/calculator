import classes from './beautifulScreen.module.css';
import { useContext } from 'react';
import { ScreenContext } from '../contexts/ScreenContext';

const BeautifulScreen = () => {
  const {screenState} = useContext(ScreenContext)
  return (
    <div className={classes.container}>
      <input type="text" className={classes.input} value={screenState} disabled />
    </div>
  );
};

export default BeautifulScreen;