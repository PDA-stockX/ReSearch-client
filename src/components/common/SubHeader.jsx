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
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}