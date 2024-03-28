import React, { useEffect, useState } from "react";
import Rank from "~/components/common/Rank";
import Best3 from "~/components/common/Best3";
import "./firm.css";
import { fetchReturnRateRank } from "~/api/firms";

const today = new Date();
const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

const exampleColumn = [
  { columnName: "순위", columnWidth: 40 },
  { columnName: "증권사", columnWidth: 130 },
  { columnName: "수익률", columnWidth: 60 }, // 총 width = 230이 되도록?
];

export default function ReturnRate() {
  const [data, setData] = useState([]);
  const [best, setBest] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const ranking = await fetchReturnRateRank();
      const data = ranking.map((item, index) => [index + 1, item.name, item.returnRate]);

      const top3 = ranking.slice(0, 3);
      const best = top3.map((item, index) => [index + 1, item.name, { name: "" }, item.returnRate + "%"]);
      console.log(best);
      return { data, best };
    }
    fetchData().then(({ data, best }) => {
      setData(data);
      setBest(best);
    });
  }, []);

  return (
    <>
      <h2>Best 3</h2>
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
        <h2>수익률 순위</h2>
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
