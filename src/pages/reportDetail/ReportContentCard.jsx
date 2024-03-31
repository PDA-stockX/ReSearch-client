import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { HiArrowSmRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
export default function ReportContentCard(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pdf, setPdf] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function getReportDetail() {
      const response = await axios.get(
        `http://localhost:3000/reports/${props.reportId}`
      );
      console.log(response);
      setTitle(response.data.title);
      setContent(response.data.summary);
      setPdf(response.data.pdfUrl);
    }
    getReportDetail();
  }, [props.reportId]);

  const goPDF = useCallback(() => {
    navigate("/");
  });

  return (
    <div className="reportContentCard">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "8%",
          gap: "25px",
          position: "relative",
          justifyItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-7%",
            right: "3%",
            display: "flex",
            justifyContent: "center",
            border: "solid 1px",
            borderRadius: "7%",
            padding: "2%",
            justifyItems: "center",
          }}
        >
          <Link
            style={{
              display: "inline-flex",
              flexDirection: "column",
              justifyItems: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HiArrowSmRight size="30" />
            리포트 보기
          </Link>
        </div>
        <h2>제목 : {title}</h2>
        <h3>내용 : {content}</h3>
      </div>
    </div>
  );
}
