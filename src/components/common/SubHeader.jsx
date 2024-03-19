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
      <Navbar className="fixed-top" bg="F7F7F7" sticky="top" style={{padding: 0}}>
        <Container className="custom-navbar sub-navbar">
          <Nav>
            {console.log(props)}
            {props.subMenu.map((item, index) => (
              <Nav.Link
                key={index}
                onClick={() => navigate(`/${props.menu}/${item}`)}
                className={
                  location.pathname === `/${props.menu}/${item}`
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
