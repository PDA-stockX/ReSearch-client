import React from "react";
import Best3 from '~/components/common/Best3';
import Rank from '~/components/common/Rank';
import './firm.css';


export default function AchievementScore() {
  const exampleColumn = [
      { columnName: '순위', columnWidth: 40 }, 
      { columnName: '증권사', columnWidth: 50 },
      { columnName: '업종', columnWidth: 100 },
      { columnName: '달성률', columnWidth: 50 }
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
            <h2>달성률 순위</h2>
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
