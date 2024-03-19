import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import "~/styles/Header.css";
import {SearchModal} from "../SearchModal.jsx";
import "./Common.css";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="fixed-top bg-white" sticky="top">
        <Container className="custom-navbar">
          <Nav>
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
              className={location.pathname === "/home" ? "active" : ""}
            >
              홈
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/analyst/return-rate");
              }}
              className={
                location.pathname.startsWith("/analyst") ? "active" : ""
              }
            >
              애널리스트
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/firm/return-rate");
              }}
              className={
                location.pathname.startsWith("/firm") ? "active" : ""
              }
            >
              증권사
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/bookmark/analyst");
              }}
              className={
                location.pathname.startsWith("/bookmark") ? "active" : ""
              }
            >
              즐겨찾기
            </Nav.Link>
          </Nav>
        </Container>
        <SearchModal isMobile={true}></SearchModal>
      </Navbar>
    </>
  );
}