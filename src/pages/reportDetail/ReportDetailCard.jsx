import React, { useState, useEffect } from "react";
import "./reportDetail.css";
import axios from "axios";
export default function ReportDetailCard(props) {
  const [reportInfo, setReportInfo] = useState({});

  useEffect(() => {
    console.log(props.reportId);
    async function fetchData() {
      const res = await axios.get(
        `http://localhost:3000/reports/${props.reportId}`
      );
      console.log(res.data);
      setReportInfo({
        analystName: res.data.analyst.name,
        firm: res.data.firm.name,
        postedAt: res.data.postedAt,
        title: res.data.title,
        targetPrice: res.data.targetPrice,
        investmentOpinion: res.data.investmentOpinion,
      });
    }
    fetchData();
  }, [props]);
  return (
    <div className="reportDetailCard">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "8%",
          gap: "25px",
          width: "100%",
          justifyItems: "center",
        }}
      >
        <div className="reportDetailCardEle">
          <div className="reportDetailCardLeft">애널리스트</div>
          <div className="reportDetailCardRight">{reportInfo.analystName}</div>
        </div>
        <div className="reportDetailCardEle">
          <div className="reportDetailCardLeft">소속기관</div>
          <div className="reportDetailCardRight">{reportInfo.firm}</div>
        </div>{" "}
        <div className="reportDetailCardEle">
          <div className="reportDetailCardLeft">작성일</div>
          <div className="reportDetailCardRight">{reportInfo.postedAt}</div>
        </div>{" "}
        <div className="reportDetailCardEle">
          <div className="reportDetailCardLeft">종목명</div>
          <div className="reportDetailCardRight">{reportInfo.analystName}</div>
        </div>{" "}
        <div className="reportDetailCardEle">
          <div className="reportDetailCardLeft">제목</div>
          <div className="reportDetailCardRight">{reportInfo.title}</div>
        </div>{" "}
        <div className="reportDetailCardEle">
          <div className="reportDetailCardLeft">목표가</div>
          <div className="reportDetailCardRight">{reportInfo.targetPrice}</div>
        </div>
        <div className="reportDetailCardEle">
          <div className="reportDetailCardLeft">투자 의견</div>
          <div className="reportDetailCardRight">
            {reportInfo.investmentOpinion}
          </div>
        </div>
      </div>
    </div>
  );
}
