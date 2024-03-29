import React, { useState, useEffect } from "react";
import Best3 from "~/components/common/Best3";
import Rank from "~/components/common/Rank";
import "./firm.css";
import { fetchLikeRank } from "~/api/firms";

const today = new Date();
const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

const exampleColumn = [
  { columnName: "순위", columnWidth: 40 },
  { columnName: "증권사", columnWidth: 130 },
  { columnName: "좋아요", columnWidth: 60 },
];

export default function Popularity() {
  const [data, setData] = useState([]);
  const [best, setBest] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const ranking = await fetchLikeRank();
      const data = ranking.map((item, index) => [index + 1, item.name, item.likeCount]);

      const top3 = ranking.slice(0, 3);
      const best = top3.map((item, index) => [index + 1, item.name, { name: "" }, "👍" + item.likeCount]);

      return { data, best };
    }
    fetchData().then(({ data, best }) => {
      setData(data);
      setBest(best);
    });
  }, []);

  return (
    <>
      {/* <h2>Best 3</h2> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {best.length > 0 && <Best3 data={best}></Best3>}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>좋아요 순위</h2>
        <h5>기준 날짜: {formattedDate}</h5>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Rank column={exampleColumn} data={data}></Rank>
      </div>
    </>
  );
}
