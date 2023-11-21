
function SimpleParagraph( {text, styles, onClick} ) {

  return (
    <p
      style={ {color: styles.textColor, fontSize: styles.fontSize} }
      onClick={onClick}
    >
      {text}
    </p>
  );
}

export default SimpleParagraph;