const Button = ({ buttonText, ReqType, setReqType }) => {
  return (
    <button type="button" onClick={() => setReqType(buttonText)}>
      {buttonText}
    </button>
  );
};

export default Button;
