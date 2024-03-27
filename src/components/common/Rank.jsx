// import React, { useRef, useEffect, useState } from "react";
// import "./Common.css";
// import Row from "./RankRow"; // Row 컴포넌트 불러오기

// export default function Rank({ column, data }) {
//   const cardRef = useRef(null);

//   const [cardHeight, setCardHeight] = useState(0);

//   useEffect(() => {
//     // 리스트 길이가 변경될 때 카드 길이 조절
//     const height = data.length * 30;
//     setCardHeight(height);
//   }, [data]);

//   return (
//     <div ref={cardRef} className="rankCard">
//       <div className="rankContainer">
//         {/* 열 이름 표시 */}
//         <div className="rankRow" style={{ gridTemplateColumns: column.map((col) => col.columnWidth + "fr").join(" "), fontWeight: 600 }}>
//           {column.map((col, cellIndex) => (
//             <div key={cellIndex} className="rankCell" style={{ textAlign: "center" }}>
//               {col.columnName}
//             </div>
//           ))}
//         </div>
//         {/* 나머지 행 표시 */}
//         {data.map((row, rowIndex) => (
//           <Row key={rowIndex} row={row} column={column} />
//         ))}
//       </div>
//     </div>
//   );
// }

// ------------------------

// import React, { useRef, useEffect, useState } from "react";
// import "./Common.css";
// import Row from "./RankRow"; // Row 컴포넌트 불러오기
// import { MdNavigateBefore } from "react-icons/md";
// import { MdNavigateNext } from "react-icons/md";

// export default function Rank({ column, data }) {
//   const cardRef = useRef(null);

//   const [cardHeight, setCardHeight] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage, setPerPage] = useState(10);
//   const [paginatedData, setPaginatedData] = useState([]);
//   const [totalPages, setTotalPages] = useState(0);

//   useEffect(() => {
//     // 리스트 길이가 변경될 때 카드 길이 조절
//     const height = data.length * 30;
//     setCardHeight(height);

//     // 데이터 슬라이싱 및 페이지네이션 정보 계산
//     const startIndex = (currentPage - 1) * perPage;
//     const paginatedData = data.slice(startIndex, startIndex + perPage);
//     const totalPages = Math.ceil(data.length / perPage);

//     setPaginatedData(paginatedData);
//     setTotalPages(totalPages);
//   }, [currentPage, perPage, data]);

//   // 페이지 변경 처리 함수
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div ref={cardRef} className="rankCard">
//       <div className="rankContainer">
//         {/* 열 이름 표시 */}
//         <div className="rankRow" style={{ gridTemplateColumns: column.map((col) => col.columnWidth + "fr").join(" "), fontWeight: 600 }}>
//           {column.map((col, cellIndex) => (
//             <div key={cellIndex} className="rankCell" style={{ textAlign: "center" }}>
//               {col.columnName}
//             </div>
//           ))}
//         </div>

//         {/* 슬라이싱된 데이터 표시 */}
//         {paginatedData.map((row, rowIndex) => (
//           <Row key={rowIndex} row={row} column={column} />
//         ))}
//       </div>
//       {/* 페이지네이션 정보 표시 */}
//       {totalPages > 1 && (
//         <div className="pagination">
//           {currentPage > 1 && <button onClick={() => handlePageChange(currentPage - 1)}>{MdNavigateBefore}</button>}
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
//             <button key={pageNumber} className={pageNumber === currentPage ? "active" : ""} onClick={() => handlePageChange(pageNumber)}>
//               {pageNumber}
//             </button>
//           ))}
//           {currentPage < totalPages && <button onClick={() => handlePageChange(currentPage + 1)}>{MdNavigateNext}</button>}
//         </div>
//       )}
//     </div>
//   );
// }

// ---------------------------

// import React, { useRef, useEffect, useState } from "react";
// import "./Common.css";
// import Row from "./RankRow"; // Row 컴포넌트 불러오기
// import { MdNavigateBefore } from "react-icons/md";
// import { MdNavigateNext } from "react-icons/md";

// export default function Rank({ column, data }) {
//   const cardRef = useRef(null);

//   const [cardHeight, setCardHeight] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage, setPerPage] = useState(10);
//   const [paginatedData, setPaginatedData] = useState([]);
//   const [totalPages, setTotalPages] = useState(0);

//   useEffect(() => {
//     // 리스트 길이가 변경될 때 카드 길이 조절
//     const height = data.length * 30;
//     setCardHeight(height);

//     // 데이터 슬라이싱 및 페이지네이션 정보 계산
//     const startIndex = (currentPage - 1) * perPage;
//     const paginatedData = data.slice(startIndex, startIndex + perPage);
//     const totalPages = Math.ceil(data.length / perPage);

//     setPaginatedData(paginatedData);
//     setTotalPages(totalPages);
//   }, [currentPage, perPage, data]);

//   // 페이지 변경 처리 함수
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // 페이지 번호 리스트 생성 함수
//   function generatePageNumbers(currentPage, totalPages) {
//     const pageNumbers = [];

//     // 1 페이지, 마지막 페이지, 현재 페이지 항상 포함
//     pageNumbers.push(1);
//     pageNumbers.push(totalPages);
//     pageNumbers.push(currentPage);

