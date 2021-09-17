import classes from './unusedButton.module.css';

// Je me suis inspiré de la calculatrice windows puis je me suis rendu compte 
// que je n'aurais pas besoin de tous les boutons pour l'exercice :D

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