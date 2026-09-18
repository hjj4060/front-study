// math 모듈
// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// // CommonJS 모듈 시스템에 의해서 두개의 값이 Math 모듈로 부터 내보내진다.
// module.exports = {
//   add,
//   sub,
// };

// export { add, sub };
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}
