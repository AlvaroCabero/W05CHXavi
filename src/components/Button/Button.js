const Button = ({ text, actionOnClick }) => {
  return (
    <button className="button" onClick={actionOnClick}>
      {text}
    </button>
  );
};
export default Button;
