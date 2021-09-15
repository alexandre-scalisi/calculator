import classes from './buttonsContainer.module.css';
import AmazingNumberButton from './AmazingNumberButton';
const ButtonsContainer = ({ inputState }) => (
  <div className={classes.buttonsContainer}>
    <div className={classes.gridContainer}>
      <AmazingNumberButton val="1" inline="one" />
      <AmazingNumberButton val="0" inline="zero" />
    </div>
  </div>
);
export default ButtonsContainer;