import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';
import API from '../utils/API';
import '../App.css';

import SellerProfileInfo from '../components/SellerProfile/SellerProfileInfo';
import SellerPostsContainer from '../components/SellerProfile/SellerPostsContainer';

function SellerProfile(props) {
  const { logout } = useContext(AuthContext);

  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    location: '',
    profileImg: '',
    userId: '',
  });

  useEffect(() => {
    API.getProfile(props.sellerId)
      .then((profile) => {
        console.log(profile.data);
        setProfileData({
          ...profileData,
          firstName: profile.data.firstName,
          lastName: profile.data.lastName,
          email: profile.data.email,
          bio: profile.data.bio,
          location: profile.data.location,
          profileImg: profile.data.profileImg,
          userId: profile.data.userId,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Row>
        <Col sm={6}>
          <h2 className='page-header'>
            {profileData.firstName} {profileData.lastName}'s Profile
          </h2>
        </Col>
        <Col sm={6}>
          <Button variant='dark' onClick={props.handleBackToFeed}>
            Go Back
          </Button>
        </Col>
      </Row>

      <Container fluid>
        <Row>
          <Col sm={3}>
            <Image
              style={{ width: '100%', height: '100%' }}
              src={profileData.profileImg}
            />
          </Col>
          <Col sm={9}>
            <SellerProfileInfo
              firstName={profileData.firstName}
              lastName={profileData.lastName}
              email={profileData.email}
              bio={profileData.bio}
              location={profileData.location}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SellerPostsContainer
              email={profileData.email}
              userId={props.sellerId}
              firstName={profileData.firstName}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SellerProfile;
