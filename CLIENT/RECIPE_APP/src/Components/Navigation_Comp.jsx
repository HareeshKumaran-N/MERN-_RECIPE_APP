import {Button, Container,Nav}from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import NavBar from "react-bootstrap/Navbar";
import '../App.css';
function NavBarComponent() {
  return (
    <NavBar>
      <Container className="navBarContainer">
        <Container className="navBarInnerContainer">
          <Nav.Item>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink to="/saved" style={{ textDecoration: "none" }}>
              Saved Blog
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/create" style={{ textDecoration: "none" }}>
              Create Blob
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/auth" style={{ textDecoration: "none" }}>
              Login/Register
            </NavLink>
          </Nav.Item>
        </Container>
        <Button>Logout</Button>
      </Container>
    </NavBar>
  );
}

export default NavBarComponent;
