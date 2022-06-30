const json_array = [];

for (let i = 0; i < 10; i++) {
  const min = 10;
  const max = 100;
  let rnd = Math.floor(Math.random() * (max - min) + min);

  json_array.push(rnd);
}
console.log("==========");
console.log(json_array);
/*
JS 에서 기존의 배열을 새로운 배열로 복제를 하는 경우가 자주 있다.
*/
const new_array1 = json_array.slice();
const new_array2 = Array.from(json_array);
const new_array3 = [];
for (let i = 0; i < json_array.length; i++) {
  new_array3[i] = json_array[i];
}

const new_array4 = json_array.concat();
console.log(new_array4);
