import React, { useState, useEffect } from 'react'
import Best3 from '~/components/common/Best3';
import Rank from '~/components/common/Rank';
import './analyst.css';
import { fetchFollowerRank } from '~/api/analysts';


export default function Popularity() {
    const [data, setData] = useState([]);
    const [best, setBest] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const ranking = await fetchFollowerRank ();
            const data1 = ranking.map((item, index) => [
                index + 1, 
                item.name,
                item.followerCount,
            ]);

            const top3 = ranking.slice(0, 3);
            const data2 = top3.map((item, index) => [
                index + 1, 
                item.name,
                item.firm,
                "★" + item.followerCount,
            ]);

            return {data1, data2}
        }
        fetchData().then(({data1, data2}) => {
            setData(data1);
            setBest(data2);
        });
    }, [])
    
    // 현재 날짜
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const exampleColumn = [
        { columnName: '순위', columnWidth: 30 }, 
        { columnName: '애널리스트', columnWidth: 50 },
        { columnName: '즐겨찾기 수', columnWidth: 40 } // 총 width = 240이 되도록?
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
                {best.length>0 && <Best3 data={best}></Best3>}
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
                <Rank column={exampleColumn} data={data}></Rank>
            </div>
        </>
    )
}
