const Button = (props) => (
  <button
    className={props.classes.button}
    style={{ gridArea: props.inline }}
    value={props.val}
    onClick={props.handleClick}
  >
    {props.val}
  </button>
);

export default Button;
