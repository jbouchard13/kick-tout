import React, { useState, useEffect } from 'react';
import { CardDeck, Form, Col, Row, Button } from 'react-bootstrap';
import ShoeCard from '../ShoeCard/ShoeCard';
import API from '../../utils/API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function CardContainer(props) {
  // set up state for post data to be inserted into from backend
  const [postState, setPostState] = useState({
    // set state as an empty array. this way we can map over the returned data to generate shoe cards
    postsArray: [],
  });
  const [userId, setUserId] = useState('');

  // set up state to handle user's search terms
  const [search, setSearch] = useState('');

  // useEffect hook used to gather post data when the container component first mounts to the page
  useEffect(() => {
    API.getAllPosts().then((posts) => {
      // set the state's postsArray to the results of the api call
      // console.log(posts.data);
      setPostState({ postsArray: posts.data });
    });
    // get current user's id
    axios.get('/api/auth/user_data').then((response) => {
      // console.log(response.data.id);
      setUserId(response.data.id);
    });
  }, []);

  const handleSearchInputChange = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    API.getPostsByQuery(search)
      .then((posts) => {
        if (posts.data.length === 0) {
          toast.error('No results found');
        } else {
          setPostState({ postsArray: posts.data });
        }
      })
      .catch(() => {
        toast.error('Error while searching');
      });
  };

  const handleClearSearch = (e) => {
    e.preventDefault();
    API.getAllPosts().then((posts) => {
      setSearch('');
      setPostState({ postsArray: posts.data });
    });
  };

  const handleFavorite = (e) => {
    const postId = e.target.dataset.postid;
    // console.log(
    //   'User ID: ' + this.currentUserId + 'Post ID: ' + this.props.postId
    // );
    API.addFavorite(postId, userId)
      .then((response) => {
        toast.success('Saved!', {
          autoClose: 1000,
        });
        setTimeout(() => {}, 1000);
      })
      .catch((err) => {
        toast.error('An error occurred');
      });
  };

  return (
    <div>
<<<<<<< HEAD
      <Form className='form' onSubmit={handleSearch}>
=======

      

      <Form className='form' style={{margin: '0 auto', width: "80%", paddingLeft: "8rem"}}>
>>>>>>> 9f8834adb60cc8cb08b4856321deb52eac9d5acb
        <Row>
          <Col md={6}>
            <Form.Control
              name='search'
              value={search}
              type='text'
              onChange={handleSearchInputChange}
            />
          </Col>
          <Col md={3}>
            <Button className="mr-2" as='submit' variant='dark' onClick={handleSearch}>
              Search
            </Button>

            <Button as='submit' variant='dark' onClick={handleClearSearch}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
      <CardDeck className='justify-content-center'>
        {postState.postsArray.map((post) => (
          <ShoeCard
            key={post.id}
            className='shoeCard'
            photoSrc={post.photoSrc}
            name={post.name}
            brand={post.brand}
            shoeCondition={post.shoeCondition}
            content={post.content}
            size={post.size}
            value={post.value}
            userId={post.UserId}
            postId={post.id}
            handleFavorite={handleFavorite}
            getSellerId={props.getSellerId}
          />
        ))}
      </CardDeck>
    </div>
  );
}
