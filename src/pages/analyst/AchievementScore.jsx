import React, { useEffect, useState } from "react";
import Rank from "~/components/common/Rank";
import Best3 from "~/components/common/Best3";
import "./analyst.css";
import { fetchAchievementScoreRank } from "~/api/analysts";

export default function AchievementScore() {
  const [data, setData] = useState([]);
  const [best, setBest] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const ranking = await fetchAchievementScoreRank();
      const data1 = ranking.map((item, index) => [index + 1, item.name, item.sectorNames[0], item.achievementScore]);

      const top3 = ranking.slice(0, 3);
      const data2 = top3.map((item, index) => [index + 1, item.name, item.firm, item.achievementScore + "점"]);

      return { data1, data2 };
    }
    fetchData().then(({ data1, data2 }) => {
      setData(data1);
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
    { columnName: "달성점수", columnWidth: 60 },
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
        <h2>달성률 순위</h2>
        <h5>기준 날짜: {formattedDate}</h5>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {console.log(data)}
        <Rank column={exampleColumn} data={data}></Rank>
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: text }} id="content"></div> */}
    </>
  );
}
