// async
// 어떤 함수를 비동기 함수로 만들어주느 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}

// awiat
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
async function printData() {
  //   getData().then((result) => {
  //     console.log(result);
  //   });
  const data = await getData(); // await 키워드를 붙여주면  then 메서드를 쓰지않아도 알아서 getData 함수가 반환되는 promise가 종료되기를 기다린다.
  console.log(data);
}

printData();
