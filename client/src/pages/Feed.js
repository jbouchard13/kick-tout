import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

import '../components/Feed/feed.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FeedWrapper from '../components/Feed/FeedWrapper';
import CardContainer from '../components/Feed/CardContainer';
import Filter from '../components/Feed/Filter';
import UserGreeting from '../components/Feed/UserGreeting';
import SellerProfile from '../pages/SellerProfile';

import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import { urlencoded } from 'body-parser';
import pinPic from '../images/greenPin.png';

function Feed(props) {
  // const [viewProfile, setViewProfile] = useState(false);
  // const [sellerId, setSellerId] = useState('');

  // const getSellerId = (e) => {
  //   let id = e.target.dataset.userid;
  //   setSellerId(id);
  //   setViewProfile(true);
  // };

  // const handleBackToFeed = () => {
  //   setViewProfile(false);
  // };

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
    <>
      {/* <Navigation />
      <Container fluid>
        <ToastContainer />
        <FeedWrapper />
      </Container>
      <Footer className='footer' />
    </> */}
      <div className='feedBody'>
        <Navigation />

        <Container className='fluid'>
          <FeedWrapper />
        </Container>

        <Footer className='footer' />
        {/* please dont delete, removes white space */}
        <div className='pb-5'></div>
      </div>
    </>
  );
}

export default Feed;
