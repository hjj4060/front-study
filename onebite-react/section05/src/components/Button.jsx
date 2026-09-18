// const Button = (props) => {
//   console.log(props);
//   return <button style={{ color: props.color }}>{props.text}</button>;
// };

const Button = ({ text, color = "black", children }) => {
  console.log(children);
  const onClickButton = () => {
    console.log(text);
  };
  return (
    <button
      // 이벤트를 실질적으로 처리하는 함수여서 이벤트 핸들러이다.
      onClick={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};
export default Button;
