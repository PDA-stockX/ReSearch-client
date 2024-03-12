import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "~/styles/Header.css";

function Header() {
    return (
        <>
            <Navbar className="fixed-top">
                <Container className="custom-navbar">
                    {/* <Navbar.Brand href="#home">RE:search</Navbar.Brand> */}
                    <Nav>
                        <Nav.Link href="#home">홈</Nav.Link>
                        <Nav.Link href="#analyst">애널리스트</Nav.Link>
                        <Nav.Link href="#company">증권사</Nav.Link>
                        <Nav.Link href="#bookmark">즐겨찾기</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
