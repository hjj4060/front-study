// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = { a: 1 }; 상수 객체라서 불가능
// 아래 추가 수정 삭제는 가능
animal.age = 2;
animal.name = "까망이";
delete animal.color;

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티
const person = {
  name: "이정환",

  // 메서드
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
