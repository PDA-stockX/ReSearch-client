import React, { useEffect, useState } from 'react';
import Best3 from '~/components/common/Best3';
import Rank from '~/components/common/Rank';
import './firm.css';
import { fetchAchievementScoreRank } from "~/api/firms";

export default function AchievementScore() {
    const [data, setData] = useState([]);
    const [best, setBest] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const ranking = await fetchAchievementScoreRank();
            const data = ranking.map((item, index) => [
                index + 1,
                item.name,
                item.achievementScore,
            ]);

            const top3 = ranking.slice(0, 3);
            const best = top3.map((item, index) => [
                index + 1,
                item.name,
                { name: "" },
                item.achievementScore,
            ]);

            return { data, best }
        }
        fetchData().then(({ data, best }) => {
            setData(data);
            setBest(best);
        });
    }, [])

    const exampleColumn = [
        { columnName: '순위', columnWidth: 40 },
        { columnName: '증권사', columnWidth: 150 },
        { columnName: '달성률', columnWidth: 50 }
    ];

    const exampleData = [
        [1, "Firm1", 10],
        [2, "Firm2", 8],
        [3, "Firm3", 7],
        [4, "Firm4", 6],
        [5, "Firm5", 5],
        [6, "Firm5", 5],
        [7, "Firm5", 5],
        [8, "Firm5", 5],
        [9, "Firm5", 5],
        [10, "Firm5", 5],
        [11, "Firm5", 5],
    ];

    const exampleBest = [
        ['', '신한투자증권', { name: "" }, '74.6'],
        ['', '미래에셋증권', { name: "" }, '68.2'],
        ['', 'KB증권', { name: "" }, '59.1']
    ];

    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

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
                {<Best3 data={exampleBest}></Best3>}
                {/* {best.length > 0 && <Best3 data={best}></Best3>} */}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2>달성률 순위</h2>
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
