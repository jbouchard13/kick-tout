import React from 'react'
import "../App.css";
import SignupForm from "../components/SignUp/SignupForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import AbsoluteWrapper from '../components/Animation/AbsoluteWrapper';

function Signup(props) {
  return (
    <div className='position-absolute w-100'>
    <Container className="signup">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <SignupForm {...props} />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Signup;
