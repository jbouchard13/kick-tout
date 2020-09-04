import React, { useState, useEffect } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Navigation from '../components/Navigation/Navigation';
import FavoritesBar from '../components/Feed/FavoritesBar';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import API from '../utils/API';
import '../components/Feed/feed.css';


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
      <h2>Your Favorites</h2>
      <CardDeck>
      <FavoritesBar />

      </CardDeck>
  </div>
  );
}
