import React from "react";
import { useParams } from "react-router-dom";
import ReportDetailCard from "./ReportDetailCard";
export default function reportDetailPage() {
  const { reportId } = useParams;
  return (
    <div
    // style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <button>뒤로가기</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReportDetailCard />
      </div>
    </div>
  );
}
