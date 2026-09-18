function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue()); // 앞에게 false면 뒤에꺼 안봄
console.log(returnTrue() && returnFalse()); // 둘다 호출

console.log(returnTrue() || returnFalse()); // 앞에게 true면 뒤에꺼 호출 안함

function printName(person) {
  //   if (!person) {
  //     console.log("person에 값이 없음");
  //     return;
  //   }
  //   console.log(person.name);

  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
printName({ name: "" });
