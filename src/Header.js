import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>Fake Store</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Navbar.Brand>Cart</Navbar.Brand>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;