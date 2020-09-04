import React, { useContext, useEffect } from "react";
import { Redirect, useHistory } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import "../App.css";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col, Figure } from "react-bootstrap";
import ImgCarousel from '../components/Home/ImgCarousel';


import LoginForm from '../components/Home/LoginForm';
// import AbsoluteWrapper from '../components/Animation/AbsoluteWrapper';

function Home(props) {
  const history = useHistory();

  const displayHistoryMessage = () => {
    if (history.location.state &&
      history.location.state.hasOwnProperty('message')
    ) {
      console.log("saved")
       toast.success(history.location.state.message);
    }
  }

  useEffect(() => {
    displayHistoryMessage();
  }, []);

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
    <div className='position-absolute w-100'>
      <Container className="signup">
        <ToastContainer/>
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
    </div>
  );
}

export default Home;



