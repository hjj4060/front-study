function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // ececutor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

// then 메서드
// -> 그 후에
// -> resolve() 돼서 fullfilled 상태일때만 실행됨
add10(10)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    // then의 에러버전, reject() 될떄 실행됨, then()은 또 promise를 반환하기떄문에 바로 이어서 catch()가능
    console.log(error);
  });
