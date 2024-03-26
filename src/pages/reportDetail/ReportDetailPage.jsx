import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReportDetailCard from "./ReportDetailCard";
import ReportLike from "./ReportLike";
import ReportContentCard from "./ReportContentCard";
export default function ReportDetailPage() {
  const [photoUrl, setPhotoUrl] = useState("");
  const { reportId } = useParams();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <h2>리포트</h2>
      <ReportDetailCard reportId={reportId} />
      <ReportLike reportId={reportId} />
      <h2>리포트 내용</h2>
      <ReportContentCard reportId={reportId} />
    </div>
  );
}
