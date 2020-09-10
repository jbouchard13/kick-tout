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

  render() {
    return (
      <div>
        <Card className='shoeCard'>
          <Card.Text className='mx-auto'>
            <img
              src={pinPic}
              style={{
                backgroundColor: '#fcfba7',
                height: '50px',
                width: '75px',
                padding: '0',
              }}
            ></img>
          </Card.Text>
          <Card.Img
            variant='top'
            className='cardPhoto'
            style={{
              height: '200px',
            }}
            src={this.props.photoSrc}
          />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
          </Card.Body>
          <ul className='list-group list-group-flush'>
            <li
              className='list-group-item bg-transparent'
              style={{
                borderStyle: 'solid',
                borderColor: '#6fa8f2',
                borderWidth: '2.5px, 0px',
              }}
            >
              Brand: {this.props.brand}
            </li>

            <li
              className='list-group-item bg-transparent'
              style={{
                borderStyle: 'solid',
                borderColor: '#6fa8f2',
                borderWidth: '2.5px, 0px',
              }}
            >
              Condition: {this.props.shoeCondition}
            </li>
            <li
              className='list-group-item bg-transparent'
              style={{
                borderStyle: 'solid',
                borderColor: '#6fa8f2',
                borderWidth: '2.5px, 0px',
              }}
            >
              Size: {this.props.size}
            </li>
            <li
              className='list-group-item bg-transparent'
              style={{
                borderStyle: 'solid',
                borderColor: '#6fa8f2',
                borderWidth: '2.5px, 0px',
              }}
            >
              Estimated Value: ${this.props.value}
            </li>
            <li
              className='list-group-item list-group-item-action'
              //Click event to collect the user ID and post ID of Favorited item and push into the Favorites record
              onClick={this.props.handleFavorite}
              data-postid={this.props.postId}
              style={{
                backgroundColor: '#fcfba7',
                borderStyle: 'solid',
                borderColor: '#6fa8f2',
                borderWidth: '2.5px, 0px',
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon icon={faHeart} /> Favorite
            </li>

            <li
              className='list-group-item list-group-item-action'
              onClick={this.props.getSellerId}
              data-userid={this.props.userId}
              style={{
                backgroundColor: '#fcfba7',
                borderStyle: 'solid',
                borderColor: '#6fa8f2',
                borderWidth: '2.5px, 0px',
                cursor: 'pointer',
              }}
            >
              <FontAwesomeIcon icon={faUser} /> Seller Profile
            </li>
          </ul>
          {/* <Card.Body style={{ backgroundColor: '#fcfba7' }}>
            <Card.Link
              href={`mailto:${this.props.email}? subject=${this.props.name}`}
            >
              Contact Poster
            </Card.Link>
          </Card.Body> */}
        </Card>
      </div>
    );
  }
}

export default ShoeCard;
