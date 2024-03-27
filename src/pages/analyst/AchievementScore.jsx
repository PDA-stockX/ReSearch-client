import React, { useEffect, useState } from "react";
import Rank from "~/components/common/Rank";
import Best3 from "~/components/common/Best3";
import "./analyst.css";
import { fetchAchievementScoreRank } from "~/api/analysts";

export default function AchievementScore() {
  const [data, setData] = useState([]);
  const [best, setBest] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const ranking = await fetchAchievementScoreRank();
      const data1 = ranking.map((item, index) => [index + 1, item.name, item.sectorNames[0], item.achievementScore]);

      const top3 = ranking.slice(0, 3);
      const data2 = top3.map((item, index) => [index + 1, item.name, item.firm, item.achievementScore]);

      return { data1, data2 };
    }
    fetchData().then(({ data1, data2 }) => {
      setData(data1);
      setBest(data2);
    });
  }, []);

  // 현재 날짜
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  const exampleColumn = [
    { columnName: "순위", columnWidth: 40 },
    { columnName: "애널리스트", columnWidth: 70 },
    { columnName: "업종", columnWidth: 80 },
    { columnName: "달성점수", columnWidth: 60 },
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
        {best.length > 0 && <Best3 data={best}></Best3>}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
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
        <Rank column={exampleColumn} data={data}></Rank>
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: text }} id="content"></div> */}
    </>
  );
}

// -------------------------------------

// import React, { useEffect, useState } from "react";
// import Rank from "~/components/common/Rank";
// import Best3 from "~/components/common/Best3";
// import "./analyst.css";
// import { fetchAchievementScoreRank } from "~/api/analysts";

// export default function AchievementScore() {
//   const [data, setData] = useState([]);
//   const [best, setBest] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage, setPerPage] = useState(10); // 페이지 당 개수

//   useEffect(() => {
//     async function fetchData() {
//       const ranking = await fetchAchievementScoreRank();
//       const totalData = ranking.map((item, index) => [index + 1, item.name, item.sectorNames[0], item.achievementScore]);

//       const top3 = ranking.slice(0, 3);
//       const top3Data = top3.map((item, index) => [index + 1, item.name, item.firm, item.achievementScore + "%"]);

//       setData(totalData);
//       setBest(top3Data);
//     }

//     fetchData();
//   }, []);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // 현재 페이지 시작점 계산
//   const startIndex = (currentPage - 1) * perPage;
//   const paginatedData = data.slice(startIndex, startIndex + perPage);

//   const exampleColumn = [
//     { columnName: "순위", columnWidth: 40 },
//     { columnName: "애널리스트", columnWidth: 70 },
//     { columnName: "업종", columnWidth: 80 },
//     { columnName: "달성점수", columnWidth: 60 },
//   ];

//   const totalPages = Math.ceil(data.length / perPage); // 전체 페이지 계산

//   return (
//     <>
//       <h2>Best 3</h2>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         {best.length > 0 && <Best3 data={best}></Best3>}
//       </div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <h2>수익률 순위</h2>
//         <h5>기준 날짜: {new Date().toLocaleDateString()}</h5>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Rank column={exampleColumn} data={paginatedData}></Rank>

//         {totalPages > 1 && (
//           <div>
//             {currentPage > 1 && <button onClick={() => handlePageChange(currentPage - 1)}>&lt;</button>}
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
//               <button key={pageNumber} className={pageNumber === currentPage ? "active" : ""} onClick={() => handlePageChange(pageNumber)}>
//                 {pageNumber}
//               </button>
//             ))}
//             {currentPage < totalPages && <button onClick={() => handlePageChange(currentPage + 1)}>&gt;</button>}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
