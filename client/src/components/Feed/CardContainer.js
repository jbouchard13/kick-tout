import React, { useState, useEffect } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import ShoeCard from '../ShoeCard/ShoeCard';
import API from '../../utils/API';

export default function CardContainer() {
  // set up state for post data to be inserted into from backend
  const [postState, setPostState] = useState({
    // set state as an empty array. this way we can map over the returned data to generate shoe cards
    postsArray: [],
  });
  // useEffect hook used to gather post data when the container component first mounts to the page
  useEffect(() => {
    API.getAllPosts().then((posts) => {
      // set the state's postsArray to the results of the api call
      setPostState({ postsArray: posts.data });
    });
  }, []);


  return (
    <div>
      <CardDeck>
        {postState.postsArray.map((post) => (
          <ShoeCard className="shoeCard"
            photoSrc={post.photoSrc}
            name={post.name}
            shoeCondition={post.shoeCondition}
            content={post.content}
            size={post.size}
            value={post.value}
            userId={post.UserId}
            postId={post.id}
          />
        ))}
      </CardDeck>
    </div>
  );
}

