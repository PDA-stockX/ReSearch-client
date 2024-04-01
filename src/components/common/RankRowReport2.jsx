import React, { useState, useEffect } from "react";
import { searchAnalysts } from "~/api/analysts";
import { searchFirms } from "~/api/firms";
import { useNavigate } from "react-router-dom";
export default function RowReport2({ row, column }) {
  const [analystId, setAnalystId] = useState(null);
  const [firmId, setFirmId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(row);
  }, [column, row]);

  const onMouseOver = (e) => {
    e.target.style.color = "#5C68E2"; // 마우스 오버 시 글자 색 변경
  };
  const onMouseOut = (e) => {
    e.target.style.color = ""; // 마우스 아웃 시 글자 색 원래대로 되돌리기
  };

  return (
    <div
      className="rankRow"
      style={{
        borderBottom: "none",
        gridTemplateColumns: column
          .map((col) => col.columnWidth + "fr")
          .join(" "),
      }}
    >
      {
        <div
          className="rankCell"
          style={{
            textAlign: "center",
          }}
        >
          {row.analyst ? row.analyst.name : null}
        </div>
      }
      {
        <div
          className="rankCell"
          style={{
            textAlign: "center",
          }}
        >
          {row.id ? (
            <a
              href={`/detail/report/${row.id}`}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
            >
              {row.stockName ? row.stockName : null}
            </a>
          ) : (
            <></>
          )}
        </div>
      }
      {
        <div
          className="rankCell"
          style={{
            textAlign: "center",
          }}
        >
          {row.title ? row.title : null}
        </div>
      }
      {
        <div
          className="rankCell"
          style={{
            textAlign: "center",
          }}
        >
          {row.firm ? row.firm.name : null}
        </div>
      }
    </div>
  );
}
