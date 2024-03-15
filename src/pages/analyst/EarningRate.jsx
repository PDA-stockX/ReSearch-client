// AnalystEarningRate.jsx
import React from 'react';
import Rank from '~/components/common/Rank';
import Best3 from '~/components/common/Best3';
import NeedLogin from '~/components/common/NeedLogin';

export default function AnalystEarningRate() {
    const exampleColumn = [
        { columnName: 'Rank', columnWidth: 50 }, // 열 너비 정보 추가
        { columnName: 'Analyst', columnWidth: 60 }, // 열 너비 정보 추가
        { columnName: 'Sector', columnWidth: 140 }, // 열 너비 정보 추가
        { columnName: 'Earnings', columnWidth: 60 } // 열 너비 정보 추가
    ];

    const exampleData = [
        [1, "Analyst1", "Sector1", 10],
        [2, "Analyst2", "Sector2", 8],
        [3, "Analyst3", "Sector3", 7],
        [4, "Analyst4", "Sector4", 6],
        [5, "Analyst5", "Sector5", 5],
        [6, "Analyst5", "Sector6", 5],
        [7, "Analyst5", "Sector7", 5],
        [8, "Analyst5", "Sector8", 5],
        [9, "Analyst5", "Sector9", 5],
        [10, "Analyst5", "Sector10", 5],
    ];

    const exampleBest = [
        ['최승환', '신한투자증권', '74.6'],
        ['김철수', '미래에셋증권', '68.2'],
        ['박지영', 'KB증권', '59.1']
    ];

    return (
        <>
            <div>EarningRate</div>
            <Rank column={exampleColumn} data={exampleData}></Rank>
            {/* <Best3 data={exampleBest}></Best3> */}
            <NeedLogin></NeedLogin>
        </>
    )
}
