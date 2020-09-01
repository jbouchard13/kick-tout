import React, { useState, useEffect } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';
import CardDeck from 'react-bootstrap/CardDeck';
import Navigation from '../components/Navigation/Navigation';
import PostCard from '../components/PostCard/PostCard';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import API from '../utils/API';

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
        setPostsArray(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navigation />
      <h2>Your posts</h2>
      <p>Here you can keep keep track of, update, and delete your postings.</p>
      <CardDeck>
        {postsArray.map((post) => (
          <PostCard
            key={post.id}
            photoSrc={post.photoSrc}
            name={post.name}
            shoeCondition={post.shoeCondition}
            content={post.content}
            size={post.size}
            value={post.value}
            userId={post.UserId}
            postId={post.id}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </CardDeck>
    </>
  );
}
