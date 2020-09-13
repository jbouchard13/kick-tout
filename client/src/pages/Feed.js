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
          <ToastContainer />
          {!viewProfile && (
            <Row className='mt-3'>
              {/* <Col sm={2}>
                  <Filter />
                </Col> */}
            </Row>
          )}

          <Row className='mypostBody justify-content-center mt-5'>
            <Col className='pb-5 mb-5'>
              {/* <Col sm={12}></Col> */}
              {!viewProfile && (
                <>
                  <div className='greetBgd justify-content-center mt-3'>
                    <img
                      className='mx-auto d-block'
                      src={pinPic}
                      style={{
                        backgroundColor: 'transparent',
                        height: 'auto',
                        width: '75px',
                        padding: '0',
                        marginBottom: '-10px',
                      }}
                    ></img>
                    <UserGreeting />
                    <Col sm={12}>
                    <ul className="text-center my-4">
                      <li className="">Here you can view listed postings.</li>
                      <li className="mt-2">Click on the Favorite button to save a post to your favorites page.</li>
                      <li className="mt-2">If you'd like to make a purchase, click on the seller profile to contact the poster.</li>
                      <li className="mt-2">Use the search bar to look for shoes by brand name.</li>
                    </ul>
                    </Col>
                  </div>
                  <CardContainer getSellerId={getSellerId} classNmae="fluid" />
                </>
              )}
              {viewProfile && (
                <SellerProfile
                  handleBackToFeed={handleBackToFeed}
                  sellerId={sellerId}
                />
              )}
            </Col>
          </Row>
        </Container>

        <Footer className='footer' />
        {/* please dont delete, removes white space */}
        <div className='pb-5'></div>
      </div>
    </>
  );
}

export default Feed;
