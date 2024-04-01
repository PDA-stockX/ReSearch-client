import React from "react";
import HomeBest from "~/components/common/HomeBest";

export default function HomeBest3({ data }) {
  return (
    <>
      {console.log(data)}
      {data[0].achievementScore ? (
        <div className="best3">
          <HomeBest
            rank={1}
            name={data[0].name}
            company={data[0].firm.name}
            // totalScore={data[0].achievementScore}
          />
          <HomeBest
            rank={2}
            name={data[1].name}
            company={data[1].firm.name}
            // totalScore={data[1].achievementScore}
          />
          <HomeBest
            rank={3}
            name={data[2].name}
            company={data[2].firm.name}
            // totalScore={data[2].achievementScore}
          />
        </div>
      ) : (
        <div className="best3">
          {" "}
          <HomeBest name={data[0].name} company={data[0].firm.name} />
          <HomeBest name={data[1].name} company={data[1].firm.name} />
          <HomeBest name={data[2].name} company={data[2].firm.name} />
        </div>
      )}
    </>
  );
}
