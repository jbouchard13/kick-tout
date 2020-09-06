import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import SellerPostCard from './SellerPostCard';
import CardDeck from 'react-bootstrap/CardDeck';

export default function SellerPostsContainer(props) {
  // store the seller's posts
  const [sellerPosts, setSellerPosts] = useState([]);

  // call for seller's posts on mount
  useEffect(() => {
    console.log(props);
    API.getPostsByUser(props.userId)
      .then((posts) => {
        console.log(posts.data);
        setSellerPosts(posts.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CardDeck>
      {sellerPosts.map((post) => (
        <SellerPostCard name={post.name} photoSrc={post.photoSrc} />
      ))}
    </CardDeck>
  );
}
