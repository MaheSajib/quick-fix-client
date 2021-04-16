import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const HeaderMenu = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand className="text-white" href="#home"><h3>Quick-fix</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto p-3">
                    <Nav.Link className="text-white mx-2" href="#home">HOME</Nav.Link>
                    <Nav.Link className="text-white mx-2" href="#link">REPAIRS</Nav.Link>
                    <Nav.Link className="text-white mx-2" href="#link">ADDED SERVICES</Nav.Link>
                    <Nav.Link className="text-white mx-2" href="#link">CONTACTS</Nav.Link>
                    <Nav.Link className="text-white mx-2" href="#link">FEATURES</Nav.Link>
                    <Nav.Link className="text-white mx-2" href="#link">ABOUT US</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderMenu;