import React from "react";
import BucketItems from "./BucketItems";

function BucketList(props) {
  const { BucketList, bucket_delete } = props;

  /*
    bucketList 배열을 forEach 하여
    각 배열의 요소를 내부 함수로 전달하고
    내부 함수에서 연산을 수행한 후
    리턴을 하면 그 결과를 모두 모아서
    새로운 배열 bucketBody 를 만든다.
  */
  const bucketBody = BucketList.map((bucket) => {
    return <BucketItems item={bucket} bucket_delete={bucket_delete} />;
  });

  return (
    <table className="w3-table w3-table-all">
      <thead>
        <th>시작일</th>
        <th>Bucket</th>
        <th>완료일</th>
        <th>취소</th>
      </thead>
      <tbody>{bucketBody}</tbody>
    </table>
  );
}

export default BucketList;
