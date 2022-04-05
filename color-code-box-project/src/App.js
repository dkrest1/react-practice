import { useState } from "react";
import TheBox from "./TheBox";
import ColorInput from "./ColorInput";
function App() {
  const [colour, setColour] = useState("");
  const [hexColour, setHexColour] = useState("");
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="App">
      <h1 className="header">CSS Color Box</h1>
      <TheBox colour={colour} hexColour={hexColour} isDark={isDark} />
      <ColorInput
        colour={colour}
        setColour={setColour}
        setHexColour={setHexColour}
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  );
}

export default App;
