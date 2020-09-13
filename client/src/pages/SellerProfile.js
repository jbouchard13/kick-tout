import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';
import API from '../utils/API';
import '../App.css';

import SellerProfileInfo from '../components/SellerProfile/SellerProfileInfo';
import SellerPostsContainer from '../components/SellerProfile/SellerPostsContainer';

import pinPic from '../images/greenPin.png';
import redPin from '../images/pinTack.png';

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
      <Row className="sellerHeaderBgd mt-4">
      <img className='mx-auto d-block' src={pinPic} 
      style={{
        backgroundColor: 'transparent', 
        height: 'auto', 
         width: '75px',
        padding: '0',
        }}
        ></img>
        <Col sm={12}>
          <h2 className='profileHeader'>
            {profileData.firstName} {profileData.lastName}'s Profile
          </h2>
        </Col>
        <Col className="float-right" sm={3}>
          <Button variant='dark' onClick={props.handleBackToFeed}>
            Go Back
          </Button>
        </Col>
      </Row>

      <Container className="fluid mt-5">
        <Row style={{backgroundColor: "#fcfba7", paddingBottom: "3.5rem"}}>
        <Col sm={12} style={{borderBottom: '1px solid #6fa8f2'}}>
        <img className='mx-auto d-block' src={redPin} 
        style={{
        backgroundColor: 'transparent', 
        height: 'auto', 
         width: '75px',
        padding: '0',
        }}
        ></img>
        </Col>
          <Col sm={3}>
            <Image
              style={{ width: '100%', height: '100%', backgroundColor:"#fcfba7"}}
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
