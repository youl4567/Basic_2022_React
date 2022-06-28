const student = {
  st_num: 1,
  st_name: "홍길동",
  st_grade: 3,
  st_dept: "컴공과",
};

console.table(student);

console.log(student.st_name);
console.log(student.st_num);

// js 에서 JSON 객체 데이터는 자체를 const(read only)로 선언을 하여도
// 각 속성(요소 데이터)는 변경할 수 있다.
student.st_name = "이몽룡";
console.log(student);

const { st_name, st_dept } = student;
console.log(st_name, st_dept);
