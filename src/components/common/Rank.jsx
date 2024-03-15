// Rank.jsx
import React from 'react';
import './Common.css';

export default function Rank({ column, data }) {
    // 열 이름만 포함된 배열
    const columnNames = column.map(col => col.columnName);
    // 그리드의 각 행에 표시될 데이터
    const rowData = [columnNames, ...data];
    console.log(column[1].columnWidth)

    return (
        <div className="rankCard">
            <div className="rankContainer">
                {/* 열 이름과 각 데이터를 표시하는 행 추가 */}
                {rowData.map((row, rowIndex) => (
                    <div key={rowIndex} className="rankRow">
                        {row.map((cell, cellIndex) => (
                            <div key={cellIndex} className="rankCell" style={{width: column[cellIndex].columnWidth}}>{cell}</div> // 열 너비 적용
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}