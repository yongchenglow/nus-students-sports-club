import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import SportsClubLogo from "../../../images/logos/SportsClubLogo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class MainNavbar extends Component {
  constructor() {
    super();
    this.state = {
      smallWords: false,
      collapseNav: false,
    };
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    setInterval(this.timer, 1000);
  }

  resize() {
    let collapseNav = window.innerWidth < 768;
    if (collapseNav !== this.state.collapseNav) {
      this.setState({ collapseNav: collapseNav });
    }

    let smallWords = window.innerWidth < 992 && window.innerWidth >= 768;
    if (smallWords !== this.state.smallWords) {
      this.setState({ smallWords: smallWords });
    }
  }

  render() {
    let navbar;
    let home;

    if (this.state.collapseNav) {
      home = (
        <React.Fragment>
          <NavItem href="/40">
            <Nav.Link
              as={NavLink}
              eventKey="1"
              activeClassName="nav-link-active"
              exact={true}
              to="/40"
            >
              Home
            </Nav.Link>
          </NavItem>
        </React.Fragment>
      );
    } else {
      home = (
        <React.Fragment>
          <NavItem href="/40">
            <Nav.Link
              as={NavLink}
              eventKey="1"
              activeClassName="nav-link-active"
              className="navbar-brand"
              exact={true}
              to="/40"
            >
              <SportsClubLogo className="nav-logo" />
            </Nav.Link>
          </NavItem>
        </React.Fragment>
      );
    }

    var about = (
      <React.Fragment>
        <NavItem href="/40/about">
          <Nav.Link
            as={NavLink}
            eventKey="2"
            activeClassName="nav-link-active"
            to="/40/about"
          >
            {this.state.smallWords ? "About" : "About Us"}
          </Nav.Link>
        </NavItem>
      </React.Fragment>
    );

    var partners = (
      <React.Fragment>
        <NavItem href="/40/partners">
          <Nav.Link
            as={NavLink}
            eventKey="3"
            activeClassName="nav-link-active"
            to="/40/partners"
          >
            {this.state.smallWords ? "Partners" : "Our Partners"}
          </Nav.Link>
        </NavItem>
      </React.Fragment>
    );

    var events = (
      <React.Fragment>
        <NavItem href="/40/events">
          <Nav.Link
            as={NavLink}
            eventKey="4"
            activeClassName="nav-link-active"
            to="/40/events"
          >
            {this.state.smallWords ? "Events" : "Our Events"}
          </Nav.Link>
        </NavItem>
      </React.Fragment>
    );

    var clubs = (
      <React.Fragment>
        <NavItem href="/40/clubs">
          <Nav.Link
            as={NavLink}
            eventKey="5"
            activeClassName="nav-link-active"
            to="/40/clubs"
          >
            {this.state.smallWords ? "Clubs" : "Member Clubs"}
          </Nav.Link>
        </NavItem>
      </React.Fragment>
    );

    var projects = (
      <React.Fragment>
        <NavItem href="/40/projects">
          <Nav.Link
            as={NavLink}
            eventKey="6"
            activeClassName="nav-link-active"
            to="/40/projects"
          >
            {this.state.smallWords ? "Projects" : "Our Projects"}
          </Nav.Link>
        </NavItem>
      </React.Fragment>
    );

    var committee = (
      <React.Fragment>
        <NavItem href="/40/committee">
          <Nav.Link
            as={NavLink}
            eventKey="7"
            activeClassName="nav-link-active"
            to="/40/committee"
          >
            {this.state.smallWords ? "Committee" : "Our Committee"}
          </Nav.Link>
        </NavItem>
      </React.Fragment>
    );

    if (this.state.collapseNav) {
      navbar = (
        <React.Fragment>
          <Navbar.Brand>
            <SportsClubLogo className="nav-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {home}
              {about}
              {clubs}
              {events}
              {projects}
              {committee}
              {partners}
            </Nav>
          </Navbar.Collapse>
        </React.Fragment>
      );
    } else {
      navbar = (
        <React.Fragment>
          <Nav>
            {partners}
            {events}
            {about}
            {home}
            {clubs}
            {projects}
            {committee}
          </Nav>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Navbar
          collapseOnSelect
          className="shadow-bottom"
          bg="light"
          expand="md"
          variant="light"
          fixed="top"
        >
          <div
            className={
              this.state.collapseNav
                ? "container"
                : "container justify-content-center"
            }
          >
            {navbar}
          </div>
        </Navbar>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </React.Fragment>
    );
  }
}

export default MainNavbar;
