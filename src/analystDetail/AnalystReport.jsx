import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Instance } from "~/api/instance";
import { Link } from "react-router-dom";
export default function AnalystReport(props) {
  const [reportList, setReportList] = useState([]);
  useEffect(() => {
    async function getAnalList() {
      const response = await Instance.get(
        `/analyst/checkReport/${props.analId}`
      );
      setReportList(response.data);
      console.log(reportList);
    }
    getAnalList();
  }, [props]);
  return (
    <div className="reportListCard">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "4%",
          gap: "5%",
        }}
      >
        <div className="reportCardEle" style={{ marginBlock: "2%" }}>
          <div style={{ width: "1   0%" }}>종목명</div>
          <div>제목</div>
          <div style={{ width: "20%" }}>작성일</div>
        </div>
        <hr
          style={{
            width: "100%",
            border: "0px",
            borderTop: "1px solid #030303",
          }}
        />
        {reportList.map((el) => {
          return (
            <div
              key={el.id}
              className="reportCardEle"
              style={{ marginBlock: "2%" }}
            >
              <div style={{ width: "10%" }} key={el.id}>
                {el.ticker}
              </div>

              <Link to={`/detail/report/${el.id}`}>
                {" "}
                <div style={{ color: "" }} key={el.id}>
                  {el.title}
                </div>
              </Link>
              <div style={{ width: "20%" }} key={el.id}>
                {el.postedAt.substr(0, 10)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
