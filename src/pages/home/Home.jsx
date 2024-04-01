import React, { useEffect, useState } from "react";
import Rank from "~/components/common/Rank";
import HomeBest3 from "~/components/common/HomeBest3";
import axios from "axios";
import TodayReportList from "./TodayReportList";
import { useNavigate } from "react-router-dom";
import { cInstance } from "~/api/cInstance";
import RankReport2 from "~/components/common/RankReport2";
export default function Home() {
  const [todayRecommend, setTodayRecommned] = useState([{}]);
  const [todayReportList, setTodayReportList] = useState([{}]);
  const navigator = useNavigate();
  useEffect(() => {
    async function getToday() {
      const response = await cInstance.get("/today/anals");
      console.log(response.data);
      setTodayRecommned(response.data);

      // [
      //   (el.analystName, el.stokeName, el.title, el.firm, el.id)
      // ];

      // response.data.foreach((e) => {
      //   console.log(e);
      //   setTodayRecommned((el) => [...el]);
      // });
    }
    async function getToday2() {
      const response2 = await cInstance.get("/today/reports");
      console.log(JSON.parse(response2.data));
      setTodayReportList(JSON.parse(response2.data));
    }
    getToday2();
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
        {console.log(todayRecommend)}
        {todayRecommend.length > 2 && (
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
      <RankReport2 column={exampleColumn} data={todayReportList} />
    </>
  );
}
