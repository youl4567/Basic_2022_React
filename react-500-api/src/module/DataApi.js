/*
    fetch 함수를 사용하여 data.go.kr 의 API 연결하기
*/

const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey =
  "Q2Suz1H%2FN8R9uAF9I33ChZ2D6ftbMVJ9lA8nLcwVADIfaA0k8iq42kIXmy6ILg6JJAK9%2Fxi3MCze46Th4YvaTg%3D%3D";

const fetchData = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRows=100`;
  console.log(serviceURL);
  const response = await fetch(serviceURL);
  const json = await response.json();
  return json;
};

export { fetchData };
