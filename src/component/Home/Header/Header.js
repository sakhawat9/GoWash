import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar style={{position: 'absolute', left: 0, top: 0, right: 0, zIndex: 3 }} bg="transparent" expand="lg">
            <Container>
                <Navbar.Brand as={Link} style={{fontSize: '40px'}} className="web-name text-white header-logo" to="/">Go Wash</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className=" text-white" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className=" text-white" as={Link} to="#">About us</Nav.Link>
                        <Nav.Link className=" text-white" as={Link} to="#">Projects</Nav.Link>
                        <Nav.Link className=" text-white" as={Link} to="#">Contact</Nav.Link>
                        <Nav.Link className=" text-white" as={Link} to="/sidebar">Admin</Nav.Link>
                        <Nav.Link className=" text-white" as={Link} to="/login" className="active btn-brand p-1 px-4">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;