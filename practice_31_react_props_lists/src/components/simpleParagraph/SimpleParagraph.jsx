
import classes from './SimpleParagraph.module.css';

function SimpleParagraph( {text, onClick, theme} ) {

  let styleTheme = theme ? classes[theme + 'Theme'] : '';
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