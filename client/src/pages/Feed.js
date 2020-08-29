import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import { Button, Container, Row, Col } from "react-bootstrap";
import "../App.css";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardContainer from '../components/Feed/CardContainer';
import FavoritesBar from '../components/Feed/FavoritesBar';
import Filter from '../components/Feed/Filter';
import UserGreeting from '../components/Home/UserGreeting';

// import Navigation from '../components/Navigation/Navigation';
// import Footer from '../components/Footer/Footer';



function Feed(props) {
  const history = useHistory();

  const displayHistoryMessage = () => {
    if (history.location.state &&
      history.location.state.hasOwnProperty('message')
    ) {
       toast.success(history.location.state.message);
    }
  }
  // console log necessary to display notification
  console.log (displayHistoryMessage())

  useEffect(() => {
    displayHistoryMessage();
  }, []);
    
    const { logout } = useContext(AuthContext);

    return (
      <>
        <h1>Nav goes here
        
        </h1>
        <Container fluid>
        <ToastContainer />
        <UserGreeting />
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

