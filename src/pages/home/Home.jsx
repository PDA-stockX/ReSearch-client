import React, { useEffect, useState } from "react";
import Rank from "~/components/common/Rank";
import Best3 from "~/components/common/Best3";
import axios from "axios";
export default function Home() {
  const [todayRecommend, setTodayRecommned] = useState([]);
  useEffect(() => {
    async function getToday() {
      const response = await axios.get(
        "http://localhost:3000/todayRecommend/getRecommend"
      );
      console.log(response);
      setTodayRecommned(response);
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
        {todayRecommend.length > 0 && <Best3 data={todayRecommend}></Best3>}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>달성률 순위</h2>
        {/* <h5>기준 날짜: {formattedDate}</h5> */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Rank column={exampleColumn} data={data}></Rank> */}
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: text }} id="content"></div> */}
    </>
  );
}
