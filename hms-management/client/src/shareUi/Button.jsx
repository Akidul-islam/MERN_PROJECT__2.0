const Button = ({ type, text, ownStyle, varient, disable }) => {
  const styleButton = {
    fontweight: '500',
    fontSize: '25px',
    border: '1px solid white',
    padding: '6px 8px',
    ...ownStyle,
  };
  return (
    <button
      type={type}
      disabled={disable}
      className={varient}
      style={styleButton}
    >
      {text}
    </button>
  );
};

export default Button;
