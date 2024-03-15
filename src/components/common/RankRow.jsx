import React from 'react';

export default function Row({ row, column }) {

    return (
        <div className="rankRow" style={{ borderBottom: "none", gridTemplateColumns: column.map(col => col.columnWidth + "fr").join(' ') }}>
            {row.map((cell, cellIndex) => (
                <div key={cellIndex} className="rankCell" style={{ textAlign: cellIndex === column.length - 1 ? "right" : "center" }}>{cell}</div>
            ))}
        </div>
    );
}