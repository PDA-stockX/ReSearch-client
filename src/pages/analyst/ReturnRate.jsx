import React, { useEffect, useState } from "react";
import Rank from "~/components/common/Rank";
import Best3 from "~/components/common/Best3";
import "./analyst.css";
import { fetchReturnRateRank } from "~/api/analysts";

export default function ReturnRate() {
  const [data, setData] = useState([]);
  const [best, setBest] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const ranking = await fetchReturnRateRank();
      const data1 = ranking.map((item, index) => [index + 1, item.name, item.sectorNames[0], item.returnRate * 100]);
      const processedData = data1.map((item) => {
        // item의 두번째 요소가 빈 문자열인지 확인 후 처리
        if (item[2] !== "" && item) {
          const roundedValue3 = parseFloat(item[3]).toFixed(2);
          return [item[0], item[1], item[2], roundedValue3];
        } else {
          return item;
        }
      });

      const top3 = ranking.slice(0, 3);
      const data2 = top3.map((item, index) => [index + 1, item.name, item.firm, (item.returnRate * 100).toFixed(2) + "%"]);

      return { processedData, data2 };
    }
    fetchData().then(({ processedData, data2 }) => {
      setData(processedData);
      setBest(data2);
    });
  }, []);

  // 현재 날짜
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  const exampleColumn = [
    { columnName: "순위", columnWidth: 40 },
    { columnName: "애널리스트", columnWidth: 70 },
    { columnName: "업종", columnWidth: 60 },
    { columnName: "수익률", columnWidth: 60 },
  ];

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
      {/* <div dangerouslySetInnerHTML={{ __html: text }} id="content"></div> */}
    </>
  );
}
