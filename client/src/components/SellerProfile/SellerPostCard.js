import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import pinPic from '../../images/pinTack.png';

export class SellerPostCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card className='favCard'>
          <Card.Text className="mx-auto"><img src={pinPic} style={{backgroundColor: "#fcfba7", height: "auto", width: "75px", padding: '0'}}></img></Card.Text>
          <Card.Img
            className='cardPhoto'
            variant='top'
            src={this.props.photoSrc}
          />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Link
              href={`mailto:${this.props.email}? subject=${this.props.name}?`}
            >
              <FontAwesomeIcon icon={faEnvelope} />{' '}
              {`Contact ${this.props.firstName}`}
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SellerPostCard;
