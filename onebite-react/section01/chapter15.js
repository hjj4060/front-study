//1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티(객체 속성)
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
  extra: {},
  10: 20,
  "like cat": true,
};

// 객체 프로퍼티 다루는 방법
// 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age2"];

let property = "hobby";
let hobby = person[property];

person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

console.log(JSON.parse(JSON.stringify(person))); //json 딥카피 기능

// 프로퍼티 수정
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 프로퍼티 삭제
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 프로퍼티 존재 유무 확인
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1, result2);
