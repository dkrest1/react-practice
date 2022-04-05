import colourNames from "colornames";
const ColorInput = ({ colour, setColour, setHexColour, isDark, setIsDark }) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="Color-input"
          type="text"
          placeholder="Add color name"
          value={colour}
          onChange={(e) => {
            setColour(e.target.value);
            setHexColour(colourNames(e.target.value));
          }}
        />
        <button className="TheButton" onClick={() => setIsDark(!isDark)}>
          Toggle Text Colour
        </button>
      </form>
    </div>
  );
};

export default ColorInput;
