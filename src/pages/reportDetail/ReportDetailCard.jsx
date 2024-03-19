import React from "react";
import "./reportDetail.css";
export default function ReportDetailCard(ports) {
  return (
    <div className="reportDetailCard">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "5%",
          gap: "3%",
        }}
      >
        <div style={{ display: "flex", gap: "5%" }}>
          <div className="reportDetailCardLeft">애널리스트</div>
          <div className="reportDetailCardRight">박지민</div>
        </div>
        <div>
          <div className="reportDetailCardLeft">애널리스트</div>
          <div className="reportDetailCardRight">박지민</div>
        </div>{" "}
        <div>
          <div className="reportDetailCardLeft">애널리스트</div>
          <div className="reportDetailCardRight">박지민</div>
        </div>{" "}
        <div>
          <div className="reportDetailCardLeft">애널리스트</div>
          <div className="reportDetailCardRight">박지민</div>
        </div>{" "}
        <div>
          <div className="reportDetailCardLeft">애널리스트</div>
          <div className="reportDetailCardRight">박지민</div>
        </div>{" "}
        <div>
          <div className="reportDetailCardLeft">애널리스트</div>
          <div className="reportDetailCardRight">박지민</div>
        </div>
      </div>
    </div>
  );
}
