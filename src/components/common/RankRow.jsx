import React from 'react';

export default function Row({ row, column }) {

    return (
        <div className="rankRow" style={{ borderBottom: "none" }}>
            {row.map((cell, cellIndex) => (
                <div key={cellIndex} className="rankCell" style={{ width: column[cellIndex].columnWidth, WidthtextAlign: cellIndex === column.length - 1 ? "right" : "center" }}>{cell}</div>
            ))}
        </div>
    );
}