import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Col, Row, Container } from 'react-bootstrap';

import CreatePostForm from '../components/PostManagement/CreatePostForm';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';


import '../components/PostManagement/postMgmt.css';

export default function CreatePost() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="postBody">
      <Navigation />
      <h2 className="post-page-header my-3">Create a New Post</h2>
      <Container id="postcontainer">
        <Row className='justify-content-md-center'>
          <Col sm={12} className="pb-5">
            <CreatePostForm className="createForm" />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}




