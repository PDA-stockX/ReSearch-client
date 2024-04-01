import React, { useState, useEffect } from "react";
import { searchAnalysts } from "~/api/analysts";
import { searchFirms } from "~/api/firms";

export default function Row({ row, column }) {
  const [analystId, setAnalystId] = useState(null);
  const [firmId, setFirmId] = useState(null);

  useEffect(() => {
    if (column[1].columnName === "애널리스트" && row[1]) {
      // 애널리스트 검색 함수 호출
      searchAnalysts(row[1])
        .then((result) => {
          // 결과가 있다면 첫 번째 애널리스트의 ID를 설정
          if (result.length > 0) {
            setAnalystId(result[0].id);
          }
        })
        .catch((error) => {
          console.error("애널리스트 검색 에러:", error);
        });
    } else if (column[1].columnName === "증권사" && row[1]) {
      // 증권사 검색 함수 호출
      searchFirms(row[1])
        .then((result) => {
          // 결과가 있다면 첫 번째 증권사의 ID를 설정
          if (result.length > 0) {
            setFirmId(result[0].id);
          }
        })
        .catch((error) => {
          console.error("증권사 검색 에러:", error);
        });
    }
  }, [column, row]);

  const onMouseOver = (e) => {
    e.target.style.color = "#5C68E2"; // 마우스 오버 시 글자 색 변경
  };
  const onMouseOut = (e) => {
    e.target.style.color = ""; // 마우스 아웃 시 글자 색 원래대로 되돌리기
  };

  return (
    <div className="rankRow" style={{ borderBottom: "none", gridTemplateColumns: column.map((col) => col.columnWidth + "fr").join(" ") }}>
      {row.map((cell, cellIndex) => (
        <div
          key={cellIndex}
          className="rankCell"
          style={{
            textAlign: "center",
          }}
        >
          {cell <= 3 && cellIndex === 0 && (
            <ion-icon name="ribbon-outline" style={{ marginRight: "5px", color: cell === 1 ? "#D5A11E" : cell === 2 ? "#A3A3A3" : cell === 3 ? "#CD7F32" : "#030303" }} />
          )}
          {cellIndex === 1 && column[1].columnName === "애널리스트" ? (
            <a href={`/detail/analyst/${analystId}`} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
              {cell}
            </a>
          ) : cellIndex === 1 && column[1].columnName === "증권사" ? (
            <a href={`/detail/firm/${firmId}`} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
              {cell}
            </a>
          ) : cell <= 3 && cellIndex === 0 ? (
            ""
          ) : (
            cell
          )}
        </div>
      ))}
    </div>
  );
}
