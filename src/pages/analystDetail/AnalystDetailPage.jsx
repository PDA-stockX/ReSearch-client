import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnalystChat from "./AnalystChat";
import "./AnalystDetail.css";
import AnalystCard from "./AnalystCard";
import AnalystReport from "./AnalystReport";
import RankReport from "~/components/common/RankReport";
import { cInstance } from "~/api/cInstance";
export default function AnalystDetailPage() {
  const [reportList, setReportList] = useState([]);

  const { analId } = useParams();
  const render = (el) => {
    console.log(el);
    return <AnalystChat chat={el} key={el.id} />;
  };

  const exampleColumn = [
    { columnName: "종목명", columnWidth: 40 },
    { columnName: "제목", columnWidth: 70 },
    { columnName: "달성 점수", columnWidth: 60 },
    { columnName: "작성일", columnWidth: 60 },
  ];

  useEffect(() => {
    async function getAnalList() {
      const response = await cInstance.get(`/analysts/reports/${analId}`);

      const tempData = response.data.map((el, index) => {
        console.log(el);
        return [
          el.stockName,
          el.title,
          el.achievementScore,
          el.postedAt.substr(0, 10),
          el.id,
        ];
      });

      setReportList(tempData);
    }
    getAnalList();
  }, [analId]);
  return (
    <div className=" analystDetail">
      <h2>애널리스트 정보</h2>
      <div>
        <AnalystCard analId={analId} />
      </div>
      <h2>리포트</h2>
      {/* <AnalystReport analId={analId} /> */}
      {console.log(reportList)}
      <RankReport data={reportList} column={exampleColumn}></RankReport>
      <h2>오픈 TALK 💬</h2>
      <div style={{ height: "100%" }}>
        <AnalystChat analId={analId} data={reportList} />
      </div>
    </div>
  );
}
