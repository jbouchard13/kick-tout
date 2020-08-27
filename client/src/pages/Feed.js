import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Button } from 'react-bootstrap';
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import CardContainer from '../components/Feed/CardContainer';
import FavoritesBar from '../components/Feed/FavoritesBar';
import Filter from '../components/Feed/Filter';

// import Navigation from '../components/Navigation/Navigation';
// import Footer from '../components/Footer/Footer';



function Feed(props) {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <h1>Nav goes here</h1>
      <Container fluid>
        <Row>
          <Col sm={10}>Container header</Col>
          <Col sm={2}>
            <Filter />
          </Col>
        </Row>

        <Row>
          <Col sm={3}>
            <FavoritesBar />
          </Col>
          <Col sm={9}>
            <CardContainer />
          </Col>
        </Row>
      </Container>
      <h1>Footer goes here</h1>





      {/* these should move into nav bar instead    */}

      <Button
        className="m-1"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
      <Button
        className="m-1"
        onClick={(e) => {
          e.preventDefault();
          props.history.push('/profile');
        }}
      >
        Profile
      </Button>
    </>
  );
}

export default Feed;
