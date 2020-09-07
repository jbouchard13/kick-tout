import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import FavoritesBar from '../components/Feed/FavoritesBar';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import API from '../utils/API';
import '../components/Feed/feed.css';
import "../App.css";

import { Container, Row, Col } from 'react-bootstrap';


export default function MyPosts() {
  const [postsArray, setPostsArray] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    axios.get('/api/auth/user_data').then((response) => {
      setUserId(response.data.id);
      API.getPostsByUser(response.data.id).then((postData) => {
        setPostsArray(postData.data);
      });
    });
  }, []);

  const handleEdit = (e) => {
    const postId = e.target.dataset.postid;
    console.log(postId);
  };

  const handleDelete = (e) => {
    console.log(e.target.dataset.postid);
    const postId = e.target.dataset.postid;
    API.deletePost(postId, userId)
      .then((posts) => {
        setPostsArray(posts.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='position-absolute w-100'>
      <Navigation />
      <Container fluid>
        <h2 className="page-header">My Favorites</h2>
        <Row className="justify-content-md-center">
          <Col>
            <FavoritesBar fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
