//1. 배열생성
let arrA = new Array(); //배열 생성자
let arrB = []; // 배열 리터럴(대부분 사용)

//배열 생성과 동시에 초기화, 자료형 상관없이 다 넣을수 있음
let arrC = [1, 2, 3, undefined, null, "string", () => {}, {}, []];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];
arrC[0] = "hello";

console.log(item1, item2);
