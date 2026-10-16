import "./Header.css";

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <header className="Header">
      <div className="Header">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
