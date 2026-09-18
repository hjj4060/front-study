//1. 배열순회

let arr1 = [1, 2, 3];

for (let item of arr1) {
  console.log(item);
}

// 2. 객체순회
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// 2-1. Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

for (let key of keys) {
  console.log(key, person[key]);
}

// 2-2. Obejct.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);

// 2-3 for in
// 객체만을 위한 for문 , for of 이랑 같음
for (let key in person) {
  console.log(key);
}
