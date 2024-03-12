import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
    return (
        <>
            <Navbar expand="sm" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">RE:search</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">홈</Nav.Link>
                            <Nav.Link href="#analyst">애널리스트</Nav.Link>
                            <Nav.Link href="#company">증권사</Nav.Link>
                            <Nav.Link href="#bookmark">즐겨찾기</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default BasicExample;