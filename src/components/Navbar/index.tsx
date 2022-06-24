import React from "react";
import * as S from "./styled";
import { Navbar, Container, Nav } from 'react-bootstrap/'


const Header: React.FC = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">adopte.me</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Faça Login</Nav.Link>
            <Nav.Link href="#link">Adote</Nav.Link>
            <Nav.Link href="#link">Doe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;