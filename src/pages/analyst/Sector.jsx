import React, { useState, useEffect, useParams, useHistory } from 'react'
import Best3 from '~/components/common/Best3';
import Rank from '~/components/common/Rank';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { fetchSectorRank  } from '~/api/analysts';
import { fetchReportSectors } from '~/api/reportSectors';
import './analyst.css';


export default function Sector() {
    const [data, setData] = useState([]);
    const [best, setBest] = useState([]);
    const [sectors, setSectors] = useState([]);
    const { sector:selectedSector } = useParams();
    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            const ranking = await fetchSectorRank(selectedSector);
            const data1 = ranking.map((item, index) => [
                index + 1, 
                item.name,
                item.sectorName,
                item.returnRate,
            ]);

            const top3 = ranking.slice(0, 3);
            const data2 = top3.map((item, index) => [
                index + 1, 
                item.name,
                item.firm,
                item.returnRate,
            ]);

            return {data1, data2}
        }

        async function fetchSectorName() {
            const names = await fetchReportSectors();
            setSectors(names);
        }

        fetchData().then(({data1, data2}) => {
            setData(data1);
            setBest(data2);
        });
        fetchSectorName();
    }, [selectedSector])

    const handleSectorChange = (sector) => {
        history.push(`/analysts?sector=${sector}`);
    };

    // 현재 날짜
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const exampleColumn = [
        { columnName: '순위', columnWidth: 40 }, 
        { columnName: '애널리스트', columnWidth: 50 },
        { columnName: '수익률', columnWidth: 60 },
        { columnName: '달성률', columnWidth: 60 } // 총 width = 240이 되도록?
    ];

    // 기본 선택 항목
    const defaultSector = sectors.length > 0 ? sectors[0] : '';

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Best 3</h2>
                <DropdownButton id="dropdown-basic-button" title={<ion-icon name="options-outline"></ion-icon>}>
                    {sectors.map((sector, index) => (
                        <Dropdown.Item key={index} onClick={() => handleSectorChange(sector)}>
                            {sector}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {best.length>0 &&  <Best3 data={best}></Best3>}
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >   
                <h2>{selectedSector || defaultSector} 순위</h2>    {/* 업종별 대신 현재 선택한 업종 받아오기 */}
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