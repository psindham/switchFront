// import logo from "../../assets/images/logo.jpg";
// import { NavLink as Link } from 'react-router-dom';
// import SignInButton from "../SignInButton/SignInButton";
// import SignUpButton from "../SignUpButton/SignUpButton";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'

const Header = () => {
    return ( <header>
     <Navbar className='navBar themecolor' expand="lg">
      <Container>
      <a class="navbar-brand" href="/">
      <img src="/images/logo.jpg" alt="..." height="50"/>
    </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navBarButtons' href="/SearchPage">Search</Nav.Link>
            <Nav.Link className='navBarButtons' href="/EditProfile">Profile</Nav.Link>
            <Nav.Link className='navBarButtons' href="/dietselectionpage">Diet</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
</Navbar>
  </header>  );
}
 
export default Header;
