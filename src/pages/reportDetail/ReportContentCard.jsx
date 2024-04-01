import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { HiArrowSmRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { cInstance } from "~/api/cInstance";
export default function ReportContentCard(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pdf, setPdf] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("page");
    async function getReportDetail() {
      const response = await cInstance.get(`/reports/${props.reportId}`);
      console.log(response);
      setTitle(response.data.title);
      setContent(response.data.summary);
      setPdf(response.data.pdfUrl);
    }
    getReportDetail();
  }, [props.reportId]);

  const goPDF = useCallback(() => {
    <a href={`${pdf}`}>네이버로 이동</a>;
  }, [props]);

  return (
    <div className="reportContentCard">
      <div
        style={{
          display: "flex",

          margin: "8%",
          // gap: "10%",
          position: "relative",
          justifyItems: "end",
          justifyContent: "space-between",
        }}
      >
        <h2>제목 : {title}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            border: "solid 1px",
            borderRadius: "7%",
            padding: "2%",
            justifyItems: "center",
          }}
        >
          <Link
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "end",
              justifyContent: "end",
              alignItems: "center",
            }}
            to={pdf}
          >
            <HiArrowSmRight size="30" />
            리포트 보기
          </Link>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ margin: "8%" }}
      ></div>{" "}
    </div>
  );
}
