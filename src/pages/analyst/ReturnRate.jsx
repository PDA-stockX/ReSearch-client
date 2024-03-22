import React, { useEffect, useState } from 'react';
import Rank from '~/components/common/Rank';
import Best3 from '~/components/common/Best3';
import './analyst.css';
import { fetchReturnRateRank } from '~/api/analysts';

export default function ReturnRate() {
    const [data, setData] = useState([]);
    const [best, setBest] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const ranking = await fetchReturnRateRank();
            // console.log("랭킹", ranking);
            const data1 = ranking.map((item, index) => [
                index + 1, 
                item.name,
                item.sectorName,
                item.returnRate,
            ]);
            // setData(data1);
            console.log("데이터", data);

            const top3 = ranking.slice(0, 3);
            const data2 = top3.map((item, index) => [
                index + 1, 
                item.name,
                item.firm,
                item.returnRate,
            ]);
            // setBest(data2);
            console.log("베스트", best);

            // console.log("여기", {data1, data2})
            return {data1, data2}
        }
        fetchData().then(({data1, data2}) => {
            // console.log("여기", data1)
            setData(data1);
            setBest(data2);
        });
    }, [])

    // 현재 날짜
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const exampleColumn = [
        { columnName: 'Rank', columnWidth: 40 }, 
        { columnName: 'Analyst', columnWidth: 50 },
        { columnName: 'Sector', columnWidth: 100 },
        { columnName: 'Return', columnWidth: 50 } // 총 width = 240이 되도록?
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
                <Rank column={exampleColumn} data={data}></Rank>
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: text }} id="content"></div> */}
        </>
    )
}