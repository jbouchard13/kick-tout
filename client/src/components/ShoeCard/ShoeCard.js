import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export class ShoeCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../assets/images/nike-tulip-pink.png" />
                    <Card.Body>
                        <Card.Title>Nike OFF-WHITE x Zoom Fly "TULIP PINK"</Card.Title>
                    </Card.Body>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Condition: Brand New in Box</li>
                        <li className="list-group-item">Size: 9 1/2</li>
                        <li className="list-group-item">Estimated Value: $524.00</li>
                        <li href="#" className="list-group-item list-group-item-action"><FontAwesomeIcon icon={faHeart} /> Favorite</li>

                        <li href="#" className="list-group-item list-group-item-action"><FontAwesomeIcon icon={faUser} /> Seller Profile</li>
                    </ul>
                    <Card.Body>
                        <Card.Link href="#">Trade</Card.Link>
                        <Card.Link href="#">Buy</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ShoeCard
