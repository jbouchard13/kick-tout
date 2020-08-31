import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


export class FavCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Card className="favCard">
                    <Card.Img variant="top" src={this.props.photoSrc} />
                    <ul className="list-group list-group-flush">
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

export default FavCard
