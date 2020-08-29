import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export class ShoeCard extends Component {
  render() {
    return (
      <div>
        <Card className="shoeCard">
          <Card.Img variant='top' src={this.props.photoSrc} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
          </Card.Body>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              Condition: {this.props.shoeCondition}
            </li>
            <li className='list-group-item'>Size: {this.props.size}</li>
            <li className='list-group-item'>
              Estimated Value: ${this.props.value}
            </li>
            <li
              href={this.props.postId}
              className='list-group-item list-group-item-action'
            >
              <FontAwesomeIcon icon={faHeart} /> Favorite
            </li>

            <li
              href={this.props.userId}
              className='list-group-item list-group-item-action'
            >
              <FontAwesomeIcon icon={faUser} /> Seller Profile
            </li>
          </ul>
          <Card.Body>
            <Card.Link href='#'>Trade</Card.Link>
            <Card.Link href='#'>Buy</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ShoeCard;
