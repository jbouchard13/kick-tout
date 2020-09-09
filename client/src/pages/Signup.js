import React from 'react'
import "../App.css";
import SignupForm from "../components/SignUp/SignupForm";
import { Container, Row, Col, Figure } from "react-bootstrap";


function Signup(props) {
  return (
    <Container className="signup">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Figure>
            <Figure.Image
              className="logo"
              height={180}
              alt="logo"
              src="../assets/images/kick-tout.gif"
            />
          </Figure>
          <Figure.Caption className="tout">
            tout - attempt to sell something, typically by pestering people in an aggressive or bold manner.
          </Figure.Caption>
        </Col>
      </Row>
      <Row>
        <Container className="signup">
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <SignupForm {...props} />
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default Signup;
