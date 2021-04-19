import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const HeaderMenu = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand className="text-white" href="/"><h3> <FontAwesomeIcon icon={faMobileAlt} />  Quick-fix</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto p-3">
                    <Nav.Link className="text-white mx-2" href="/">HOME</Nav.Link>
                    <Nav.Link className="text-white mx-2" href="#link">REPAIRS</Nav.Link>
                    <Nav.Link className="text-white mx-2" href="#link">ADDED SERVICES</Nav.Link>
                    <Nav.Link className="text-white mx-2" href="#link">CONTACTS</Nav.Link>
                    <Nav.Link className="text-white mx-2" href="#link">FEATURES</Nav.Link>
                    <Nav.Link className="text-white mx-2" href="#link">ABOUT US</Nav.Link>
                    
                    {
                        loggedInUser.isSignedIn ? <div className="btn btn-outline-success">{loggedInUser.name}</div>
                        : 
                        <div className="btn btn-outline-success"><Link to="/login">Login</Link></div>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderMenu;