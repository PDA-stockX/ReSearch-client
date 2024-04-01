import React, { useState, useEffect } from "react";
import { searchAnalysts } from "~/api/analysts";
import { searchFirms } from "~/api/firms";
import "./Common.css";

const colors = [
  "linear-gradient(124deg, #fffad2 0%, #ddac17 20%, #ffea95 45%, #e4c440 80%)",
  "linear-gradient(124deg, #dfdfdf 0%, #8a8a8a 20%, #d1d1d1 45%, #9c9c9c 80%)",
  "linear-gradient(124deg, #e28b4f 0%, #cd7132 20%, #f5ac7a 50%, #b85f22 80%)",
];

export default function Best({ rank, name, company, totalScore }) {
  const [analystId, setAnalystId] = useState(null);
  const [firmId, setFirmId] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const analyst = await searchAnalysts(name);
      const firm = await searchFirms(company);
      return { analyst, firm };
    }
    fetchData().then(({ analyst, firm }) => {
      if (analyst.length > 0) {
        setAnalystId(analyst[0].id);
      }
      if (firm.length > 0) {
        setFirmId(firm[0].id);
      }
    });
  }, [name, company]);

  return (
    <div className="bestCard">
      <div className="bestInfo">
        <div
          className="rank"
          style={{ fontSize: "1.65em", background: `${colors[rank - 1]}` }}
        >
          {rank}
        </div>
        <div className="name">
          <a href={`/detail/analyst/${analystId}`}>{name}</a>
        </div>
        <div className="company">
          <a href={`/detail/firm/${firmId}`}>{company}</a>
        </div>
      </div>
      {console.log(typeof totalScore)}
      <div className="returnRate">{totalScore}</div>
    </div>
  );
}
