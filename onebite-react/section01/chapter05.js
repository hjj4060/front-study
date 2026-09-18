// 1. Number type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;
console.log(num3);

let inf = Infinity; // 양 무한대
console.log(inf);
let minf = -Infinity; // 음 무한대
console.log(minf);

let nan = NaN;
console.log(1 * "hello");

// 2. String type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; //` `로 템플릿 리터럴 문법 사용가능
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null type은 아무것도 없다고 명시적으로 선언
let empty = null;

// 5. undifiend는 아무것도 변수 초기화하지않거나 존재하지않는 값 불러올때
let none;
console.log(none);
