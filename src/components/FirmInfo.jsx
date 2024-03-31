import React from "react";
import "~/styles/SearchResult.css";

export default function FirmInfo({ firm }) {
  return (
    <>
      <div className="result">
        <p>이름: {firm.name}</p>
        <p>수익률: {firm.returnRate}</p>
        <p>달성점수: {firm.achievementScore}</p>
      </div>
    </>
  );
}
