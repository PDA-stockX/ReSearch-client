// AnalystEarningRate.jsx
import React from 'react';
import Rank from '~/components/common/Rank';

export default function AnalystEarningRate() {
    const exampleColumn = [
        { columnName: 'Rank', columnWidth: 30 }, // 열 너비 정보 추가
        { columnName: 'Analyst', columnWidth: 50 }, // 열 너비 정보 추가
        { columnName: 'Sector', columnWidth: 120 }, // 열 너비 정보 추가
        { columnName: 'Earnings', columnWidth: 50 } // 열 너비 정보 추가
    ];

    const exampleData = [
        [1, "Analyst1", "Sector1", 10],
        [2, "Analyst2", "Sector2", 8],
        [3, "Analyst3", "Sector3", 7],
        [4, "Analyst4", "Sector4", 6],
        [5, "Analyst5", "Sector5", 5],
        [6, "Analyst5", "Sector5", 5],
        [7, "Analyst5", "Sector5", 5],
        [8, "Analyst5", "Sector5", 5],
        [9, "Analyst5", "Sector5", 5],
        [10, "Analyst5", "Sector5", 5],
    ];

    return (
        <>
            <div>EarningRate</div>
            <Rank column={exampleColumn} data={exampleData}></Rank>
        </>
    )
}
