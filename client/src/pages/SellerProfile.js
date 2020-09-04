import React, { useContext } from 'react';
import { AuthContext } from "../AuthContext";
import { Container, Col, Row } from "react-bootstrap";
import "../App.css";

import ProfileContainer from "../components/Profile/ProfileContainer"

function SellerProfile(props) {

  const { logout } = useContext(AuthContext);

  return (
    <div className='position-absolute w-100'>
      <h1>Seller Profile</h1>

      <Container fluid>
        <Row>
          <Col sm={10}></Col>
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
    </div>
  )
}

export default SellerProfile


