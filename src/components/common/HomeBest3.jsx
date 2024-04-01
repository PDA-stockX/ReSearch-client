import React from "react";
import HomeBest from "~/components/common/HomeBest";

export default function HomeBest3({ data }) {
  return (
    <>
      {console.log(data)}
      {data[0].totalScore ? (
        <div className="best3">
          <HomeBest
            rank={1}
            name={data[0].analystName}
            company={data[0].firm}
            totalScore={data[0].totalScore}
          />
          <HomeBest
            rank={2}
            name={data[1].analystName}
            company={data[1].firm}
            totalScore={data[1].totalScore}
          />
          <HomeBest
            rank={3}
            name={data[2].analystName}
            company={data[2].firm}
            totalScore={data[2].totalScore}
          />
        </div>
      ) : (
        <div className="best3">
          {" "}
          <HomeBest name={data[0].analystName} company={data[0].firm} />
          <HomeBest name={data[1].analystName} company={data[1].firm} />
          <HomeBest name={data[2].analystName} company={data[2].firm} />
        </div>
      )}
    </>
  );
}
