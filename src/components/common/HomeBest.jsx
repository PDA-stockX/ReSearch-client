import React from "react";
import "./Common.css";

export default function Best({ name, company, totalScore }) {
  return (
    <div className="bestCard">
      <div className="bestInfo">
        <div className="name">{name}</div>
        <div className="company">{company}</div>
      </div>
      <div className="returnRate">{totalScore.toFixed(2)}</div>
    </div>
  );
}
