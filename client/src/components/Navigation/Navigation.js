import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoutButton from '../LogoutButton';

import "./Navigation.css";

export class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand as={Link} to="/">
            <img
              className="logo"
              height="40"
              alt="logo"
              src="../assets/images/kick-tout-white.gif"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link as={Link} to="/feed" className="text-white">
                Feed
              </Nav.Link>
              <Nav.Link as={Link} to="/#" className="text-white">
                Add Post
              </Nav.Link>
              <NavDropdown
                title="My Account"
                id="basic-nav-dropdown"
                className="text-white"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/profile"
                  className="text-dark"
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <LogoutButton varient="dark" />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
