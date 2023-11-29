
import classes from './SimpleParagraph.module.css';

function SimpleParagraph( {text, onClick, currentTheme} ) {

  let styleTheme = currentTheme ? classes[currentTheme + 'Theme'] : '';
  return (
    <p
      className={` ${classes.simpleParagraph} ${styleTheme}`}
      onClick={onClick}
    >
      {text}
    </p>
  );
}

export default SimpleParagraph;