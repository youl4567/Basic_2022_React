import React from "react";

function BucketItems(props) {
  const { item, bucket_delete } = props;
  return (
    <tr>
      <td>{item.b_start_date}</td>
      <td>{item.b_bucket}</td>
      <td>{item.b_end_date}</td>
      <td onClick={() => bucket_delete(item.b_id)}>삭제</td>
    </tr>
  );
}

export default BucketItems;
