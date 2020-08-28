import React, { useContext } from 'react';
import { AuthContext } from "../AuthContext";
import { Button, Container, Col, Row } from "react-bootstrap";
import "../App.css";

import ProfileContainer from "../components/Profile/ProfileContainer"

function EditProfile(props) {

  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Edit Profile</h1>

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


      {/* these should move into nav bar instead    */}
      <Button
        className="m-1"
        onClick={() => {
          logout();
        }}
      >
        Logout
          </Button>
      <Button
        className="m-1"
        onClick={e => {
          e.preventDefault();
          props.history.push("/feed");
        }}
      >
        Feed
            </Button>
      <Button
        className="m-1"
        onClick={e => {
          e.preventDefault();
          props.history.push("/profile");
        }}
      >
        Profile
            </Button>
    </div>
  )
}

export default EditProfile


