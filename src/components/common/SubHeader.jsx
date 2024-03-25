// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./Common.css";

// export default function SubHeader(props) {
//   const location = useLocation();
//   const navigate = useNavigate();

//   return (
//     <>
//       <Navbar className="fixed-top" bg="F7F7F7" sticky="top" style={{padding: 0}}>
//         <Container className="custom-navbar sub-navbar">
//           <Nav>
//             {console.log(props)}
//             {props.subMenu.map((item, index) => (
//               <Nav.Link
//                 key={index}
//                 onClick={() => navigate(`/${props.menu}/${item}`)}
//                 className={
//                   location.pathname === `/${props.menu}/${item}`
//                     ? "active"
//                     : ""
//                 }
//               >
//                 {props.subMenuName[index]}
//               </Nav.Link>
//             ))}
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }



import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchReportSectors } from '~/api/reportSectors';
import "./Common.css";

export default function SubHeader(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sectors, setSectors] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
        const data = await fetchReportSectors();
        return data
    }
    fetchData().then((data) => {
      setSectors(data)
    })
  }, []);

  
  // 기본 선택 업종
  const defaultSector = sectors.length > 0 ? sectors[0]['sectorName'] : '';

  return (
    <>
      <Navbar className="fixed-top" bg="F7F7F7" sticky="top" style={{padding: 0}}>
        <Container className="custom-navbar sub-navbar">
          <Nav>
            {console.log(props)}
            {props.subMenu.map((item, index) => (
              <Nav.Link
                key={index}
                onClick={() => {
                  if (item === "sector") {
                      navigate(`/${props.menu}?${item}=${defaultSector}`);
                  } else {
                      navigate(`/${props.menu}/${item}`);
                  }
                }}
                className={
                  location.pathname === `/${props.menu}/${item}` ||
                  (`${item}` === "sector" && location.pathname.startsWith(`?${props.menu}`))
                    ? "active"
                    : ""
                }
              >
                {props.subMenuName[index]}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
