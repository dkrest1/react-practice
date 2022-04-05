const TheBox = ({ colour, hexColour, isDark }) => {
  return (
    <div
      className="Box"
      style={{
        backgroundColor: colour,
        color: isDark ? "#000" : "#fff",
      }}
    >
      <h1>{colour ? colour : "Empty Colour"}</h1>
      <h1>{hexColour ? hexColour : null}</h1>
    </div>
  );
};

TheBox.defaultProps = {
  colour: "Empty Color Value",
};

export default TheBox;
