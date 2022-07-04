const End2 = ({ name }) => {
  // 현재 comp 에서만 사용할 수 있도록 private style 을 지정하고
  // tag comp 에 style 키워드를 사용하여 지정한다
  // 단, style의 속성이름은 kebab_case(font-style)를 사용할 수 없고
  // 마이너스 기호를 제거하고 Camel-case 로 사용해야 한다.
  // 속성 값들은 만드시 문자열로 만들어야 한다.
  const h1Style = {
    color: "blue",
    fontStyle: "italic",
  };
  /*
jsx 의 tag 규칙
여러 태그를 사용할 때 밙드시 가장 바깥쪽을 감싸는 그룹 태그가 있어야한다.
불가능
<div></
<div></
<div></
<p></

가능
<>
<div></
<div></
<div></
<p></
</>

*/
  return (
    <>
      <h1 style={h1Style}>내가받은 name = {name}</h1>
    </>
  );
};

export default End2;
