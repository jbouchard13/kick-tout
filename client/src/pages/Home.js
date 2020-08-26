import React, { useContext, useState } from "react";
import { Redirect } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import "../App.css";
import { Container, Row, Col, Carousel, Figure } from "react-bootstrap";

import LoginForm from '../components/Home/LoginForm';
import ImgCarousel from '../components/Home/ImgCarousel';




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
            <Figure.Caption className="tout">
              tout - attempt to sell something, typically by pestering people in an aggressive or bold manner.
              </Figure.Caption>
            <Figure>

            </Figure>
            <ImgCarousel />
          </Col>
        </Row>
        <Row>
          <Container className="signup">
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <LoginForm {...props} />
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
  );
}

export default Home;



