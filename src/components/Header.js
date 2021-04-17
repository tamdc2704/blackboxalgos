import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

const NavStyle = styled.div`
  a {
    font-family: "Lexend Deca";
    font-size: 18px;
    padding: auto 1rem;
  }
`;

const Header = () => (
  <Navbar bg="dark" expand="lg" style={{ zIndex: 1 }}>
    <Navbar.Brand href="#home" style={{ display: "flex" }}>
      <img
        alt=""
        src="https://img1.wsimg.com/isteam/ip/static/themeFocus/foreground_generic_circle_v2.png"
        width="70"
        height="70"
        className="d-inline-block align-top"
      />
      <span className="brand">BlackBoxAlgos</span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse
      id="basic-navbar-nav"
      style={{ justifyContent: "flex-end" }}
    >
      <NavStyle className="navbar-nav">
        <Nav.Link href="#product" style={{ color: "#fff" }}>
          Product
        </Nav.Link>
        <Nav.Link href="#feature" style={{ color: "#fff" }}>
          Feature
        </Nav.Link>
        <Nav.Link href="#pricing" style={{ color: "#fff" }}>
          Pricing
        </Nav.Link>
        <Nav.Link href="#contact" style={{ color: "#fff" }}>
          Contact
        </Nav.Link>
      </NavStyle>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
