import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../Navigation/Navigation.css';

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <Navbar sticky="bottom" bg="dark" variant="dark">
          <Navbar.Brand id="footer" >
            Kick-Tout 2020 
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
