import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { FaBell } from "react-icons/fa";

export const DashboardNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <b>R</b> <span className="mx-3">resync</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item className="pt-2 px-2">
              <FaBell size={16} />
            </Nav.Item>
            <NavDropdown
              title=""
              id="basic-nav-dropdown"
              className="dropdown-menu-left"
            >
              <NavDropdown.Item href="#action/3.1">
                Actionwqiudoiwqudoqiwudoqiwudoqiwudoqwiudowqiduqowduqowd
                <br></br> Hello <br></br> Date
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#">Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
