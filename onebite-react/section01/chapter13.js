// 1. 콜백함수는 다른 함수의 인자(매개변수)로 전달되어, 특정 시점에 호출되는 함수이다.
function main(value) {
  console.log(1);
  value();
}

// sub 함수가 콜백함수이다.
var sub = () => {
  console.log("i am sub");
};

main(sub);

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});
