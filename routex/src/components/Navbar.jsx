import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

function CustomNavbar() {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Navbar.Brand href="#home" className="nav-logo">
                <img
                    src="https://icons.getbootstrap.com/assets/icons/airplane-fill.svg"
                    alt="airplane icon"
                    width="30"
                    height="30"
                />
                <span className="logo-text">RouteX</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto nav-items">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#about">ABOUT US</Nav.Link>
                    <Nav.Link href="#story">STORY</Nav.Link>
                    <Nav.Link href="#visa">VISA</Nav.Link>
                    <Nav.Link href="#blog">BLOG</Nav.Link>
                    <Nav.Link href="#page">PAGE</Nav.Link>
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav>
                <div className="help-section">
                    <img
                        src="https://icons.getbootstrap.com/assets/icons/airplane-fill.svg"
                        alt="airplane icon"
                        width="30"
                        height="30"
                    />
                    <span>Need Help?<br />(307) 555-0133</span>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;
