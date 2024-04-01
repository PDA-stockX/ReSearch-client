import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Best3 from "~/components/common/Best3";
import Rank from "~/components/common/Rank";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { fetchSectorRank } from "~/api/analysts";
import { fetchReportSectors } from "~/api/reportSectors";
import "./analyst.css";

export default function Sector() {
  const [data, setData] = useState([]);
  const [best, setBest] = useState([]);
  const [sectors, setSectors] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const selectedSector = queryParams.get("sector");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const ranking = await fetchSectorRank(selectedSector);
      console.log("랭킹", ranking);
      const data1 = ranking.map((item, index) => [index + 1, item.name, item.returnRate, item.achievementScore]);
      const processedData = data1.map((item) => {
        // item의 두번째 요소가 빈 문자열인지 확인 후 처리
        if (item[2] !== "" && item) {
          const roundedValue2 = parseFloat(item[2]).toFixed(2); // 소수점 둘째 자리까지 고정
          const roundedValue3 = parseFloat(item[3]).toFixed(2);
          return [item[0], item[1], roundedValue2, roundedValue3];
        } else {
          return item;
        }
      });

      const top3 = ranking.slice(0, 3);
      let emptyData = [];

      if (ranking.length < 3) {
        const remainingItems = 3 - ranking.length;
        emptyData = Array.from({ length: remainingItems }, () => ["", "", "", ""]); // 빈 데이터 배열 생성
      }

      const data2 = [
        ...top3.map((item, index) => [index + 1, item.name, item.firm, item.score]),
        ...emptyData, // 빈 데이터 배열 추가
      ];

      return { processedData, data2 };
    }

    async function fetchSectorName() {
      const names = await fetchReportSectors();
      setSectors(names);
    }

    fetchData().then(({ processedData, data2 }) => {
      setData(processedData);
      setBest(data2);
    });
    fetchSectorName();
  }, [selectedSector]);

  const handleSectorChange = (sector) => {
    navigate(`/analyst?sector=${sector}`);
  };

  // 현재 날짜
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  const exampleColumn = [
    { columnName: "순위", columnWidth: 40 },
    { columnName: "애널리스트", columnWidth: 70 },
    { columnName: "수익률", columnWidth: 60 },
    { columnName: "달성점수", columnWidth: 60 },
  ];

  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Best 3</h2>
        <DropdownButton id="dropdown-basic-button" title={<ion-icon name="options-outline"></ion-icon>}>
          {sectors.map((sector, index) => (
            <Dropdown.Item key={index} onClick={() => handleSectorChange(sector.sectorName)} className="dropdownItem">
              {sector.sectorName}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div> */}

      {/* <DropdownButton id="dropdown-basic-button" title={<ion-icon name="options-outline"></ion-icon>} style={{ display: "flex", justifyContent: "flex-end", marginRight: "2%" }}>
        {sectors.map((sector, index) => (
          <Dropdown.Item key={index} onClick={() => handleSectorChange(sector.sectorName)} className="dropdownItem">
            {sector.sectorName}
          </Dropdown.Item>
        ))}
      </DropdownButton> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {best.length > 0 && <Best3 data={best}></Best3>}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h2>
          <span>{selectedSector}</span> 순위
        </h2>
        <div style={{ display: "flex", width: "42%", marginTop: "1%" }}>
          <h5 style={{ marginTop: "3%" }}>기준 날짜: {formattedDate}</h5>
          <DropdownButton id="dropdown-basic-button" title={<ion-icon name="options-outline"></ion-icon>} style={{ display: "flex", justifyContent: "flex-end", marginRight: "2%" }}>
            {sectors.map((sector, index) => (
              <Dropdown.Item key={index} onClick={() => handleSectorChange(sector.sectorName)} className="dropdownItem">
                {sector.sectorName}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
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
  );
}
