import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import "./Common.css";

export default function SubHeader(menu) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="fixed-top bg-white" sticky="top">
        <Container className="custom-navbar">
          <Nav>
            <Nav.Link
              onClick={() => {
                navigate(`/${menu}/return-rate`);
              }}
              className={location.pathname === `/${menu}/return-rate` ? "active" : ""}
            >
              홈
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(`/${menu}/achievement-score`);
              }}
              className={
                location.pathname === `/${menu}/achievement-score` ? "active" : ""
              }
            >
              애널리스트
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(`/${menu}/sector`);
              }}
              className={
                location.pathname.startsWith(`/${menu}/sector`) ? "active" : ""
              }
            >
              증권사
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(`/${menu}/popularity`);
              }}
              className={
                location.pathname === `/${menu}/popularity` ? "active" : ""
              }
            >
              즐겨찾기
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}