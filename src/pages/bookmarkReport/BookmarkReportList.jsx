import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Instance } from "~/api/instance";
import { Link } from "react-router-dom";
export default function BookmarkReportList() {
  const [reportList, setReportList] = useState([]);
  useEffect(() => {
    async function getReportList() {
      const response = await Instance.get("/bookmark/myReport");
      console.log(response.data);
      setReportList(response.data);
    }
    getReportList();
    console.log(reportList);
  }, []);
  return (
    <div className="reportListCard" style={{ marginTop: "5%" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "2%",
          gap: "5px",
        }}
      >
        <div className="reportCardEle" style={{ marginBlock: "2%" }}>
          <div style={{ width: "10%" }}>종목명</div>
          <div style={{ width: "40%" }}>제목</div>
          <div>증권사</div>
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
          console.log(el);
          return (
            <div
              key={el.id}
              className="reportCardEle"
              style={{ marginBlock: "2%" }}
            >
              <div style={{ width: "10%" }} key={el.report.id}>
                {el.report.ticker}
              </div>

              <Link style={{ width: "40%" }} to={`/detail/report/${el.id}`}>
                {" "}
                <div key={el.id}>{el.report.title}</div>
              </Link>
              <div>{el.firm}</div>
              <div style={{ width: "20%" }} key={el.id}>
                {el.report.postedAt.substr(0, 10)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
