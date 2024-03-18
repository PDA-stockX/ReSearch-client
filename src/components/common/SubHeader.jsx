import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import "./Common.css";

export default function SubHeader(menu, subMenu, subMenuName) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="fixed-top bg-white" sticky="top">
        <Container className="custom-navbar">
          <Nav>
            {subMenu.map((item, index) => (
              <Nav.Link
                key={index}
                onClick={() => navigate(`/${menu}/${item}`)}
                className={location.pathname === `/${menu}/${item}` ? "active" : ""}
              >
                {subMenuName[index]}
              </Nav.Link>
            ))}
            {/* <Nav.Link
              onClick={() => {
                navigate(`/${menu}/${subMenu[0]}`);
              }}
              className={location.pathname === `/${menu}/${subMenu[0]}` ? "active" : ""}
            >
              {subMenuName[0]}
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(`/${menu}/achievement-score`);
              }}
              className={
                location.pathname === `/${menu}/achievement-score` ? "active" : ""
              }
            >
              달성률
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(`/${menu}/sector`);
              }}
              className={
                location.pathname.startsWith(`/${menu}/sector`) ? "active" : ""
              }
            >
              업종
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(`/${menu}/popularity`);
              }}
              className={
                location.pathname === `/${menu}/popularity` ? "active" : ""
              }
            >
              인기
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}