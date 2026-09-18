// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = "20";

const result = num + str; // num이 자연스럽게 str타입으로 변환
console.log(result);

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
let str1 = "10";
let strToNum1 = Number(str1); // Number라는 내장함수로 명시적으로 숫자변환
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2); // 숫자만 포함되지않은 문자열 변환가능, 숫자가 앞에 나와있어야된다.
console.log(strToNum2);

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다.");
