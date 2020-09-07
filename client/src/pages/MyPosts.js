import React, { useState, useEffect } from 'react';
// import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Col } from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck';
import Navigation from '../components/Navigation/Navigation';
import PostCard from '../components/PostCard/PostCard';
import EditPostForm from '../components/PostManagement/EditPostForm';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

import axios from 'axios';
import API from '../utils/API';

export default function MyPosts() {
  const [postsArray, setPostsArray] = useState([]);
  const [userId, setUserId] = useState('');
  const [image, setImage] = useState(null);
  const [editingPost, setEditingPost] = useState(false);
  const [postId, setPostId] = useState('');
  const [editingForm, setEditingForm] = useState({
    type: 'Buy',
    name: '',
    size: '4',
    brand: '',
    shoeCondition: 'Very poor',
    value: '',
  });

  useEffect(() => {
    axios.get('/api/auth/user_data').then((response) => {
      setUserId(response.data.id);
      API.getPostsByUser(response.data.id).then((postData) => {
        setPostsArray(postData.data);
      });
    });
  }, []);

  const handleEdit = (e) => {
    // get post id from selected post
    const currentPostId = e.target.dataset.postid;
    setPostId(currentPostId);
    // grab that post's full data
    API.getPostsByPostId(currentPostId)
      .then((post) => {
        console.log(post);

        // set that to the editing state to be passed to the form that generates
        setEditingForm({
          ...editingForm,
          type: post.data.type,
          name: post.data.name,
          size: post.data.size,
          brand: post.data.brand,
          shoeCondition: post.data.shoeCondition,
          value: post.data.value,
        });

        // set editing to true to display the form
        setEditingPost(true);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const parsedValue = parseInt(editingForm.value);
    console.log(parsedValue);
    // check if name and brand are filled out
    if (editingForm.name === '' || editingForm.brand === '') {
      toast.error('Please fill out all of the fields and try again', {
        autoClose: 5000,
      });
      return;
    }
    // check if value is a number
    if (isNaN(parsedValue) === true) {
      toast.error('Please enter a number for the value', {
        autoClose: 5000,
      });
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('type', editingForm.type);
    formData.append('name', editingForm.name);
    formData.append('size', editingForm.size);
    formData.append('brand', editingForm.brand);
    formData.append('shoeCondition', editingForm.shoeCondition);
    formData.append('value', editingForm.value);
    // submit new data to the db to update the post
    API.updatePost(postId, userId, formData)
      .then((posts) => {
        // update the displayed posts
        setPostsArray(posts.data);
        // display all posts by setting editing to false
        setEditingPost(false);
        toast.success('Post updated successfully');
      })
      .catch((err) => {
        // checks if the error response is because of incorrect file uploaded
        if (err.response.data.message === 'Invalid image file') {
          toast.error(err.response.data.message);
        } else toast.error('Error updating post');
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setEditingPost(false);
  };

  const handleEditOnChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    setEditingForm({ ...editingForm, [name]: value });
  };

  const handleImageOnChange = (e) => {
    let image = e.target.files[0];
    setImage(image);
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
      <Navigation />
      <h2 className='page-header'>My Posts</h2>
      <p>Here you can keep keep track of, update, and delete your postings.</p>
      <ToastContainer />
      <Col sm={12} lg={8}>
        <CardDeck>
          {/* if user is editing the selected post (editingPost: true)*/}
          {editingPost && (
            <EditPostForm
              type={editingForm.type}
              name={editingForm.name}
              size={editingForm.size}
              brand={editingForm.brand}
              shoeCondition={editingForm.shoeCondition}
              value={editingForm.value}
              handleEditOnChange={handleEditOnChange}
              handleImageOnChange={handleImageOnChange}
              handleEditSubmit={handleEditSubmit}
              handleCancel={handleCancel}
            />
          )}
          {/* if the user is looking at all of their posts (editingPost: false) */}
          {!editingPost &&
            postsArray.map((post) => (
              <PostCard
                className='editPost'
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
      </Col>
    </>
  );
}
