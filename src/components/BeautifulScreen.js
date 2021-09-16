import classes from './beautifulScreen.module.css';
import { useContext } from 'react';
import { ScreenContext } from '../contexts/ScreenContext';

const BeautifulScreen = () => {
  const { resultScreenState } = useContext(ScreenContext);
  const { operationScreenState } = useContext(ScreenContext);
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