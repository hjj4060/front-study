// const Button = (props) => {
//   console.log(props);
//   return <button style={{ color: props.color }}>{props.text}</button>;
// };

const Button = ({ children, text, color = "black" }) => {
  console.log(children);
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};
export default Button;
