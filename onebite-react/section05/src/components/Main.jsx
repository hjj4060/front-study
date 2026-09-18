import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다., 조건문 넣을수없다.
// 2. 숫자, 문자열, 배열값만 렌더링 된다., undefined, null, true/false, 객체는 렌더링 안된다., 객체의 값은 된다.
// 3. 모든 태그는 닫혀있어야된다.
// 4. 최상위 태그는 하나여야한다.
const Main = () => {
  const user = {
    name: "이정환",
    isLogin: true,
  };

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
};

export default Main;
