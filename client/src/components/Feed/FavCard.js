import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'

import pinPic from '../../images/pinTack.png';



export class FavCard extends Component {
<<<<<<< HEAD
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Card className="favCard ">
                <Card.Text className="mx-auto"><img src={pinPic} style={{backgroundColor: "#fcfba7", height: "auto", width: "75px", padding: '0'}}></img></Card.Text>
                    <Card.Img className="cardPhoto" variant="top" src={this.props.photoSrc} />
                    <ul className="list-group list-group-flush">
                        <li href="#" className="list-group-item list-group-item-action" style={{backgroundColor: "#fcfba7"}}><FontAwesomeIcon icon={faUser} /> Seller Profile</li>
                    </ul>
                    <Card.Body>
                        <Card.Link href="#">Trade</Card.Link>
                        <Card.Link href="#">Buy</Card.Link>

                    </Card.Body>
                </Card>
            </div>
        )
    }
=======
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
>>>>>>> 9479c43941c567a7571c344749f111f09a75553d
}

export default FavCard;
