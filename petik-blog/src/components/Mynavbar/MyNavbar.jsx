import "./MyNavbar.css";
import { NavLink, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
const MyNavbar = () => {
  return (
    <div>
      <Navbar className="Nav bg-primary">
        <Container>
        <Navbar.Brand as={Link} to="/">
          Petik Blog
        </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink to={"/"}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={"/posts"}>Posts</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={"/news"}>News</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to={"/about"}>About</NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
