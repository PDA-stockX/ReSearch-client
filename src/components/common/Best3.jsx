import React from "react";
import Best from "~/components/common/Best";

export default function Best3({ data }) {
  return (
    <>
      {console.log(data[0][2])}
      {data[0][2] ? (
        <div className="best3">
          <Best rank={1} name={data[0][1]} company={data[0][2].name} returnRate={data[0][3]} />
          <Best rank={2} name={data[1][1]} company={data[1][2].name} returnRate={data[1][3]} />
          <Best rank={3} name={data[2][1]} company={data[2][2].name} returnRate={data[2][3]} />
        </div>
      ) : (
        <div className="best3">
          {" "}
          <Best name={data[0][1]} company={data[0][2].name} />
          <Best name={data[1][1]} company={data[1][2].name} />
          <Best name={data[2][1]} company={data[2][2].name} />
        </div>
      )}
    </>
  );
}
