import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Col } from 'react-bootstrap';

import CreatePostForm from '../components/PostManagement/CreatePostForm';
import Navigation from '../components/Navigation/Navigation';

import '../components/PostManagement/postMgmt.css';

export default function CreatePost() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <Navigation />
      <h1>Create a new post</h1>
      <Col sm={10}>
        <CreatePostForm className="createForm" />
      </Col>
    </div>
  );
}
