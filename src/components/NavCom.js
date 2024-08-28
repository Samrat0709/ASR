import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavCom() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-white">
                <Container>
                    <Navbar.Brand href="#home" className="text-custom fs-3 fw-bold">Shiftvendor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto gap-4 fw-semi-bold">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Retail</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>

                        </Nav>
                        <div className="d-flex gap-2">
                            <button className="btn btn-outline-custom rounded-pill">Sign Up</button>
                            <button className="btn btn-custom rounded-pill">Login</button>
                        </div>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default NavCom