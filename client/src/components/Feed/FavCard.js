import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export class FavCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card className='favCard'>
          <Card.Img
            className='cardPhoto'
            variant='top'
            src={this.props.photoSrc}
          />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
          </Card.Body>
          <ul className='list-group list-group-flush'>
            <li
              onClick={this.props.handleViewProfile}
              data-userid={this.props.userId}
              className='list-group-item list-group-item-action'
            >
              <FontAwesomeIcon icon={faUser} /> Seller Profile
            </li>
          </ul>
        </Card>
      </div>
    );
  }
}

export default FavCard;
