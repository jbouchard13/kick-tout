import React, { useState, useEffect } from 'react';
import { Tab, Row, Col, Nav, Image, Form } from 'react-bootstrap';
import API from '../../utils/API';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './profile.css';

import EditProfile from './EditProfile';
import ProfileInfo from './ProfileInfo';

export default function ProfileTabs() {
  const style = {
    border: 'black solid 2px',
  };

  const imageStyle = {
    borderRadius: '60%',
    overflow: 'hidden',
    width: '200px',
  };

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
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
          location: profile.data.location,
          bio: profile.data.bio,
          profileImg: profile.data.profileImg,
          userId: user.data.id,
        });
        console.log(user.data, profile.data);
      });
    });
  }, []);

  const imageOnChange = (e) => {
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    axios
      .post(`/api/upload/${userData.userId}`, formData)
      .then((image) => {
        console.log(image.data);
        setUserData({ ...userData, profileImg: image.data });
        toast.success('Image uploaded successfully');
      })
      .catch((err) => {
        toast.error('Error while updating image');
      });
  };

  const handleOnChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ensure all necessary fields are filled out
    if (
      userData.firstName === '' ||
      userData.lastName === '' ||
      userData.email === ''
    ) {
      toast.error('Please fill out all of the fields and try again', {
        autoClose: 5000,
      });
      return;
    }

    API.updateProfile(userData.userId, userData)
      .then((response) => {
        console.log(response);
        toast.success('Profile updated', {
          autoClose: 2000,
        });
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data === 'enter valid email') {
          toast.error('Please enter a valid email');
        } else {
          toast.error('An error occurred');
        }
      });
  };

  return (
    <div style={style}>
      <ToastContainer position='top-right' />
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
                  style={imageStyle}
                  className='profilePic'
                  src={userData.profileImg}
                />
              </Col>
              <Form.File
                className='profileUpload'
                id='profileImageUpload'
                label='Update Image'
                onChange={imageOnChange}
              ></Form.File>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane
                eventKey='yourprofile'>
                <ProfileInfo
                  firstName={userData.firstName}
                  lastName={userData.lastName}
                  email={userData.email}
                  bio={userData.bio}
                  location={userData.location}
                />
              </Tab.Pane>
              <Tab.Pane
                eventKey='editprofile'>
                <EditProfile
                  firstName={userData.firstName}
                  lastName={userData.lastName}
                  email={userData.email}
                  bio={userData.bio}
                  location={userData.location}
                  handleOnChange={handleOnChange}
                  handleSubmit={handleSubmit}
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
