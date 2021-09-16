import classes from './buttonsContainer.module.css';
import AmazingNumberButton from './AmazingNumberButton';
import {AmazingNumberButtons, GreatOperationButtons} from '../data/buttons.json';
import GreatOperationButton from './GreatOperationButton';

const ButtonsContainer = () => {
  const numberButtons = AmazingNumberButtons.map((amazingButton, i) =>
   <AmazingNumberButton val={amazingButton.val} inline={amazingButton.inline} key={i}/>
  )

  const operationButtons = GreatOperationButtons.map((greatButton, i) => (
    <GreatOperationButton
      val={greatButton.val}
      inline={[greatButton.inline, ]}
      key={i}
    />
  ));
  return (
    <div className={classes.buttonsContainer}>
      <div className={classes.gridContainer}>
        {numberButtons}
        {operationButtons}
      </div>
    </div>
  );
}

export default ButtonsContainer;