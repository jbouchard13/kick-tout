import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
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
    <>
    <div className="myFavBgd">
      <Navigation />
      <div className="favHeaderBgd my-5">
        <h2 className="page-header">My Favorites</h2>
        </div>
      <Container className="mypostBody justify-content-center mt-3 pb-5">
        <Row>
          <Col>
            <FavoritesBar />
          </Col>
        </Row>
      </Container>
      <div className="pb-5"></div>
      </div>
      <Footer className="footer"/>
    </>
  );
}
