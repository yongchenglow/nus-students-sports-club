import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class MainNavbar extends Component {
  render () {
    var isMobile;
    var changeOrientation;

    return (
      <Navbar bg='dark' variant='dark' fixed="top">
        <div className='container'>
          <Link className='navbar-brand' to={'/'} >TEST</Link>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <NavItem eventkey={1} href="/">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
              </NavItem>
              <NavItem eventkey={1} href="/about">
                <Nav.Link as={Link} to="/about" >About</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
};

export default MainNavbar;
