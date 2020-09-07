import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

import '../components/Feed/feed.css';

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardContainer from '../components/Feed/CardContainer';
import Filter from '../components/Feed/Filter';
import UserGreeting from '../components/Feed/UserGreeting';
import SellerProfile from '../pages/SellerProfile';

import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import { urlencoded } from 'body-parser';
import bostonPic from '../../public/assets/images/bostonPic.jpg';

function Feed(props) {
  const history = useHistory();

  // set a boolean state to control whether a profile is rendered or not
  const [viewProfile, setViewProfile] = useState(false);
  const [sellerId, setSellerId] = useState('');

  const getSellerId = (e) => {
    let id = e.target.dataset.userid;
    setSellerId(id);
    setViewProfile(true);
  };

  const handleBackToFeed = () => {
    setViewProfile(false);
  };

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
    <>
      <Navigation />
      <Parallax pages={1} scrolling={true} horizontal ref={ref => (this.parallax = ref)}>
        <ParallaxLayer offset={0} speed = {0} style={{ backgroundImage: url("../../public/assets/images/bostonPic.jpg"), backgroundsSize: 'cover' }} >
          <Container fluid>
            <ToastContainer />
            {!viewProfile && (
              <Row>
                <Col sm={10}>
                  <UserGreeting />
                </Col>
                <Col sm={2}>
                  <Filter />
                </Col>
              </Row>
            )}

            <Row className='justify-content-md-center'>
              <Col>
                {!viewProfile && <CardContainer getSellerId={getSellerId} fluid />}
                {viewProfile && (
                  <SellerProfile
                    handleBackToFeed={handleBackToFeed}
                    sellerId={sellerId}
                  />
                )}
              </Col>
            </Row>
          </Container>
        </ParallaxLayer>
      </Parallax>
      <Footer className="footer" />
    </>
  );
}

export default Feed;
