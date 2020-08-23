import React, { useContext, useState } from "react";
import { Redirect } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import "../App.css";
import { Container, Row, Button, Col } from "react-bootstrap";
import Figure from 'react-bootstrap/Figure';
import LoginForm from '../components/Home/LoginForm';


function Home(props) {

  const { isAuth } = useContext(AuthContext);

  // const [secret, setSecret] = useState("");

  // this function is duplicated in the Members page component
  // consider refactor 
  // const getSecret = async () => {
  //   const secretResponse = await Axios.get("/api/secrets");
  //   console.log(secretResponse.data);
  //   setSecret(secretResponse.data);
  // };

  return (
    isAuth ? <Redirect to='/feed' />
            : 
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
          <Figure.Caption>
            tout - attempt to sell something, typically by pestering people in an aggressive or bold manner.
  </Figure.Caption>
          <Figure>
            <Figure.Image
              className="sneaks"
              width={800}
              alt="sneaks"
              src="../assets/images/sneaks.gif"
            />
          </Figure>
        </Col>
      </Row>
      <Row>
      <Container className="signup">
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <LoginForm {...props}/>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}

export default Home;
