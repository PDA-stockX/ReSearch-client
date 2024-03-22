import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ReportContentCard(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function getReportDetail() {
      const response = await axios.get(
        `http://localhost:3000/reports/${props.reportId}`
      );
      console.log(response);
      setTitle(response.data.title);
      setContent(response.data.summary);
    }
    getReportDetail();
  });
  return (
    <div className="reportContentCard">
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
        <h2>제목 : {title}</h2>
        <h3>내용 : {content}</h3>
      </div>
    </div>
  );
}
