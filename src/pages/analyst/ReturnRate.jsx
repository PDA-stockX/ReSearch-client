import React from 'react';
import Rank from '~/components/common/Rank';
import Best3 from '~/components/common/Best3';
import './analyst.css';

export default function ReturnRate() {
    const today = new Date();
    // 현재 날짜를 가져옵니다.
    
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    // 원하는 형식으로 날짜를 설정합니다.

    const exampleColumn = [
        { columnName: 'Rank', columnWidth: 40 }, 
        { columnName: 'Analyst', columnWidth: 50 },
        { columnName: 'Sector', columnWidth: 100 },
        { columnName: 'Return', columnWidth: 50 } // 총 width = 240이 되도록?
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
        [11, "Analyst5", "Sector11", 5],
    ];

    const exampleBest = [
        ['최승환', '신한투자증권', '74.6'],
        ['김철수', '미래에셋증권', '68.2'],
        ['박지영', 'KB증권', '59.1']
    ];

    return (
        <>
            <h2>Best 3</h2>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Best3 data={exampleBest}></Best3>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >   
                <h2>수익률 순위</h2>
                <h5>기준 날짜: {formattedDate}</h5>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Rank column={exampleColumn} data={exampleData}></Rank>
            </div>
        </>
    )
}
