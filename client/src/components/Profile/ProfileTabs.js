import React, { useState, useEffect } from 'react';
import { Tab, Row, Col, Nav, Image } from 'react-bootstrap';
import API from '../../utils/API';
import axios from 'axios';

import EditProfile from './EditProfile';
import ProfileInfo from './ProfileInfo';

export default function ProfileTabs() {
  const style = {
    border: 'black solid 2px',
  };

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userId: '',
    bio: '',
    profileImg: '',
  });

  useEffect(() => {
    axios.get('/api/auth/user_data').then((user) => {
      API.getProfile(user.data.id).then((profile) => {
        setUserData({
          firstName: user.data.firstName,
          lastName: user.data.lastName,
          email: user.data.email,
          bio: profile.data.bio,
          profileImg: profile.data.profileImg,
        });
        console.log(user.data, profile.data[0]);
      });
    });
  }, []);

  return (
    <div style={style}>
      <Tab.Container
        id='uncontrolled-tab-example'
        defaultActiveKey='yourprofile'
      >
        <Row>
          <Col sm={3}>
            <Nav variant='pills' className='flex-column'>
              <Nav.Item className='profileTab'>
                <Nav.Link className='tabOne' eventKey='yourprofile'>
                  Your Profile
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='editProfileTab'>
                <Nav.Link className='tabTwo' eventKey='editprofile'>
                  Edit Profile
                </Nav.Link>
              </Nav.Item>
              <Col xs={6} md={4}>
                <Image
                  className='profilePic'
                  src={userData.profileImg}
                  rounded
                />
              </Col>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey='yourprofile'>
                <ProfileInfo
                  firstName={userData.firstName}
                  lastName={userData.lastName}
                  email={userData.email}
                  bio={userData.bio}
                />
              </Tab.Pane>
              <Tab.Pane eventKey='editprofile'>
                <EditProfile />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
