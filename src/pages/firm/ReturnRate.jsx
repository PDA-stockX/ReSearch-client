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
      const data = ranking.map((item, index) => [index + 1, item.name, item.returnRate * 100]);
      console.log("왼뢍리ㅏㅇ", data);
      const processedData = data.map((item) => {
        // item의 두번째 요소가 빈 문자열인지 확인 후 처리
        if (item[2] !== "" && item) {
          const roundedValue2 = parseFloat(item[2]).toFixed(2);
          return [item[0], item[1], roundedValue2];
        } else {
          return item;
        }
      });

      const top3 = ranking.slice(0, 3);
      const best = top3.map((item, index) => [index + 1, item.name, { name: "" }, (item.returnRate * 100).toFixed(2) + "%"]);
      console.log(best);
      return { processedData, best };
    }
    fetchData().then(({ processedData, best }) => {
      setData(processedData);
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
