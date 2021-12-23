import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { useState,useEffect } from 'react';
import localstorage from 'local-storage';
import { FaSignOutAlt } from "react-icons/fa";
import Router from 'next/router'

let clearlocalstorage=(e)=>{
  e.stopPropagation();
    e.preventDefault(); 
  console.log("hello");
  localstorage.clear();
  Router.push('/');
}

const Header = () => {
  const url = "https://switchdiet.herokuapp.com";
  const [loggedin,setLoggedin]= useState(false);
  useEffect(() => {
    var userdata;
    userdata = JSON.parse(localstorage.get('userdata'));
    setTimeout(() => {
      console.log(userdata);
    }, 100);
      if(userdata==null){
        setLoggedin(false);
      }else{
        setLoggedin(true);
      }
  }, [])


  return ( 
    <header>
      {loggedin?(
        <Navbar className='navBar themecolor' expand="lg">
        <Container>
        <a class="navbar-brand" href="/dashboard">
        <img src="/images/logo.jpg" alt="..." height="45"/>
        </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link className='navBarButtons' href="/SearchPage">Search</Nav.Link>
              <Nav.Link className='navBarButtons' href="/EditProfile">Profile</Nav.Link>
              <Nav.Link className='navBarButtons' href="/dietselectionpage">Diet</Nav.Link>
              <Nav.Link className='navBarButtons' href="#" onClick={clearlocalstorage}>Logout &nbsp;<FaSignOutAlt/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
      ):(
        <Navbar className='navBar themecolor' expand="lg">
          <Container>
            <a class="navbar-brand" href="/">
                <img src="/images/logo.jpg" alt="..." height="45"/>
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link className='navBarButtons' href="/SignUpPage">Sign up</Nav.Link>
              <Nav.Link className='navBarButtons' href="/SignInPage">Sign in</Nav.Link>
              <Nav.Link className='navBarButtons' href="/SearchPage">Search</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
    </Navbar>
      )}
      </header>  
    )
    
}
 
export default Header;
