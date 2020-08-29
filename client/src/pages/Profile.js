import React, { useContext } from 'react'
import { AuthContext } from "../AuthContext";
import { Button, Col, Row, Container } from "react-bootstrap";
import "../App.css";

import ProfileContainer from '../components/Profile/ProfileContainer';
import Navigation from '../components/Navigation/Navigation';


// import Navigation from '../components/Navigation/Navigation';
// import Footer from '../components/Footer/Footer';

function Profile(props) {

  const { logout } = useContext(AuthContext);

  return (
    <div>
      <Navigation />
      <h1>Profile Page</h1>
      <Container fluid>
        <Row>
          <Col sm={10}>Container header</Col>
          <Col sm={2}>
          </Col>
        </Row>

        <Row>
          <Col sm={3}>
          </Col>
          <Col sm={9}>
            <ProfileContainer />
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}


      {/* these should move into nav bar instead    */}

      <Button
        className="m-1"
        onClick={() => {
          logout();
        }}
        variant="dark">
        Logout
      </Button>
      <Button
        className="m-1"
        onClick={e => {
          e.preventDefault();
          props.history.push("/feed");
        }}
        variant="dark">
        Feed
            </Button>
    </div>
  );
}


export default Profile




