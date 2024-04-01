import React, { useEffect, useState } from "react";
import Rank from "~/components/common/Rank";
import HomeBest3 from "~/components/common/HomeBest3";
import axios from "axios";
import TodayReportList from "./TodayReportList";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [todayRecommend, setTodayRecommned] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    async function getToday() {
      const response = await axios.get(
        "http://localhost:3000/analysts/anals/today"
      );
      console.log(response);
      setTodayRecommned(response.data);
    }
    getToday();
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
      {/* <TodayReportList /> */}
    </>
  );
}
