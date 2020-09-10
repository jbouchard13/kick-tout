import React, { useEffect, useState } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';

import CardContainer from '../Feed/CardContainer';
import Filter from '../Feed/Filter';
import UserGreeting from '../Feed/UserGreeting';
import SellerProfile from '../../pages/SellerProfile';

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
    </>
  );
}

export default FeedWrapper;
