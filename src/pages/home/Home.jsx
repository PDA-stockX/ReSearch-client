import React, { useEffect, useState } from "react";
import Rank from "~/components/common/Rank";
import HomeBest3 from "~/components/common/HomeBest3";
import axios from "axios";
import TodayReportList from "./TodayReportList";
import { useNavigate } from "react-router-dom";
import { cInstance } from "~/api/cInstance";
import RankReport from "~/components/common/RankReport";
export default function Home() {
  const [todayRecommend, setTodayRecommned] = useState([]);
  const [todayReportList, setTodayReportList] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    async function getToday() {
      const response = await cInstance.get("/analysts/anals/today");
      console.log(response);
      const response2 = await cInstance.get("/today/reports");
      console.log(response2);
      const tempList = await response2.data.map((el) => {
        [el.analystName, el.stokeName, el.title, el.firm, el.id];
      });
      setTodayRecommned(response.data);
    }

    getToday();
  }, []);
  const exampleColumn = [
    { columnName: "애널리스트", columnWidth: 40 },
    { columnName: "종목명", columnWidth: 70 },
    { columnName: "제목", columnWidth: 60 },
    { columnName: "증권사", columnWidth: 60 },
  ];
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
        {console.log(todayRecommend.data)}
        {todayRecommend.length > 0 && (
          <HomeBest3 data={todayRecommend}></HomeBest3>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>오늘의 리포트</h2>
        {/* <h5>기준 날짜: {formattedDate}</h5> */}
      </div>
      {/* <TodayReportList />/ */}
      <RankReport column={exampleColumn} data={todayReportList} />
    </>
  );
}
