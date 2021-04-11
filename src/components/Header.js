import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
      <Nav>
        <Nav.Link href="#about" style={{ color: "#fff" }}>
          About
        </Nav.Link>
        <Nav.Link href="#faq" style={{ color: "#fff" }}>
          FAQ
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
