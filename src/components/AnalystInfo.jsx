import React from "react";
import "~/styles/SearchResult.css";

export default function AnalystInfo({ analyst }) {
  return (
    <>
      <div className="result">
        <p>이름: {analyst.name}</p>
        <p>수익률: {analyst.returnRate}</p>
        <p>달성점수: {analyst.achievementScore}</p>
      </div>
    </>
  );
}
