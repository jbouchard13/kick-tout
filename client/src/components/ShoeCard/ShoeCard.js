import React, { Component, useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import API from '../../utils/API';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Feed/feed.css';


export class ShoeCard extends Component {
  constructor(props) {
    super(props)
    this.currentUserId = 0;
  }

  componentDidMount() {
    axios.get('/api/auth/user_data').then((response) => {
      console.log(response.data.id);
      this.currentUserId = response.data.id;
    });
  }

  render() {
    return (
      <div>
        <Card className="shoeCard">
          <Card.Img variant="top" className="cardPhoto" src={this.props.photoSrc} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
          </Card.Body>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Condition: {this.props.shoeCondition}
            </li>
            <li className="list-group-item">Size: {this.props.size}</li>
            <li className="list-group-item">
              Estimated Value: ${this.props.value}
            </li>
            <li
              href={this.props.postId}
              className="list-group-item list-group-item-action"
              //Click event to collect the user ID and post ID of Favorited item and push into the Favorites record
              onClick={(e) => {
                const userId = this.currentUserId;
                const postId = this.props.postId;
                console.log(
                  'User ID: ' +
                  this.currentUserId +
                  'Post ID: ' +
                  this.props.postId
                );
                API.addFavorite(postId, userId).then((response) => {
                  toast.success('Saved!', {
                    autoClose: 1000,
                  });
                  setTimeout(() => {
                    
                  }, 1000);
                })
                  .catch((err) => {
                    toast.error('An error occurred');
                  });
              }}
            >
              <FontAwesomeIcon icon={faHeart} /> Favorite
            </li>

            <li
              href={this.props.userId}
              className="list-group-item list-group-item-action"
            >
              <FontAwesomeIcon icon={faUser} /> Seller Profile
            </li>
          </ul>
          <Card.Body>
            <Card.Link href="#">Trade</Card.Link>
            <Card.Link href="#">Buy</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ShoeCard;
