//호이스팅 : 끌어올린다.
//  밑에 작성된 선언문들을 이 코드를 실행하기전에 최상단에 끌어올려서 실행

let area = getArea(10, 20);
console.log(area);

function getArea(width, height) {
  function another() {
    //중첩함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}
