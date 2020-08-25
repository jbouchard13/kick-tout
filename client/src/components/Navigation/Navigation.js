import React, { useContext, useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

<Router>
    <Container className="p-0" fluid={true}>
        <Navbar className="nav-effect" bg="transparent" expand="lg">
            <Navbar.Brand className="text-white">Kicked-Tout</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Link className="nav-link text-white item-grow" to="/">
                        Feed
                </Link>
                    <Link className="nav-link text-white item-grow" to="/profile">
                        My Profile
                </Link>
                    <Link className="nav-link text-white item-grow" to="/login">
                        Login
                </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={() => <Feed title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
        <Route path="/profile" render={() => <Profile title={this.state.about.title} />} />
        <Route path="/login" render={() => <Login title={this.state.contact.title} />} />
        <Footer />
    </Container>
</Router>