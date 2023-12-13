import SimpleInput from "../input/SimpleInput";
import SimpleParagraph from "../simpleParagraph/SimpleParagraph";


function SimpleComponent( {appTheme} ) {
  return (
    <div>
      <h3>This is just a simple component</h3>
      <SimpleParagraph currentTheme={appTheme} text="Simple Text" />
    </div>
  )
}

export default SimpleComponent;