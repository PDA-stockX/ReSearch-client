import React, { useRef, useEffect, useState } from "react";
import "./Common.css";
import Row from "./RankRow"; // Row 컴포넌트 불러오기

export default function Rank({ column, data }) {
  const cardRef = useRef(null);

  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    // 리스트 길이가 변경될 때 카드 길이 조절
    const height = data.length * 30;
    setCardHeight(height);
  }, [data]);

  return (
    <div ref={cardRef} className="rankCard">
      <div className="rankContainer">
        {/* 열 이름 표시 */}
        <div className="rankRow" style={{ gridTemplateColumns: column.map((col) => col.columnWidth + "fr").join(" "), fontWeight: 600 }}>
          {column.map((col, cellIndex) => (
            <div key={cellIndex} className="rankCell" style={{ textAlign: "center" }}>
              {col.columnName}
            </div>
          ))}
        </div>
        {/* 나머지 행 표시 */}
        {data.map((row, rowIndex) => (
          <Row key={rowIndex} row={row} column={column} />
        ))}
      </div>
    </div>
  );
}
