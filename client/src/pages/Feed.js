import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import '../components/Feed/feed.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardContainer from '../components/Feed/CardContainer';
import Filter from '../components/Feed/Filter';
import UserGreeting from '../components/Feed/UserGreeting';
// import AbsoluteWrapper from '../components/Animation/AbsoluteWrapper';

import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

function Feed(props) {
  const history = useHistory();

  const displayHistoryMessage = () => {
    if (
      history.location.state &&
      history.location.state.hasOwnProperty('message')
    ) {
      toast.success(history.location.state.message);
    }
  };
  // console log necessary to display notification
  console.log(displayHistoryMessage());

  useEffect(() => {
    displayHistoryMessage();
  }, []);

  const { logout } = useContext(AuthContext);

  return (
    <div className='position-absolute w-100'>
      <Navigation />
      <Container fluid>
        <ToastContainer />
        <Row>
          <Col sm={10}><UserGreeting /></Col>
          <Col sm={2}>
            <Filter />
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col>
            <CardContainer fluid />
          </Col>
        </Row>
      </Container>
      <Footer />
  </div>
  );
}

export default Feed;
