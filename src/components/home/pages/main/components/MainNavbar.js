import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class MainNavbar extends Component {
  render () {
    var isMobile;
    var changeOrientation;

    return (
      <Navbar bg='light' variant='light' fixed="top">
        <div className='container'>
          <Link className='navbar-brand' to={'/'} >TEST</Link>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <NavItem eventkey={1} href="/">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
              </NavItem>
              <NavItem eventkey={2} href="/about">
                <Nav.Link as={Link} to="/about" >About</Nav.Link>
              </NavItem>
              <NavItem eventkey={3} href="/partners">
                <Nav.Link as={Link} to="/partners" >Partners</Nav.Link>
              </NavItem>
              <NavItem eventkey={4} href="/events">
                <Nav.Link as={Link} to="/events" >Events</Nav.Link>
              </NavItem>
              <NavItem eventkey={5} href="/clubs">
                <Nav.Link as={Link} to="/clubs" >Clubs</Nav.Link>
              </NavItem>
              <NavItem eventkey={6} href="/projects">
                <Nav.Link as={Link} to="/projects" >Projects</Nav.Link>
              </NavItem>
              <NavItem eventkey={7} href="/committee">
                <Nav.Link as={Link} to="/commitee" >Committee</Nav.Link>
              </NavItem>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
};

export default MainNavbar;
