import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Instance } from "~/api/instance";
import { Link } from "react-router-dom";
export default function BookmarkReportList() {
  const [reportList, setReportList] = useState([]);
  useEffect(() => {
    async function getReportList() {
      const response = await Instance.get("/bookmarks/my-report");
      console.log(response.data);
      setReportList(response.data);
    }
    getReportList();
  }, []);
  return (
    <div className="reportListCard" style={{ marginTop: "5%" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          margin: "2%",
        }}
      >
        <div className="reportCardEle" style={{ marginBlock: "2%" }}>
          <div style={{ width: "15%" }}>종목명</div>
          <div style={{ width: "50%" }}>제목</div>
          <div style={{ width: "15%" }}>증권사</div>
          <div style={{ width: "15%" }}>작성일</div>
        </div>
        <hr
          style={{
            width: "100%",
            border: "0px",
            borderTop: "1px solid #030303",
          }}
        />
        {reportList.map((el) => {
          console.log(el);
          return (
            <div
              key={el.id}
              className="reportCardEle"
              style={{ marginBlock: "2%" }}
            >
              <div style={{ width: "15%" }} key={el.report.id}>
                {el.report.stockName}
              </div>

              <Link
                style={{ width: "50%" }}
                to={`/detail/report/${el.report.id}`}
              >
                {" "}
                <div key={el.id}>{el.report.title}</div>
              </Link>
              <div style={{ width: "15%" }}>{el.firm}</div>
              <div style={{ width: "15%" }} key={el.id}>
                {el.report.postedAt.substr(0, 10)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
