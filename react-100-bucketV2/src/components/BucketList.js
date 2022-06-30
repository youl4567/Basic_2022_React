import React from "react";
import BucketItems from "./BucketItems";

function BucketList(props) {
  const { BucketList, functions } = props;

  /*
    bucketList 배열을 forEach 하여
    각 배열의 요소를 내부 함수로 전달하고
    내부 함수에서 연산을 수행한 후
    리턴을 하면 그 결과를 모두 모아서
    새로운 배열 bucketBody 를 만든다.

    map 을 사용하여 list comps 를 구현할 때
    각 라인의 설정에 UNIQUE 적인 키값을 지정해 주어야
    데이터를 렌더링할 떄 효율적으로 설정할 수 있다.
  */
  const bucketBody = BucketList.map((bucket) => {
    return (
      <BucketItems item={bucket} functions={functions} key={bucket.b_id} />
    );
  });

  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>중요도</th>
          <th>시작일</th>
          <th>Bucket</th>
          <th>완료일</th>
          <th>취소</th>
        </tr>
      </thead>
      <tbody>{bucketBody}</tbody>
    </table>
  );
}

export default BucketList;
