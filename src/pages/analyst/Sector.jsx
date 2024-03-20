import React from 'react'
import Best3 from '~/components/common/Best3';
import Rank from '~/components/common/Rank';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './analyst.css';



export default function Sector() {

    // 현재 날짜
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const exampleColumn = [
        { columnName: '순위', columnWidth: 40 }, 
        { columnName: '애널리스트', columnWidth: 50 },
        { columnName: '수익률', columnWidth: 60 },
        { columnName: '달성률', columnWidth: 60 } // 총 width = 240이 되도록?
    ];

    const exampleData = [
        [1, "Analyst1", 74.6, 95],
        [2, "Analyst2", 68.2, 92],
        [3, "Analyst3", 59.1, 88],
        [4, "Analyst4", 40.0, 83],
        [5, "Analyst5", 40.0, 80],
        [6, "Analyst5", 40.0, 5],
        [7, "Analyst5", 40.0, 5],
        [8, "Analyst5", 40.0, 5],
        [9, "Analyst5", 40.0, 5],
        [10, "Analyst5", 40.0, 5],
    ];

    const exampleBest = [
        ['최승환', '신한투자증권', '74.6'],
        ['김철수', '미래에셋증권', '68.2'],
        ['박지영', 'KB증권', '59.1']
    ];



    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Best 3</h2>
                <DropdownButton id="dropdown-basic-button" title={<ion-icon name="options-outline"></ion-icon>}>
                    <Dropdown.Item href="#/action-1">업종1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">업종2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">업종3</Dropdown.Item>
                </DropdownButton>
            </div>
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
                <h2>업종별 순위</h2>    {/* 업종별 대신 현재 선택한 업종 받아오기 */}
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