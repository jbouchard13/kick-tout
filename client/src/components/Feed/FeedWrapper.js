import React, { useEffect, useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';

import CardContainer from '../Feed/CardContainer';
import Filter from '../Feed/Filter';
import UserGreeting from '../Feed/UserGreeting';
import SellerProfile from '../../pages/SellerProfile';
import pinPic from '../../images/greenPin.png';
import { ToastContainer, toast } from 'react-toastify';

function FeedWrapper(props) {
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

  return (
    <>
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
                  <ul className='text-center my-4'>
                    <li className=''>Here you can view listed postings.</li>
                    <li className='mt-2'>
                      Click on the Favorite button to save a post to your
                      favorites page.
                    </li>
                    <li className='mt-2'>
                      If you'd like to make a purchase, click on the seller
                      profile to contact the poster.
                    </li>
                    <li className='mt-2'>
                      Use the search bar to look for shoes by brand name.
                    </li>
                  </ul>
                </Col>
              </div>
              <CardContainer getSellerId={getSellerId} classNmae='fluid' />
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
    </>
  );
}

export default FeedWrapper;
