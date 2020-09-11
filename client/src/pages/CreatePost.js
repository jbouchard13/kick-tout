import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Col, Row, Container } from 'react-bootstrap';

import CreatePostForm from '../components/PostManagement/CreatePostForm';
import Navigation from '../components/Navigation/Navigation';


import '../components/PostManagement/postMgmt.css';

export default function CreatePost() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="postBody">
      <Navigation />
      <h2 className="post-page-header">Create a new post</h2>
      <Container className="fluid" id="postcontainer">
        <Row className='justify-content-md-center'>
          <Col className="pb-5">
            <CreatePostForm className="createForm" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}




