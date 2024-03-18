import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import "./Common.css";

export default function SubHeader(props) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="fixed-top bg-white" sticky="top">
        <Container className="custom-navbar">
          <Nav>
            {console.log(props)}
            {props.subMenuName.map((item, index) => (
              <Nav.Link
                key={index}
                onClick={() => navigate(`/${props.subMenu}/${item}`)}
                className={
                  location.pathname === `/${props.subMenu}/${item}`
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
