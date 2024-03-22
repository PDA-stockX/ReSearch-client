import React from 'react'
import Best3 from '~/components/common/Best3';
import Rank from '~/components/common/Rank';
import './analyst.css';


export default function Popularity() {
    
    // 현재 날짜
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const exampleColumn = [
        { columnName: '순위', columnWidth: 40 }, 
        { columnName: '애널리스트', columnWidth: 50 },
        { columnName: '즐겨찾기 수', columnWidth: 60 } // 총 width = 240이 되도록?
    ];

    const exampleData = [
        [1, "Analyst1", 10],
        [2, "Analyst2", 8],
        [3, "Analyst3", 7],
        [4, "Analyst4", 6],
        [5, "Analyst5", 5],
        [6, "Analyst6", 4],
        [7, "Analyst7", 3],
        [8, "Analyst8", 2],
        [9, "Analyst9", 1],
        [10, "Analyst10", 0],
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
                <h2>즐겨찾기 순위</h2>
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
