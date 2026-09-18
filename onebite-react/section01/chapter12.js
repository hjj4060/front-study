function funcA() {
  console.log("funA");
}

let varA = funcA;
varA();

// 1. 함수표현식, 익명함수
// 함수를 하나의 값처럼 다루어 변수에 할당하여 대입하는 방식
let varB = function () {
  console.log("funcB");
};

varB(); //함수 표현식은 호이스팅 되지않음

// 2. 화살표함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varC(11));
