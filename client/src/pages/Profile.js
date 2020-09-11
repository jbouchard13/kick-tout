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
    <div className="profileBody">
      <Navigation />
      <h2 className="profile-header">Profile Page</h2>
      <div classname= "profilePadding">
      <Container className="fluid">
        <Row>
          <Col sm={10}></Col>
          <Col sm={2}>
          </Col>
        </Row>

        <Row>
          <Col sm={3}>
          </Col>
          <Col sm={9}>
          <div className="pb-5">
            <ProfileContainer />
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
    {/* <Footer /> */}
    </div>
  );
}


export default Profile




