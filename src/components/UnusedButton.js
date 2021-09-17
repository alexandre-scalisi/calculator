import classes from './unusedButton.module.css';
const UnusedButton = props => (
    <button
    className={classes.button}
    style={{ gridArea: props.inline }}
    value={props.val}
    onClick={props.handleClick}
    disabled
  >
    {props.val}
  </button>
);

export default UnusedButton;