import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { Container, Col, Row } from 'react-bootstrap';
import API from '../utils/API';
import '../App.css';

import ProfileContainer from '../components/Profile/ProfileContainer';

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
          userId: props.sellerId,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 className='page-header'>
        {profileData.firstName} {profileData.lastName}'s Profile
      </h2>
      {/* 
      <Container fluid>
        <Row>
          <Col sm={10}></Col>
          <Col sm={2}></Col>
        </Row>

        <Row>
          <Col sm={3}></Col>
          <Col sm={9}>
            <ProfileContainer />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default SellerProfile;