//     // 현재 페이지가 3보다 크면 앞쪽 페이지 추가
//     if (currentPage > 3) {
//       pageNumbers.push(currentPage - 1);
//       pageNumbers.push(currentPage - 2);
//     }

//     // 현재 페이지가 마지막 페이지 3보다 앞쪽이면 뒤쪽 페이지 추가
//     if (totalPages - currentPage > 3) {
//       pageNumbers.push(currentPage + 1);
//       pageNumbers.push(currentPage + 2);
//     }

//     // 중간 페이지 생략 처리
//     const Pages = pageNumbers.length < totalPages - 2;
//     if (Pages) {
//       pageNumbers.splice(2, pageNumbers.length - 3, "...");
//     }

//     return pageNumbers;
//   }

//   return (
//     <div ref={cardRef} className="rankCard">
//       <div className="rankContainer">
//         {/* 열 이름 표시 */}
//         <div className="rankRow" style={{ gridTemplateColumns: column.map((col) => col.columnWidth + "fr").join(" "), fontWeight: 600 }}>
//           {column.map((col, cellIndex) => (
//             <div key={cellIndex} className="rankCell" style={{ textAlign: "center" }}>
//               {col.columnName}
//             </div>
//           ))}
//         </div>

//         {/* 슬라이싱된 데이터 표시 */}
//         {paginatedData.map((row, rowIndex) => (
//           <Row key={rowIndex} row={row} column={column} />
//         ))}

//         {/* 페이지네이션 정보 표시 */}
//         {totalPages > 1 && (
//           <div className="pagination">
//             {currentPage > 1 && <button onClick={() => handlePageChange(currentPage - 1)}>{MdNavigateBefore}</button>}
//             {generatePageNumbers(currentPage, totalPages).map((pageNumber) => (
//               <button key={pageNumber} className={pageNumber === currentPage ? "active" : ""} onClick={() => handlePageChange(pageNumber)}>
//                 {pageNumber}
//               </button>
//             ))}
//             {currentPage < totalPages && <button onClick={() => handlePageChange(currentPage + 1)}>{MdNavigateNext}</button>}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// -------------------------------

import React, { useRef, useEffect, useState } from "react";
import "./Common.css";
import Row from "./RankRow"; // Row 컴포넌트 불러오기
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

export default function Rank({ column, data }) {
  const cardRef = useRef(null);

  const [cardHeight, setCardHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [paginatedData, setPaginatedData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // 리스트 길이가 변경될 때 카드 길이 조절
    const height = data.length * 30;
    setCardHeight(height);

    // 데이터 슬라이싱 및 페이지네이션 정보 계산
    const startIndex = (currentPage - 1) * perPage;
    const paginatedData = data.slice(startIndex, startIndex + perPage);
    const totalPages = Math.ceil(data.length / perPage);

    setPaginatedData(paginatedData);
    setTotalPages(totalPages);
  }, [currentPage, perPage, data]);

  // 페이지 변경 처리 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 페이지 번호 리스트 생성 함수
  function generatePageNumbers(currentPage, totalPages) {
    const pageNumbers = [];

    // 5개 미만 페이지
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }

    // 현재 페이지 주변 페이지 추가
    if (currentPage > 3 && totalPages - currentPage > 3) {
      pageNumbers.push(currentPage - 1);
      pageNumbers.push(currentPage);
      pageNumbers.push(currentPage + 1);
    } else if (currentPage <= 3) {
      for (let i = 2; i <= 4; i++) {
        pageNumbers.push(i);
      }
    } else if (totalPages - currentPage <= 3) {
      for (let i = totalPages - 3; i <= totalPages - 1; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  }

  return (
    <div ref={cardRef} className="rankCard">
      <div className="rankContainer">
        {/* 열 이름 표시 */}
        <div className="rankRow" style={{ gridTemplateColumns: column.map((col) => col.columnWidth + "fr").join(" "), fontWeight: 600 }}>
          {column.map((col, cellIndex) => (
            <div key={cellIndex} className="rankCell" style={{ textAlign: "center" }}>
              {col.columnName}
            </div>
          ))}
        </div>

        {/* 슬라이싱된 데이터 표시 */}
        {paginatedData.map((row, rowIndex) => (
          <Row key={rowIndex} row={row} column={column} />
        ))}

        {/* 페이지네이션 정보 표시 */}
        {totalPages > 1 && (
          <div className="pagination">
            {currentPage > 1 && (
              <button onClick={() => handlePageChange(currentPage - 1)}>
                <MdNavigateBefore />
              </button>
            )}
            <button onClick={() => handlePageChange(1)}>1</button>
            {generatePageNumbers(currentPage, totalPages).map((pageNumber) => (
              <button key={pageNumber} className={pageNumber === currentPage ? "active" : ""} onClick={() => handlePageChange(pageNumber)}>
                {pageNumber === "..." ? "..." : pageNumber}
              </button>
            ))}
            <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
            {currentPage < totalPages && (
              <button onClick={() => handlePageChange(currentPage + 1)}>
                <MdNavigateNext />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
