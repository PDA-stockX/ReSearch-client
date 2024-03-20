import React, { useEffect, useState } from 'react';
import Rank from '~/components/common/Rank';
import Best3 from '~/components/common/Best3';
import './analyst.css';
import { fetchReturnRateRank } from '~/api/analysts';

export default function ReturnRate() {
    const [data, setData] = useState([]);
    const [best, setBest] = useState([]);
    
//     const [text, setText] = useState(`
//     <div style="width:555px;height:100% clear:both; text-align: justify; overflow-x: auto;padding: 20px 0pt 30px;font-size:9pt;line-height:160%; color:#000000;">
//     <font face="돋움"><span style="font-size: 10pt;"><b>4Q23 Review: 연결 영업이익 흑자전환</b></span></font><div style="font-family: 돋움; font-size: 10pt;"><br></div><div style=""><font face="돋움"><span style="font-size: 13.3333px;">SK 4Q23  연결실적은 매출 32.76조원(-3.3% 이하 YoY), 영업이익 0.52조원(흑자전환)이다. SK 이노베이션과 SK E&amp;S 의 4 분기 흑자전환으로 연결 영업이익도 흑자전환에 성공했다. SK E&amp;S 는 SMP 약세 영향으로 연 간 EBITDA 가 16.3% 감소했으나, 24 년 여주발전소 실적의 온기 반영으로 24 년 턴어라운드를 예상한다.  고객사 감산에 따라 SK 실트론 연간 EBITDA 마진은 7.3%p 하락하였으나, 24 년 하반기 본격적인 반도체 경기 회복이 예상됨에 따라 24 년 연간 수익성 개선이 가능할 전망이다. 반도체 경기 회복은 24 년 머티리얼즈 수익성 개선에도 기여할 것으로 판단한다.</span></font></div>
//     </div>
//     <!-- 원문보기버튼 -->
// <div style="TEXT-ALIGN: left"><a target="_blank" class="con_link" style="VERTICAL-ALIGN: top" href="https://ssl.pstatic.net/imgstock/upload/research/company/1710891014064.pdf"><img alt="리포트원문보기" src="https://ssl.pstatic.net/static/nfinance/btn_origin.gif" width="15" height="14"></a> <a target="_blank" class="con_link" style="MARGIN: 0px 3px 0px 6px; COLOR: #F1771D; FONT-SIZE: 12px; FONT-WEIGHT: bold; TEXT-DECORATION: underline;VERTICAL-ALIGN: top" href="https://ssl.pstatic.net/imgstock/upload/research/company/1710891014064.pdf">20240319194522497_0_ko.pdf</a></div>
//     `);

    useEffect(() => {
        async function fetchData() {
            const ranking = await fetchReturnRateRank();
            console.log(ranking);
            const data1 = ranking.map((item, index) => [
                index + 1, 
                item.name,
                item.sectorName,
                item.returnRate,
            ]);
            // exampleData에 데이터 추가
            setData(data1);

            const top3 = ranking.slice(0, 3);
            const data2 = top3.map((item, index) => [
                index + 1, 
                item.name,
                item.firm,
                item.returnRate,
            ]);
            setBest(data2);
        }
        fetchData();
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
                <Best3 data={best}></Best3>
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
