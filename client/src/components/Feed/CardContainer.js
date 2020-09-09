import React, { useState, useEffect } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
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

  // useEffect hook used to gather post data when the container component first mounts to the page
  useEffect(() => {
    API.getAllPosts().then((posts) => {
      // set the state's postsArray to the results of the api call
      console.log(posts.data);
      setPostState({ postsArray: posts.data });
    });
    // get current user's id
    axios.get('/api/auth/user_data').then((response) => {
      console.log(response.data.id);
      setUserId(response.data.id);
    });
  }, []);

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
      <CardDeck>
        {postState.postsArray.map((post) => (
          <ShoeCard
            key={post.id}
            className='shoeCard'
            photoSrc={post.photoSrc}
            name={post.name}
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
