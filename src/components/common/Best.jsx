import React from "react";
import "./Common.css";

export default function Best({ rank, name, company, returnRate }) {
  const color = ["#d5a11e", "#A3A3A3", "#CD7F32"];
  return (
    <div className="bestCard">
      <div className="bestInfo">
        <div className="rank" style={{ color: `${color[rank - 1]}` }}>
          {rank}
        </div>
        <div className="name">{name}</div>
        <div className="company">{company}</div>
      </div>
      {/* <div className="returnRate">{returnRate}</div> */}
    </div>
  );
}
