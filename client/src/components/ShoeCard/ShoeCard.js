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

import pinPic from '../../images/pinTack.png';

export class ShoeCard extends Component {
  constructor(props) {
    super(props);
    //this.currentUserId = 0;
  }

  // componentDidMount() {
  //   axios.get('/api/auth/user_data').then((response) => {
  //     console.log(response.data.id);
  //     this.currentUserId = response.data.id;
  //   });
  // }

  render() {
    return (
      <div>
        <Card className='shoeCard'>
          <Card.Text className="mx-auto"><img src={pinPic} style={{backgroundColor: "#fdfd96", height: "50px", width: "75px", padding: '0'}}></img></Card.Text>
          <Card.Img
            variant='top'
            className='cardPhoto'
            src={this.props.photoSrc}
          />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
          </Card.Body>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item bg-transparent border-info'>
              Condition: {this.props.shoeCondition}
            </li>
            <li className='list-group-item bg-transparent border-info'>Size: {this.props.size}</li>
            <li className='list-group-item bg-transparent border-info'>
              Estimated Value: ${this.props.value}
            </li>
            <li
              className='list-group-item list-group-item-action border-info'
              //Click event to collect the user ID and post ID of Favorited item and push into the Favorites record
              onClick={this.props.handleFavorite}
              data-postid={this.props.postId}
              style={{backgroundColor: "#fdfd96"}}
            >
              <FontAwesomeIcon icon={faHeart} /> Favorite
            </li>

            <li
              className='list-group-item list-group-item-action border-info'
              onClick={this.props.getSellerId}
              data-userid={this.props.userId}
              style={{backgroundColor: "#fdfd96"}}
            >
              <FontAwesomeIcon icon={faUser} /> Seller Profile
            </li>
          </ul>
          <Card.Body className="border-info" style={{backgroundColor: "#fdfd96"}}>
            <Card.Link href='#'>Trade</Card.Link>
            <Card.Link href='#'>Buy</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ShoeCard;
