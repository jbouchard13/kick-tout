import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import '../Navigation/Navigation.css';

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="footer" sticky="bottom" bg="dark" variant="dark">
          <Navbar.Brand >
            Kick-Tout 2020 ©
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
