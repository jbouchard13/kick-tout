import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

import '../components/Feed/feed.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FeedWrapper from '../components/Feed/FeedWrapper';
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
    <>
      <Navigation />
      <Container fluid>
        <ToastContainer />
        <FeedWrapper />
      </Container>
      <Footer className='footer' />
    </>
  );
}

export default Feed;
