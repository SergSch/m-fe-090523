
import classes from './SimpleParagraph.module.css';

function SimpleParagraph( {text, styles, onClick} ) {

  return (
    <p
      className={classes.simpleParagraph}
      style={ {color: styles.textColor, fontSize: styles.fontSize} }
      onClick={onClick}
    >
      {text}
    </p>
  );
}

export default SimpleParagraph;