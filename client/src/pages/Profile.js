import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Button, Col, Row, Container } from 'react-bootstrap';
import '../App.css';

import ProfileContainer from '../components/Profile/ProfileContainer';
import Navigation from '../components/Navigation/Navigation';

// import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

function Profile(props) {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <div className='profileBody'>
        <Navigation />
        <h2 className='profHeader'>Profile Page</h2>
        <div classname='profilePadding'>
          <Container className='fluid'>
            <Row>
              <Col sm={1}></Col>
              <Col sm={10}>
                <div className='pb-5 mx-auto'>
                  <ProfileContainer/>
                </div>
              </Col>
              <Col sm={1}></Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
