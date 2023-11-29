import SimpleInput from "../input/SimpleInput";
import SimpleParagraph from "../simpleParagraph/SimpleParagraph";


function SimpleComponent( {appTheme} ) {
  return (
    <div>
      <SimpleParagraph currentTheme={appTheme} text="Simple Text" />
      <SimpleInput />
    </div>
  )
}

export default SimpleComponent;